import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-shop-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop-navbar.component.html',
  styles: ``
})
export class ShopNavbarComponent {
  constructor(
    private readonly authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/']);
  }
}
