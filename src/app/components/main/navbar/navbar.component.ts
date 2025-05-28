import { Component } from '@angular/core';
import { ApiLoginService } from '../../../services/user-services/api-login/api-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated = false;
  userNickname: string | null = null;

  constructor(
    private apiLoginService: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiLoginService.currentUser$.subscribe(user => {
      this.isAuthenticated = !!user;
      this.userNickname = user?.nickname || null;
    });
  }

  logout(): void {
    this.apiLoginService.logout();
    this.reloadComponent();
  }
  reloadComponent() {
    this.router.navigate(['/storeComponent']).then(() => {
      window.location.reload();
    });
  }
}
