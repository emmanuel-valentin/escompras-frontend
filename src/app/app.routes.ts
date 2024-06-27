import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';

export const routes: Routes = [
  { "path": "", "component": FeedComponent },
  { "path": "**", "redirectTo": "", "pathMatch": "full" }
];
