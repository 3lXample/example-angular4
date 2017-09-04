/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { ExampleComponent }     from './example.component';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ExampleRoutingModule
  ],
  declarations: [
    ExampleComponent
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
