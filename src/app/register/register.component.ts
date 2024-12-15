import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
  errorMessage: string = '';  // Almacenamos el error aquí

  constructor(private authService: AuthService, private router: Router) {}

  // Controlar el cambio en los inputs
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

  // Enviar datos para registrar un usuario
  onRegister(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    const newUser = { username: this.username, password: this.password };
    this.authService.register(newUser).subscribe(
      (response) => {
        this.router.navigate(['/login']); // Redirige a login tras registro
      },
      (error) => {
        this.errorMessage = 'Error al registrar usuario. Verifique los datos.'; // Asignamos el error
      }
    );
  }
}
