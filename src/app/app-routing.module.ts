import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers login par défaut
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent },
  {path: 'home',component:HomePageComponent},
  {path: 'dashbord',component:DashbordComponent},
  {path: 'welcome',component:WelcomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
