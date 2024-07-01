import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../interfaces/login-data.interface';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get loginData() {
    const loginData = this.loginForm.value as LoginData;
    return loginData;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginData;
    this.authService
      .login(email, password)
      .pipe(
        tap(({ token }) => {
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      )
      .subscribe(() => this.router.navigate(['/']));
  }
}
