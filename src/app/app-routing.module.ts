import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent} from './components/user/user-login/user-login.component';
import { HomeComponent } from './components/main/home/home.component';
import { AdminDashComponent } from './components/user/admin-dash/admin-dash.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { StoreComponent } from './components/main/store/store.component';
import { ProductCardCountComponent } from './components/analytics/product-card-count/product-card-count.component';
import { DashboardGeneralComponent } from './components/analytics/dashboard-general/dashboard-general.component';
import { UserViewComponent } from './components/user/user-view/user-view.component';
import { UserDashComponent } from './components/user/user-dash/user-dash.component';
import { ListProductPurchaseComponent } from './components/product/list-product-purchase/list-product-purchase.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { UserPurchasesComponent } from './components/user/user-purchases/user-purchases.component';
import { UserEditInfoComponent } from './components/user/user-edit-info/user-edit-info.component';

const routes: Routes = [
  { path: 'userLoginComponent', component: UserLoginComponent },
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'AdminDashComponent', component: AdminDashComponent },
  { path: 'UserListComponent', component: UserListComponent },
  { path: 'userRegisterComponent', component: UserRegisterComponent },
  { path: 'storeComponent', component: StoreComponent },
  { path: 'productCardCountComponent', component: ProductCardCountComponent },
  { path: 'dashboardGeneralComponent', component: DashboardGeneralComponent },
  { path: 'userViewComponent', component: UserViewComponent },
  { path: 'userDashComponent', component: UserDashComponent },
  { path: 'listProductPurchaseComponent', component: ListProductPurchaseComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'userPurchasesComponent', component: UserPurchasesComponent },
  { path: 'userEditInfoComponent', component: UserEditInfoComponent },

  

  

  
  
  { path: '', redirectTo: '/storeComponent', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
