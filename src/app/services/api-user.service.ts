import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Para manejar las respuestas asincrónicas

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  //private apiUrl = 'http://localhost:8080/api/user'; // URL de la API de ejemplo
  private apiUrl = 'https://unicosmet-back.onrender.com/api/user';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para eliminar un usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un usuario
  updateUser(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user);
  }

  // Actualizar un usuario
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  // obtener usuario ppr id
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
