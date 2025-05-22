import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent} from './components/user/user-login/user-login.component';
import { HomeComponent } from './components/main/home/home.component';
import { AdminDashComponent } from './components/user/admin-dash/admin-dash.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { StoreComponent } from './components/main/store/store.component';

const routes: Routes = [
  { path: 'userLoginComponent', component: UserLoginComponent },
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'AdminDashComponent', component: AdminDashComponent },
  { path: 'UserListComponent', component: UserListComponent },
  { path: 'userRegisterComponent', component: UserRegisterComponent },
  { path: 'storeComponent', component: StoreComponent },
  { path: '', redirectTo: '/HomeComponent', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
