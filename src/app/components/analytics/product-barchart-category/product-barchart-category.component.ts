import { ApiProductService } from './../../../services/product-service/api-product.service';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-barchart-category',
  standalone: false,
  templateUrl: './product-barchart-category.component.html',
  styleUrl: './product-barchart-category.component.css'
})
export class ProductBarchartCategoryComponent implements OnInit {

  // Opciones del gráfico
  public barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 2,
    scales: {
      x: {}, // habilita el eje X
      y: {
        beginAtZero: true // comienza en cero para claridad
      }
    },
    plugins: {
      legend: {
        display: false // ocultar leyenda si no es necesaria
      }
    }
  };

  // Tipo de gráfico
  public barChartType: ChartType = 'bar';

  // Datos iniciales vacíos
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        label: 'Cantidad por rol'
      }
    ]
  };

  constructor(
    private apiProductService: ApiProductService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.apiProductService.getProducts().subscribe(
      (data) => {
        const categoryCounts: { [key: string]: number } = {};

        data.forEach(product => {
          const category = product.category || 'Sin categoría';
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });

        const categories = Object.keys(categoryCounts);
        const cantidades = Object.values(categoryCounts);
        const colores = ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF6384', '#36A2EB'];

        // Asignamos el objeto completo para que Angular detecte el cambio
        this.barChartData = {
          labels: categories,
          datasets: [
            {
              label: 'Cantidad por rol',
              data: cantidades,
              backgroundColor: colores.slice(0, categories.length)
            }
          ]
        };

        console.log('Labels:', categories);
        console.log('Data:', cantidades);

        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
