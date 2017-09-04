/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exampleReverse' })
export class ExampleReversePipe implements PipeTransform {
  transform(value: string): string {
    const input: string = value || '';
    return input.split('').reduce((sum, val) => {
      return val + sum;
    }, '');
  }
}
