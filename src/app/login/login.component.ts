import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  // Puedes cambiar esta variable por "email" si es más apropiado
  password: string = '';
  errorMessage: string = '';
  showLoginForm: boolean = true; // Controla si el formulario de login es visible

  constructor(private authService: AuthService, private router: Router) {}

  // Controlar los cambios en el input manualmente
  onUsernameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.username = target.value;
  }

  onPasswordChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  onLogin(): void {
    const credentials = { email: this.username, password: this.password };
  
    this.authService.login(credentials).subscribe(
      (response) => {
        // Asegúrate de que el backend devuelva algo útil, como el rol del usuario.
        // Verifica la estructura de la respuesta (que debería ser un objeto JSON, no solo un string)
        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.role === 'USER') {
          this.router.navigate(['/user']);
        } else {
          // Si el backend no devuelve un campo "role", maneja el caso apropiadamente
          this.errorMessage = 'No se pudo determinar el rol del usuario.';
        }
      },
      (error) => {
        this.errorMessage = 'Error al iniciar sesión. Verifique sus credenciales.';
      }
    );
  }
  

  // Alterna la visibilidad del formulario de login
  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}
