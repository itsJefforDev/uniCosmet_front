import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-barchart-category',
  standalone: false,
  templateUrl: './product-barchart-category.component.html',
  styleUrl: './product-barchart-category.component.css'
})
export class ProductBarchartCategoryComponent {

  
  isBrowser: boolean;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = [];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Cantidad por categoría',
        backgroundColor: '#42A5F5'
      }
    ]
  };

  public barChartType: ChartType = 'bar';


  product: any[] = [];

  constructor(private apiProductService: ApiProductService, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      this.getProducts();
    }

  }

  getProducts(): void {
    this.apiProductService.getProducts().subscribe(
      (data) => {
        const categoryCounts: { [key: string]: number } = {};

        data.forEach(product => {
          const category = product.category || 'Sin categoría';
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });

        this.barChartData.labels = Object.keys(categoryCounts);
        this.barChartData.datasets[0].data = Object.values(categoryCounts);
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  };

 
}
