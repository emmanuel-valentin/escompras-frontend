import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from '../auth-navbar/auth-navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, AuthNavbarComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styles: ``
})
export class AuthLayoutComponent {

}
