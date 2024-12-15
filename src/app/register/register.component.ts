import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', password: '', confirmPassword: '' };

  onSubmit() {
    console.log('Nuevo Usuario:', this.user.username);
  }
}
