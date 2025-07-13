import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/landing/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'products', loadComponent: () => import('./components/products/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'products/chamatkar', loadComponent: () => import('./components/products/chamatkar/chamatkar.component').then(m => m.ChamatkarComponent) },
  { path: 'products/p3', loadComponent: () => import('./components/products/p3/p3.component').then(m => m.P3Component) }
];
