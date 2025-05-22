import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Importar HttpClientModule

// Importa el módulo de Angular Material
import { MaterialModule } from './material.module';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { HomeComponent } from './components/main/home/home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';  // Asegúrate de importar el archivo correcto
import { FormsModule } from '@angular/forms';
import { AdminDashComponent } from './components/user/admin-dash/admin-dash.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { StoreComponent } from './components/main/store/store.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { FeaturedProductsComponent } from './components/main/featured-products/featured-products.component';
import { CorrouselAdsComponent } from './components/main/corrousel-ads/corrousel-ads.component';
import { ShampooProductsComponent } from './components/main/shampoo-products/shampoo-products.component';
import { FeaturedBrandsComponent } from './components/main/featured-brands/featured-brands.component';
import { FaceProductsComponent } from './components/main/face-products/face-products.component';
import { MarykayDescriptionComponent } from './components/main/marykay-description/marykay-description.component';
import { FooterStoreComponent } from './components/main/footer-store/footer-store.component';
import { SpecialOffComponent } from './components/main/special-off/special-off.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    UserLoginComponent,
    AdminDashComponent,
    UserCreateComponent,
    ProductListComponent,
    UserRegisterComponent,
    ProductCreateComponent,
    StoreComponent,
    NavbarComponent,
    FeaturedProductsComponent,
    CorrouselAdsComponent,
    ShampooProductsComponent,
    FeaturedBrandsComponent,
    FaceProductsComponent,
    MarykayDescriptionComponent,
    FooterStoreComponent,
    SpecialOffComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Agregar HttpClientModule en la sección de imports (apis)
    MaterialModule,  // Aquí se importa el módulo que contiene todos los módulos de Angular Material
    FormsModule

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())  // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
