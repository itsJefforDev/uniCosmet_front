import { Component } from '@angular/core';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';
import { Router } from '@angular/router';// Usaremos el enrutador para redirigir
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';
  loading = false;

  currentUser: any;

  constructor(private fb: FormBuilder, private apiLoginService: ApiLoginService, private router: Router) {
    this.loginForm = this.fb.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const { nickname, password } = this.loginForm.value;

      this.apiLoginService.login(nickname, password).subscribe({
        next: () => {

          this.apiLoginService.loadCurrentUser()
          this.apiLoginService.currentUser$.subscribe(user => {
            this.currentUser = user;
          });

          if (this.currentUser.rol == "ADMIN") {
            this.router.navigate(['/AdminDashComponent']);
            console.log(this.currentUser); // Redirige al dashboard
          } else {
            this.router.navigate(['/userDashComponent']);
            console.log(this.currentUser);
          }



        },
        error: (err) => {
          this.errorMessage = 'Credenciales incorrectas';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }


  /* old
  // Método para manejar el inicio de sesión
  onSubmit() {
    this.apiLoginService.login(this.nickname, this.password).subscribe(
      (response) => {
        console.log("epa la arepa", response);
        if (response) {
          // Si el login es correcto, redirige al componente de éxito (ejemplo: dashboard)
          this.router.navigate(['/AdminDashComponent']);
        } else {
          // Si el login no es correcto, muestra el modal
          console.log("error credenciales")
          this.showError = "error credenciales";
        }
      },
      (error) => {
        // En caso de error (por ejemplo, problemas con la API), muestra el modal
        console.log("error api", error)
        this.showError = "error api";
      }
    );
  }*/
}
