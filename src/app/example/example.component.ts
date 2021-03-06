/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component }      from '@angular/core';

import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  title     = 'elpmaxE 4 ralugnA';
  condition = { active: true };

  constructor(private sercvice: ExampleService) {}

  getServiceHeader(): string {
    return this.sercvice.getHeader();
  }

}

@Component({ template: '<div id="view1">This is view1</div>' })
export class View1Component {}

@Component({ template: '<div id="view2">This is view2</div>' })
export class View2Component {}

@Component({ template: '<div id="view3">This is view3</div>' })
export class View3Component {}
