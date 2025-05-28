import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-barchart-rol',
  standalone: false,
  templateUrl: './user-barchart-rol.component.html',
  styleUrl: './user-barchart-rol.component.css'
})
export class UserBarchartRolComponent {
  isBrowser: boolean;

  public barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: -1, // 1 = cuadrado (ancho:alto)
  };

  public barChartLabels: string[] = [];

  public barChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Cantidad por categoría',
        backgroundColor: ['#42A5F5',  '#66BB6A']
      }
    ]
  };

  public barChartType: ChartType = 'pie';


  user: any[] = [];

  constructor(private apiUserService: ApiUserService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      this.getUsers();
    }

  }

  getUsers(): void {
    this.apiUserService.getUsers().subscribe(
      (data) => {
        const rolCounts: { [key: string]: number } = {};

        data.forEach(user => {
          const rol = user.rol || 'Sin categoría';
          rolCounts[rol] = (rolCounts[rol] || 0) + 1;
        });

        this.barChartData.labels = Object.keys(rolCounts);
        this.barChartData.datasets[0].data = Object.values(rolCounts);
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  };
}
