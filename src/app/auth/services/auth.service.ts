import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, pipe, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { RegisterData } from '../interfaces/register-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/login`, {
      email,
      password,
    });
  }

  register(user: RegisterData): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`);
  }

  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/me`, user);
  }

  checkStatus(): Observable<boolean> {
    return this.http.get<User>(`${this.baseUrl}/auth/check-status`).pipe(
      map(({ token }) => !!token),
      catchError(() => of(false))
    );
  }
}
