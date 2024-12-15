import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Define las rutas
export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: RegisterComponent } // Register page
];
