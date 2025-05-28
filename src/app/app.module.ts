import { NgChartsModule } from 'ng2-charts';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Importar HttpClientModule

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
import { ProductCardCountComponent } from './components/analytics/product-card-count/product-card-count.component';
import { DashboardGeneralComponent } from './components/analytics/dashboard-general/dashboard-general.component';
import { UserCardCountComponent } from './components/analytics/user-card-count/user-card-count.component';
import { ProductBarchartCategoryComponent } from './components/analytics/product-barchart-category/product-barchart-category.component';
import { UserBarchartRolComponent } from './components/analytics/user-barchart-rol/user-barchart-rol.component';
import { UserViewComponent } from './components/user/user-view/user-view.component';
import { UserDashComponent } from './components/user/user-dash/user-dash.component';
import { ListProductPurchaseComponent } from './components/product/list-product-purchase/list-product-purchase.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { UserPurchasesComponent } from './components/user/user-purchases/user-purchases.component';
import { JwtInterceptor } from './utils/JwtInterceptor';
import { isPlatformBrowser } from '@angular/common';



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
    ProductCardCountComponent,
    DashboardGeneralComponent,
    UserCardCountComponent,
    ProductBarchartCategoryComponent,
    UserBarchartRolComponent,
    UserViewComponent,
    UserDashComponent,
    ListProductPurchaseComponent,
    ProductDetailsComponent,
    UserPurchasesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Agregar HttpClientModule en la sección de imports (apis)
    MaterialModule,  // Aquí se importa el módulo que contiene todos los módulos de Angular Material
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
    

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),  // Configura HttpClient para usar fetch
        { 
      provide: 'LOCALSTORAGE', 
      useFactory: (platformId: Object) => {
        if (isPlatformBrowser(platformId)) {
          return window.localStorage;
        }
        return null;
      },
      deps: [PLATFORM_ID]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
