import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Asegúrate de tener la ruta correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';  // Almacenamos el mensaje de error aquí

  constructor(private authService: AuthService, private router: Router) {}

  // Control del cambio de inputs
  onInputChange(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    if (field === 'username') {
      this.username = target.value;
    } else if (field === 'password') {
      this.password = target.value;
    }
  }

  // Enviar datos de login
  onLogin(): void {
    const credentials = { username: this.username, password: this.password };

    // Realizamos la llamada al servicio
    this.authService.login(credentials).subscribe(
      (response) => {
        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);  // Si el usuario es administrador
        } else {
          this.router.navigate(['/user']);  // Si el usuario no es administrador
        }
      },
      (error) => {
        this.errorMessage = 'Error al iniciar sesión. Verifique sus credenciales.'; // Asignamos el error
      }
    );
  }
}
