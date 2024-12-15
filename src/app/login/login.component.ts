import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';  // Importar NgIf directamente

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [NgIf]  // Añadir NgIf aquí directamente
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onInputChange(event: Event, field: string): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      if (field === 'username') {
        this.username = input.value;
      } else if (field === 'password') {
        this.password = input.value;
      }
    }
  }

  onLogin(): void {
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        if (response.role === 'ADMIN') {
          window.location.href = '/admin';
        } else {
          window.location.href = '/user';
        }
      },
      (error) => {
        this.errorMessage = 'Error al iniciar sesión. Verifique sus credenciales.';
      }
    );
  }
}
