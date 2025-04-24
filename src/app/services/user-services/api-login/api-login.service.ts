import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {


  private baseUri = 'http://localhost:8080/api/auth'; // URL de tu API de Spring Boot

 

  constructor(private http: HttpClient) {}

  login(nickname: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseUri}/login`,
      { nickname, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }
}
