import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';

@Component({
  selector: 'app-user-card-count',
  standalone: false,
  templateUrl: './user-card-count.component.html',
  styleUrl: './user-card-count.component.css'
})
export class UserCardCountComponent {
users: any[] = [];
userCount:number = 0;

constructor(private apiUserService: ApiUserService) { }
ngOnInit(): void {
    this.getUsers(); // Llamamos a la función para obtener los usuarios cuando el componente se inicialice
    this.userCount = this.users.length;

  }

    // Método para obtener los usuarios de la API
  getUsers(): void {
    this.apiUserService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
