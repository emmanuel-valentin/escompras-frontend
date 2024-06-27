import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

export const routes: Routes = [
  { "path": "", "component": FeedComponent },
  { "path": "login", "component": LoginComponent },
  { "path": "signin", "component": SigninComponent },
  { "path": "**", "redirectTo": "", "pathMatch": "full" }
];
