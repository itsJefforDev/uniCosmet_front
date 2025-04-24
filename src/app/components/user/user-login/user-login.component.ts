import { Component } from '@angular/core';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';
import { Router } from '@angular/router';// Usaremos el enrutador para redirigir

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  nickname: string = '';
  password: string = '';
  showError: string = ''; // Variable para mostrar el mensaje de error

  constructor(private apiLoginService: ApiLoginService, private router: Router) { }

  // Método para manejar el inicio de sesión
  onSubmit() {
    this.apiLoginService.login(this.nickname, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        // redirigir o mostrar éxito
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  
  };
 
}
