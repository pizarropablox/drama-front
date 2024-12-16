import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>Bienvenido a Drama Store</h2><p>Los mejores productos a tu alcance</p>`
})
export class HomeComponent {
  products = [
    { name: 'Producto 1', price: 100, description: 'Descripción del producto 1' },
    { name: 'Producto 2', price: 200, description: 'Descripción del producto 2' },
    { name: 'Producto 3', price: 300, description: 'Descripción del producto 3' }
  ];
}





