import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-navbar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './shop-navbar.component.html',
  styles: ``
})
export class ShopNavbarComponent {
  public searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
  })
  constructor(
    private router: Router,
  ) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/']);
  }

  onSubmit(): void  {
    if (this.searchForm.invalid) {
      return;
    }
    const query = this.searchForm.value.search;
    this.router.navigate(['/shop/feed'], { queryParams: { q: query } });
  }
}
