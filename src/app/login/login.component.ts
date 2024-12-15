import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Aquí va la lógica de inicio de sesión
  user = { username: '', password: '' };

  onSubmit() {
    console.log('Usuario:', this.user.username, 'Contraseña:', this.user.password);
  }
}
