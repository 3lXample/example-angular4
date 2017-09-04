/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, Input } from '@angular/core';

import { ExampleService }   from './example.service';

@Component({
  selector: 'app-example-template',
  template:
    // Inline Template
    '<h1 id="headerTemplate">{{title | exampleReverse}} Component</h1>' +
    '<table>' +
    '  <tr>' +
    '    <td>component</td>' +
    '    <td>:</td>' +
    '    <td><span id="content">{{getContent()}}</span></td>' +
    '  </tr>' +
    '</table>'
})
export class ExampleTemplateComponent {

  @Input() title: string;

  constructor(private service: ExampleService) {}

  getContent(): string {
    return this.service.getHeader();
  }

}
