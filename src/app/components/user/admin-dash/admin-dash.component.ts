import { Router } from '@angular/router';


import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Chart } from 'chart.js';  // Importa Chart.js

@Component({
  selector: 'app-admin-dash',
  standalone: false,
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent {

  constructor(private router: Router) { }

  userCreate: boolean = false;
  userList: boolean = false;

  productList: boolean = false;
  productCreate: boolean = false;

  generalDashBoard: boolean = true;

  hideAllPages() {
    this.userCreate = false;  // Alterna la visibilidad
    this.userList = false;
    this.productList = false;
    this.productCreate = false;
    this.generalDashBoard = false;
    // this.showDash = false;
  }

  showUserCreate() {
    this.hideAllPages();
    this.userCreate = true;
  }
  showUserList() {
    this.hideAllPages();
    this.userList = true;
  }

  showProductList() {
    this.hideAllPages();
    this.productList = true;
  }
  showProductCreate() {
    this.hideAllPages();
    this.productCreate = true;

  }

  showGeneralDashboard() {
    this.hideAllPages();
    this.generalDashBoard = true;
  }

  // showDash = true;

  // reloadDash() {
  //   this.showDash = false;
  //   setTimeout(() => this.showDash = true);
  //   window.location.reload();
  // }

  //  reloadComponent() {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/AdminDashComponent']);
  //   });
  // }
}
