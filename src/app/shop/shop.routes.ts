import { Route } from '@angular/router';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';

export const routes: Route[] = [
  { path: 'feed', component: FeedPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'new-post', component: NewPostPageComponent },
  { path: 'edit-post/:id', component: NewPostPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'post/:id', component:  PostDetailPageComponent},
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: '**', redirectTo: 'feed', pathMatch: 'full' },
];
