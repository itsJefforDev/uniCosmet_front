import { SharedServicesService } from './../../../services/shared-services.service';
import { NavbarComponent } from './../../main/navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';


interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  image?: string;
}

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-user-dash',
  standalone: false,
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})


export class UserDashComponent {

  editInfo: boolean = false;
  purchasesUser: boolean = false;
  boardUser: boolean = false;
  purchasesProduct: boolean = true;

  constructor(private sharedService: SharedServicesService) { }

  ngOnInit() {
    this.sharedService.editInfo$.subscribe(value => this.editInfo = value);
    this.sharedService.purchasesUser$.subscribe(value => this.purchasesUser = value);
    this.sharedService.purchasesProduct$.subscribe(value => this.purchasesProduct = value);
  }

  hideAllPages() {
    this.editInfo = false;
    this.purchasesProduct = false;
    this.purchasesUser = false;
  }


  showEditInfo(event: Event) {
    event.preventDefault();
    this.hideAllPages();
    this.editInfo = true;
  }

  showListProductPurchases(event: Event) {
    event.preventDefault();
    this.hideAllPages();
    this.purchasesProduct = true;
  }

  showListPurchases(event: Event) {
    event.preventDefault();
    this.hideAllPages();
    this.purchasesUser = true;
  }
}
