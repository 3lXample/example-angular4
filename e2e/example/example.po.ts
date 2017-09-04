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

  hoverHeader() {
    browser.actions().mouseMove(this.getHeaderEl()).perform();
  }

  getAppExampleAttributeEl() {
    return element(by.css('span#appExampleAttribute'));
  }

  getAppExampleAttributeText() {
    return this.getAppExampleAttributeEl().getText();
  }

  getAppExampleAttributeAttrStyle() {
    return this.getAppExampleAttributeEl().getAttribute('style');
  }

  hoverAppExampleAttribute() {
    browser.actions().mouseMove(this.getAppExampleAttributeEl()).perform();
  }

  getAppExampleStructuralEl() {
    return element(by.css('span#appExampleStructural'));
  }

  getAppExampleStructuralText() {
    return this.getAppExampleStructuralEl().getText();
  }

  getServiceEl() {
    return element(by.css('span#service'));
  }

  getServiceText() {
    return this.getServiceEl().getText();
  }

}
