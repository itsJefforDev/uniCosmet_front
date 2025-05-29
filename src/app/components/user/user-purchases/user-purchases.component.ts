import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../../models/Purchase';
import { ApiPurchaseProductService } from '../../../services/product-service/api-purchase-product/api-purchase-product.service';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-purchases',
  standalone: false,
  templateUrl: './user-purchases.component.html',
  styleUrl: './user-purchases.component.css'
})
export class UserPurchasesComponent implements OnInit {
  purchases: any[] = [];
  loading = true;

  userId!: number;

  constructor(private apiPurchaseProductService: ApiPurchaseProductService, private apiLoginService: ApiLoginService, private router:Router) { }

  ngOnInit(): void {
    this.getPurchases();
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
  }

  getPurchases(): void {
    this.apiPurchaseProductService.getMyPurchases().subscribe(
      (data) => {
        this.purchases = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar compras', error);
        this.loading = false;
      }
    );
  }
}
