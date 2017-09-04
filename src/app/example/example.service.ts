/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

  // Add Constants
  static readonly exampleConstant: string = 'built by Anisetus Elly Efendi';

  // Add Values
  exampleValue = 'Angular 4.3.6';

}
