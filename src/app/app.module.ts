import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { FormsModule } from '@angular/forms';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    UserLoginComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
