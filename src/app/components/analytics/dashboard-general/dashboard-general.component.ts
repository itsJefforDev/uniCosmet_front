import { AdminDashComponent } from './../../user/admin-dash/admin-dash.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-general',
  standalone: false,
  templateUrl: './dashboard-general.component.html',
  styleUrl: './dashboard-general.component.css'
})
export class DashboardGeneralComponent {

  constructor(private router: Router){

  }


}
