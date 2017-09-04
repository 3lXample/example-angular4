/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { NgModule }                                       from '@angular/core';
import { RouterModule, Routes }                           from '@angular/router';

import { View1Component, View2Component, View3Component } from './example.component';

const routes: Routes = [
  { path: '',      redirectTo: '/view1', pathMatch: 'full' },
  { path: 'view1', component: View1Component },
  { path: 'view2', component: View2Component },
  { path: 'view3', component: View3Component },
  { path: '**',    redirectTo: '/view1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class ExampleRoutingModule {}
