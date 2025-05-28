import { Component } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';

import { Product } from '../../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product-purchase',
  standalone: false,
  templateUrl: './list-product-purchase.component.html',
  styleUrl: './list-product-purchase.component.css'
})
export class ListProductPurchaseComponent {
products: Product[] = [];
  loading = true;

  constructor(
    private apiProductService: ApiProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiProductService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.loading = false;
      }
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
