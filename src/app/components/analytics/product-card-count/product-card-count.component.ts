import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';

@Component({
  selector: 'app-product-card-count',
  standalone: false,
  templateUrl: './product-card-count.component.html',
  styleUrl: './product-card-count.component.css'
})
export class ProductCardCountComponent  {
  product: any[] = [];
  productCount:number = 0;

  constructor(private apiProductService: ApiProductService) { }

    ngOnInit(): void {
    this.getProducts();
    this.productCount = this.product.length;
  }

    getProducts(): void {
    this.apiProductService.getProducts().subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    )
  };
}
