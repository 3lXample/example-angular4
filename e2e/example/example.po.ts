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

  getAppExampleTemplateEl() {
    return element(by.css('app-example-template'));
  }

  getAppExampleTemplateHeaderEl() {
    return element(by.css('app-example-template h1#headerTemplate'));
  }

  getAppExampleTemplateHeaderText() {
    return this.getAppExampleTemplateHeaderEl().getText();
  }

  getAppExampleTemplateContentEl() {
    return element(by.css('app-example-template span#content'));
  }

  getAppExampleTemplateContentText() {
    return this.getAppExampleTemplateContentEl().getText();
  }

  getHeaderViewEl() {
    return element(by.css('h1#header-view'));
  }

  getHeaderViewText() {
    return this.getHeaderViewEl().getText();
  }

  getLink1El() {
    return element(by.css('a#link1'));
  }

  clickLink1() {
    browser.actions().click(this.getLink1El()).perform();
  }

  getLink2El() {
    return element(by.css('a#link2'));
  }

  clickLink2() {
    browser.actions().click(this.getLink2El()).perform();
  }

  getLink3El() {
    return element(by.css('a#link3'));
  }

  clickLink3() {
    browser.actions().click(this.getLink3El()).perform();
  }

  getView1El() {
    return element(by.css('div#view1'));
  }

  getView2El() {
    return element(by.css('div#view2'));
  }

  getView3El() {
    return element(by.css('div#view3'));
  }

}
