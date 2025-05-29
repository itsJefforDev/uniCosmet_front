import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';

@Component({
  selector: 'app-user-card-count',
  standalone: false,
  templateUrl: './user-card-count.component.html',
  styleUrl: './user-card-count.component.css'
})
export class UserCardCountComponent implements OnInit {
  users: any[] = [];
  userCount: number = 0;

  constructor(private apiUserService: ApiUserService) { }

  async ngOnInit() {
    await this.getUsers(); // Llamamos a la función para obtener los usuarios cuando el componente se inicialice
  }

  // Método para obtener los usuarios de la API
  getUsers(): void {
    this.apiUserService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.userCount = this.users.length;
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }
}
