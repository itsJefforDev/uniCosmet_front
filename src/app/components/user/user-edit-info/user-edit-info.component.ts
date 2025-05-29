import { UserLoginComponent } from './../user-login/user-login.component';
import { ApiUserService } from './../../../services/api-user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';

@Component({
  selector: 'app-user-edit-info',
  standalone: false,
  templateUrl: './user-edit-info.component.html',
  styleUrl: './user-edit-info.component.css'
})
export class UserEditInfoComponent {
profileForm!: FormGroup;
  userId!: number;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: ApiLoginService, 
    private apiUserService:ApiUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserId()!;
    console.log(this.userId);
    if (!this.userId) {
      this.router.navigate(['/userLoginComponent']);
      return;
    }

    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required],
    });

    this.apiUserService.getUserById(this.userId).subscribe({
      next: (user) => {
        this.profileForm.patchValue(user);
      },
      error: () => {
        this.errorMessage = 'No se pudo cargar la información del usuario.';
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.invalid) return;

    this.loading = true;

    this.apiUserService.updateUser(this.profileForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/userDashComponent']);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Error al actualizar el perfil';
        this.loading = false;
      }
    });
  }
}
