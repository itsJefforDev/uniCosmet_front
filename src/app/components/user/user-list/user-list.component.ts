import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service'; // Importar el servicio
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: any[] = [];  // Aquí almacenamos los usuarios
  selectedUser: any = {};

  filteredUsers: any[] = []; // Usuarios filtrados
  nicknameFilter: string = ''; // Filtro por nickname
  rolFilter: string = ''; // Filtro por rol

  constructor(private apiUserService: ApiUserService) { }

  ngOnInit(): void {
    this.getUsers(); // Llamamos a la función para obtener los usuarios cuando el componente se inicialice
  }

  // Método para obtener los usuarios de la API
  getUsers(): void {
    this.apiUserService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.filteredUsers = data; // Inicializa la lista filtrada con todos los usuarios
      },
      (error) => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }

    // Aplicar los filtros
    applyFilters(): void {
      this.filteredUsers = this.users.filter(user => {
        const matchesNickname = user.nickname.toLowerCase().includes(this.nicknameFilter.toLowerCase());
        const matchesRole = this.rolFilter ? user.rol.toLowerCase() === this.rolFilter.toLowerCase() : true;
        return matchesNickname && matchesRole;
      });
    }

  // Método para abrir el modal y preparar el usuario para edición
  editUser(user: any): void {
    this.selectedUser = { ...user }; // Clonamos el usuario para editarlo sin modificar el original
    // Abre el modal de Bootstrap
    const modalElement = document.getElementById('editUserModal');
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }

    // Método para guardar los cambios del usuario
    saveUser(): void {
      this.apiUserService.updateUser(this.selectedUser).subscribe(
        () => {
          // Cerrar el modal después de guardar
          const modalElement = document.getElementById('editUserModal');
          const modal = new (window as any).bootstrap.Modal(modalElement);
          modal.hide();
          this.getUsers(); // Recargar la lista de usuarios
          Swal.fire(
            'Éxito!',
            'Usuario editado correctamente.',
            'success'
          );
        },
        (error) => {
          console.error('Error al guardar los cambios del usuario', error);
          Swal.fire(
            'Error!',
            'Hubo un problema al guardar los cambios.',
            'error'
          );
        }
      );
    }

     // Método para eliminar usuario
  deleteUser(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiUserService.deleteUser(id).subscribe(
          () => {
            this.getUsers(); // Recargar la lista después de eliminar
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado.',
              'success'
            );
          },
          (error) => {
            console.error('Error al eliminar el usuario', error);
            Swal.fire(
              'Error!',
              'Hubo un problema al eliminar el usuario.',
              'error'
            );
          }
        );
      }
    });
  }
}
