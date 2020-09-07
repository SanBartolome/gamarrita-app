import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'provider-app',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages-provider/provider-tabs/provider-tabs.module').then(
            (mod) => mod.ProviderTabsModule
          ),
      },
    ],
  },
  {
    path: 'app',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages-user/user-tabs/user-tabs.module').then(
            (mod) => mod.UserTabsModule
          ),
      },
    ],
  },
  {
    path: 'provider-login',
    loadChildren: () =>
      import('./pages-provider/provider-login/provider-login.module').then(
        (m) => m.ProviderLoginModule
      ),
  },
  {
    path: 'user-login',
    loadChildren: () =>
      import('./pages-user/user-login/user-login.module').then(
        (m) => m.UserLoginModule
      ),
  },

  {
    path: 'user-shopping-cart',
    loadChildren: () =>
      import('./pages-user/user-shopping-cart/user-shopping-cart.module').then(
        (m) => m.UserShoppingCartModule
      ),
  },

  {
    path: '**',
    redirectTo: environment.isUserApp ? '/user-login' : '/provider-login',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
