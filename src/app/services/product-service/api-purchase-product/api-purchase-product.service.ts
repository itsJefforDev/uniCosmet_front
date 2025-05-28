import { Purchase } from './../../../models/Purchase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseDTO } from '../../../models/PurchaseDTO';

import { isPlatformBrowser } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ApiPurchaseProductService {

  private apiUrl = 'http://localhost:8080/api/purchases';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {

  }



  // Método para crear una compra
  createPurchase(purchaseData: PurchaseDTO): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post<any>(this.apiUrl, purchaseData, { headers });
  }
  // let headers = new HttpHeaders();

  // if (isPlatformBrowser(this.platformId)) {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     headers = headers.set('Authorization', `Bearer ${token}`);
  //   }
  // }
  // Método para obtener las compras del usuario
  getMyPurchases(): Observable<Purchase[]> {
    const headers = this.createAuthHeaders();
    console.log('entro a la api');
    return this.http.get<Purchase[]>(`${this.apiUrl}/my-purchases`, { headers });
  }

  // let headers = new HttpHeaders();

  // if (isPlatformBrowser(this.platformId)) {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     headers = headers.set('Authorization', `Bearer ${token}`);
  //   }
  // }

  // Método privado para crear headers con autenticación
  private createAuthHeaders(): HttpHeaders {
    let token = '';
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token') || '';
    }
    console.log(token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
