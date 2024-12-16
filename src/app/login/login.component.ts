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
        // Si el backend devuelve una respuesta exitosa
        if (response === "Login exitoso") {
          this.router.navigate(['/home']);  // Redirige al home si el login es exitoso
        } else {
          this.errorMessage = 'Credenciales inválidas';  // Si las credenciales son incorrectas
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
