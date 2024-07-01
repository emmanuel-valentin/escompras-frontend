import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopNavbarComponent } from '../shop-navbar/shop-navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [RouterOutlet, ShopNavbarComponent, FooterComponent],
  templateUrl: './shop-layout.component.html',
  styles: ``,
})
export class ShopLayoutComponent {}
