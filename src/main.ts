import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: AppComponent }, 
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
   ])
   
  ]
}).catch(err => console.error(err));
