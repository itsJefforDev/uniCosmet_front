import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';

@Component({
  selector: 'app-product-card-count',
  standalone: false,
  templateUrl: './product-card-count.component.html',
  styleUrl: './product-card-count.component.css'
})
export class ProductCardCountComponent implements OnInit  {
  product: any[] = [];
  productCount:number = 0;

  constructor(private apiProductService: ApiProductService) { }

   async ngOnInit() {
    await this.getProducts();
    
  }

    getProducts(): void {
    this.apiProductService.getProducts().subscribe(
      (data) => {
        this.product = data;
        this.productCount = this.product.length;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    )
  };
}
