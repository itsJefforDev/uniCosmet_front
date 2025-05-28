import { Component } from '@angular/core';
import { Purchase } from '../../../models/Purchase';
import { ApiPurchaseProductService } from '../../../services/product-service/api-purchase-product/api-purchase-product.service';

@Component({
  selector: 'app-user-purchases',
  standalone: false,
  templateUrl: './user-purchases.component.html',
  styleUrl: './user-purchases.component.css'
})
export class UserPurchasesComponent {
  purchases: any[] = [];
  loading = true;

  constructor(private apiPurchaseProductService: ApiPurchaseProductService) { }

  ngOnInit(): void {
    this.getPurchases();
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
