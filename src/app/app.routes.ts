import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { CollectionRoutes } from './recipies/collection/collection.routes';

import { LoginComponent } from './login/index';

export const routes: Routes = [
  ...LoginRoutes,
  ...SignupRoutes,
  ...CollectionRoutes,
  { path: '**', component: LoginComponent }
];
