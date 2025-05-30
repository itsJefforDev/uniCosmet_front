import { Component, Input, OnInit } from '@angular/core';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';
import { Router } from '@angular/router';
import { SharedServicesService } from '../../../services/shared-services.service';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  userNickname: string | null = null;


  purchasesUser: boolean = false;
  editInfo: boolean = false;
  purchasesProduct: boolean = true; 

   constructor(
    private apiLoginService: ApiLoginService,
    private router: Router, private sharedService: SharedServicesService
  ) { 
    this.sharedService.setPurchasesProduct(this.purchasesProduct);
  }


    ngOnInit() {
    this.checkAuthState();
    setTimeout(() => {
      this.checkAuthState();
    }, 300);

    this.sharedService.setPurchasesProduct(this.purchasesProduct);
  }

  hideAllPages() {
    this.purchasesProduct = false;
    this.purchasesUser = false;
    this.editInfo = false

    this.sharedService.setEditInfo(this.editInfo);
    this.sharedService.setPurchasesUser(this.purchasesUser);
    this.sharedService.setPurchasesProduct(this.purchasesProduct);
  }



 
  showEditInfo(event: Event) {
    event.preventDefault(); // Para que no recargue la página
    this.hideAllPages();
    this.editInfo = true;

    this.sharedService.setEditInfo(this.editInfo);
  }

  showPurchasesUser(event: Event) {
    event.preventDefault(); // Para que no recargue la página
    this.hideAllPages();
    this.purchasesUser = true;

    this.sharedService.setPurchasesUser(this.purchasesUser);
  }

  showPurchasesProduct(event: Event) {
    event.preventDefault(); // Para que no recargue la página
    this.hideAllPages();
    this.purchasesProduct = true;

    this.sharedService.setPurchasesProduct(this.purchasesProduct);
  }



  //Obtener nickname usuario autenticado y validar
  private checkAuthState(): void {
    this.isAuthenticated = this.apiLoginService.isAuthenticated;
    this.userNickname = this.apiLoginService.currentUserNickname;

  }

  logout(): void {
    this.apiLoginService.logout();
    this.reloadComponent();
  }
  reloadComponent() {
    this.router.navigate(['/storeComponent']).then(() => {
      window.location.reload();
    });
  }
}
