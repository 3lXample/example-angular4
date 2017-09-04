/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { NgModule }                                       from '@angular/core';
import { BrowserModule }                                  from '@angular/platform-browser';

import { ExampleComponent }                               from './example.component';
import { ExampleTemplateComponent }                       from './example-template.component';
import { ExampleService }                                 from './example.service';
import { ExampleAttributeDirective }                      from './example-attribute.directive';
import { ExampleStructuralDirective }                     from './example-structural.directive';
import { ExampleReversePipe }                             from './example-reverse.pipe';
import { ExampleRoutingModule }                           from './example-routing.module';
import { View1Component, View2Component, View3Component } from './example.component';

@NgModule({
  imports: [
    BrowserModule,
    ExampleRoutingModule
  ],
  declarations: [
    ExampleComponent,
    ExampleTemplateComponent,
    ExampleAttributeDirective,
    ExampleStructuralDirective,
    ExampleReversePipe,
    View1Component, View2Component, View3Component
  ],
  providers: [ExampleService],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
