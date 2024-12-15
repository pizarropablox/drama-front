// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {} // Inyección del servicio

  onRegister(): void {
    const newUser = { username: this.username, password: this.password, email: this.email };

    this.authService.register(newUser).subscribe(
      (response) => {
        window.location.href = '/login'; // Redirige al login después del registro exitoso
      },
      (error) => {
        this.errorMessage = 'Error al registrar usuario. Intente nuevamente.';
      }
    );
  }
}
