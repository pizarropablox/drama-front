'http://localhost:8080/api/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/users';  // URL del microservicio 'drama-user'

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  isLoggedIn(): boolean {
    // Lógica para verificar si el usuario está logueado, basada en JWT o sesión
    return !!localStorage.getItem('token');
  }
}
