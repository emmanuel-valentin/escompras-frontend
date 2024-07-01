import { Route } from '@angular/router';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Route[] = [
  { path: 'feed', component: FeedPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: '**', redirectTo: 'feed', pathMatch: 'full' },
];
