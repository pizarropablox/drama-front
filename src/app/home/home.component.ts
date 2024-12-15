import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { name: 'Producto 1', price: 100, description: 'Descripción del producto 1' },
    { name: 'Producto 2', price: 200, description: 'Descripción del producto 2' },
    { name: 'Producto 3', price: 300, description: 'Descripción del producto 3' }
  ];
}

