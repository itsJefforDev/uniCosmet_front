import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-barchart-rol',
  standalone: false,
  templateUrl: './user-barchart-rol.component.html',
  styleUrl: './user-barchart-rol.component.css'
})
export class UserBarchartRolComponent implements OnInit {
 public barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 2
  };

  public barChartType: ChartType = 'pie';

  public barChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ]
  };

  constructor(
    private apiUserService: ApiUserService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.apiUserService.getUsers().subscribe(
      (data) => {
        const rolCounts: { [key: string]: number } = {};

        data.forEach(user => {
          const rol = user.rol || 'Sin categoría';
          rolCounts[rol] = (rolCounts[rol] || 0) + 1;
        });

        const roles = Object.keys(rolCounts);
        const cantidades = Object.values(rolCounts);
        const colores = ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF6384', '#36A2EB'];

        this.barChartData = {
          labels: roles,
          datasets: [
            {
              data: cantidades,
              backgroundColor: colores.slice(0, roles.length)
            }
          ]
        };

        console.log('Labels:', roles);
        console.log('Data:', cantidades);

        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
