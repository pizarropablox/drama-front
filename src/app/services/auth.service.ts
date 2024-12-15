import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Hace que el servicio esté disponible globalmente
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/users/login';  // Cambia la URL de acuerdo a tu backend
  private registerUrl = 'http://localhost:8080/api/users/register';  // URL para registrar usuarios

  constructor(private http: HttpClient) {}

  // Método para login
  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  // Método para registro
  register(user: any): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }
}
