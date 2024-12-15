// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Ruta al HTML del componente
  styleUrls: ['./app.component.css']    // Ruta al CSS del componente
})
export class AppComponent {
  title = 'drama-front'; // Título de la aplicación
}
