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
  public user?: User;
  private baseUrl = `${environment.baseUrl}/auth`;

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, {
      email,
      password,
    }).pipe(
      tap(user => this.user = user)
    );
  }

  register(user: RegisterData): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user).pipe(
      tap(user => this.user = user)
    );
  }

  checkStatus(): Observable<boolean> {
    return this.http.get<User>(`${this.baseUrl}/check-status`).pipe(
      map(({ token }) => !!token),
      catchError(() => of(false)),
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}
