import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';// Usaremos el enrutador para redirigir
import { catchError, Observable, tap, throwError } from 'rxjs';



interface AuthRequest {
  nickname: string;
  password: string;
}

interface AuthResponse {
  token: string;
  nickname: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})



export class ApiLoginService {

  

  private baseUri = 'http://localhost:8080'; // URL de tu API de Spring Boot

  //private baseUri = 'https://unicosmet-back.onrender.com';

  constructor(private http: HttpClient, private router: Router ) { }

  login(nickname: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUri}/api/auth/authenticate`, { nickname, password }).pipe(
      tap(response => {
        // Guardar token y datos en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('nickname', response.nickname);
        localStorage.setItem('rol', response.rol);
        console.log(response);
      })
    );
  }

    logout(): void {
    // Eliminar datos de autenticación
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    localStorage.removeItem('rol');
    this.router.navigate(['/userLoginComponent']);
  }

    isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

    getToken(): string | null {
    return localStorage.getItem('token');
  }

  /*
  old

  login(nickname: string, password: string): Observable<any> {
    const params = new HttpParams()
    .set('nickname', nickname)
    .set('password', password);
    return this.http.post(this.baseUri + '/api/auth/authenticate', {
      params
    }).pipe(
      catchError(error => {
        console.error('Error en el login:', error);
        return throwError(error);  // Propaga el error para que lo manejes donde lo consumas
      })
    );
  }
  */

}
