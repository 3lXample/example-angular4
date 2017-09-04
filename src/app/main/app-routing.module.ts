/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { PaginationComponent }  from './pagination/pagination.component';

const routes: Routes = [
  { path: '',           component: HomeComponent, pathMatch: 'full' },
  { path: 'pagination', component: PaginationComponent },
  { path: 'addition',   component: HomeComponent },
  { path: '**',         redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
