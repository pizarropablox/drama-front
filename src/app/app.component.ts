import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Definimos este componente como independiente
  imports: [RouterModule],  // Importamos RouterModule para usar el enrutamiento
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método para navegar de manera programática
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
