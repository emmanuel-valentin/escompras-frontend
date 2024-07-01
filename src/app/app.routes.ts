import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/components/auth-layout/auth-layout.component';
import { ShopLayoutComponent } from './shop/components/shop-layout/shop-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
  },
  {
    path: 'shop',
    component: ShopLayoutComponent,
    loadChildren: () => import('./shop/shop.routes').then(m => m.routes)
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  }
];
