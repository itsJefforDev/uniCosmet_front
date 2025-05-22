import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {


  //private baseUri = 'http://localhost:8080'; // URL de tu API de Spring Boot

  private baseUri = 'https://unicosmet-back.onrender.com';

  constructor(private http: HttpClient) { }



  login(nickname: string, password: string): Observable<any> {
    const params = new HttpParams()
    .set('nickname', nickname)
    .set('password', password);
    return this.http.get(this.baseUri + '/api/auth/login', {
      params
    }).pipe(
      catchError(error => {
        console.error('Error en el login:', error);
        return throwError(error);  // Propaga el error para que lo manejes donde lo consumas
      })
    );
  }
}
