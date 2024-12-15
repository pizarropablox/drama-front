import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método para redirigir a las rutas de login o registro
  navigateTo(page: string): void {
    if (page === 'login') {
      this.router.navigate(['/login']);
    } else if (page === 'register') {
      this.router.navigate(['/register']);
    }
  }
}
