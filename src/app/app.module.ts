import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormDialogComponent } from './form-dialog/form-dialog.component'; // Importez FormsModule ici
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IapageComponent } from './iapage/iapage.component';
import { IaPageComponent } from './ia-page/ia-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CarouselComponent,
    SliderComponent,
    HomePageComponent,
    MenuComponent,
    DashbordComponent,
    WelcomePageComponent,
    SidebarComponent,
    HeaderComponent,
    MainContentComponent,
    FormDialogComponent,
    IapageComponent,
    IaPageComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
