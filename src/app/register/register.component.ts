import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';  // Almacenamos el mensaje de error aquí

  constructor(private authService: AuthService, private router: Router) {}

  // Control del cambio de inputs
  onInputChange(event: Event, field: string): void {
    const target = event.target as HTMLInputElement;
    if (field === 'username') {
      this.username = target.value;
    } else if (field === 'password') {
      this.password = target.value;
    } else if (field === 'confirmPassword') {
      this.confirmPassword = target.value;
    }
  }

  // Enviar datos de registro
  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    const user = { username: this.username, password: this.password };

    // Realizamos la llamada al servicio
    this.authService.register(user).subscribe(
      (response) => {
        this.router.navigate(['/login']);  // Redirigir al login después del registro exitoso
      },
      (error) => {
        this.errorMessage = 'Error al registrar el usuario. Inténtalo de nuevo.'; // Asignamos el error
      }
    );
  }
}
