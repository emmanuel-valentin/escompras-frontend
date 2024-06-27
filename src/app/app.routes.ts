import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';

export const routes: Routes = [
  { "path": "", "component": FeedComponent },
  { "path": "login", "component": LoginComponent },
  { "path": "signin", "component": SigninComponent },
  { "path": "cart", "component": MyCartComponent },
  { "path": "**", "redirectTo": "", "pathMatch": "full" }
];
