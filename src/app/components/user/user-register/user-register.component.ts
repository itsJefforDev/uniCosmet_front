import { Component } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';// Usaremos el enrutador para redirigir

@Component({
  selector: 'app-user-register',
  standalone: false,
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  user: any = {};

  constructor(private apiUserService: ApiUserService, private router: Router) { }
  saveUser(): void {
    this.user.rol = "USER";
    this.apiUserService.createUser(this.user).subscribe(
      () => {
        Swal.fire({
          title: "Registrado!",
          icon: "success",
          draggable: true // Redirige al dashboard
        });
        this.router.navigate(['/userViewComponent']);
      },
      (error) => {
        console.error('Error al guardar los cambios del usuario', error);
        Swal.fire(
          'Error!',
          'Hubo un problema al guardar los cambios.',
          'error'
        );
      }

    )
  };

}