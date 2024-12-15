import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router'; // Importamos RouterModule y Routes
import { routes } from './app.routes'; // Importamos las rutas definidas

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // Importamos RouterModule directamente
})
export class AppComponent {
  title = 'drama-front';

  constructor(private router: Router) {
    this.router.resetConfig(routes);  // Aseguramos que las rutas se configuren manualmente
  }
}
