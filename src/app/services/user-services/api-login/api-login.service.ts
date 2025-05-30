import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';// Usaremos el enrutador para redirigir
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { JwtUtil } from '../../../utils/utils';



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

  public currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  public isAuth = false;
  public userNickname: string | null = null;

  //private baseUri = 'http://localhost:8080'; // URL de tu API de Spring Boot

  private baseUri = 'https://unicosmet-back.onrender.com';

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  private checkToken(): void {
    const token = localStorage.getItem('token');
    const nickname = localStorage.getItem('nickname');

    if (token) {
      this.isAuth = true;
      this.userNickname = nickname;
    }
  }

    get isAuthenticated(): boolean {
    return this.isAuth;
  }

  get currentUserNickname(): string | null {
    return this.userNickname;
  }


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
    // this.router.navigate(['/userLoginComponent']);
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;

    // Decodificar el token para obtener el ID (esto es un ejemplo simplificado)
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id || null; // Asegúrate que tu JWT incluya el userId
  }

  private setCurrentUser(token: string): void {
    const decodedToken = JwtUtil.decodeToken(token);
    const user = {
      nickname: decodedToken.nickname, // O el campo donde guardas el username
      rol: decodedToken.rol,     // Asegúrate que coincide con tu backend
      id: decodedToken.id    // Si incluyes el ID en el token
    };
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }


  loadCurrentUser(): void {
    const token = this.getToken();
    if (token) {
      this.setCurrentUser(token);
    }
  }


}
