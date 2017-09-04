/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { browser, by, element } from 'protractor';

export class ExamplePage {

  navigateTo() {
    return browser.get('#/');
  }

  getHeaderEl() {
    return element(by.css('h1#header'));
  }

  getHeaderText() {
    return this.getHeaderEl().getText();
  }

}
