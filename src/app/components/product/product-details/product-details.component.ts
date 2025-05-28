import { Component } from '@angular/core';
import { Product } from '../../../models/Product';
import { ApiProductService } from '../../../services/product-service/api-product.service';
;
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPurchaseProductService } from '../../../services/product-service/api-purchase-product/api-purchase-product.service';

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

  constructor(
    private route: ActivatedRoute,
    private apiProductService: ApiProductService,
    private apiPurchaseProductService: ApiPurchaseProductService,
    private router: Router
  ) {}

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
    this.apiPurchaseProductService.createPurchase({
      productId: this.product.productId,
      quantity: this.quantity
    }).subscribe({
      next: () => {
        alert('Compra realizada con éxito');
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
