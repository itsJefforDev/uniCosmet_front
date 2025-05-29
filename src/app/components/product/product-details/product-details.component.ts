import { ApiLoginService } from './../../../services/user-services/api-login/api-login.service';
import { Component } from '@angular/core';
import { Product } from '../../../models/Product';
import { ApiProductService } from '../../../services/product-service/api-product.service';
;
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPurchaseProductService } from '../../../services/product-service/api-purchase-product/api-purchase-product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product!: Product;
  quantity = 1;
  loading = true;

  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private apiProductService: ApiProductService,
    private apiPurchaseProductService: ApiPurchaseProductService, private apiLoginService: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.apiProductService.getProductById(productId).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product', err);
        this.router.navigate(['/products']);
      }
    });
  }

  purchaseProduct(): void {
    this.userId = this.apiLoginService.getCurrentUserId()!;
    console.log(this.userId);
    if (!this.userId) {
      Swal.fire({
        title: "Parece que no has iniciado sesion",
        text: "Vamos a iniciar sesion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/userLoginComponent']);
        }
        this.router.navigate(['/storeComponent']);
      });
      return;
    }
    this.apiPurchaseProductService.createPurchase({
      productId: this.product.productId,
      quantity: this.quantity
    }).subscribe({
      next: () => {
        Swal.fire({
          title: "Compra realizada!",
          icon: "success",
          draggable: true
        });
        this.router.navigate(['/my-purchases']);
      },
      error: (err) => {
        alert(`Error: ${err.error?.message || 'No se pudo completar la compra'}`);
      }
    });
  }

  get maxQuantity(): number {
    return Math.min(this.product.stock, 10); // Límite de 10 unidades por compra
  }
}
