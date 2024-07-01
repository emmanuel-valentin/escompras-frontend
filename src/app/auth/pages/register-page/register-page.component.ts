import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterData } from '../../interfaces/register-data.interface';
import { catchError, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  public isLoading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get registerData() {
    const registerData = this.registerForm.value as RegisterData;
    return registerData;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    const registerData = this.registerData;
    this.authService
      .register(registerData)
      .pipe(
        tap(({ token }) => {
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      )
      .subscribe({
        complete: () => this.router.navigate(['/']),
        error: (e) => {
          this.isLoading = false;
          this.registerForm.reset();
          alert(JSON.stringify(e.error.message));
        },
      });
  }
}
