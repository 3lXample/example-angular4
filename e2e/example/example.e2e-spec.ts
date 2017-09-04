/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { ExamplePage } from './example.po';

describe('example page', () => {
  let page: ExamplePage;

  beforeEach(() => {
    page = new ExamplePage();
  });

  it('Should display header', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toBe('Angular 4 Example');
  });

  it('Should display appExampleAttribute', () => {
    page.navigateTo();
    expect(page.getAppExampleAttributeText()).toBe('Hover me!');
  });

  it('Should display appExampleAttribute with style color red when hover', () => {
    page.navigateTo();
    page.hoverAppExampleAttribute();
    expect(page.getAppExampleAttributeAttrStyle()).toBe('color: red;');
  });

  it('Should display appExampleAttribute without style color after unhover', () => {
    page.navigateTo();
    page.hoverAppExampleAttribute();
    page.hoverHeader();
    expect(page.getAppExampleAttributeAttrStyle()).toBeFalsy();
  });

  it('Should display appExampleStructural', () => {
    page.navigateTo();
    expect(page.getAppExampleStructuralText()).toBe('Condition is true');
  });

  it('Should display service', () => {
    page.navigateTo();
    expect(page.getServiceText()).toBe('built by Anisetus Elly Efendi [Angular 4.3.6]');
  });

  it('Should display component `app-example-template`', () => {
    page.navigateTo();
    expect(page.getAppExampleTemplateEl()).toBeTruthy();
  });

  it('Should display header of component `app-example-template`', () => {
    page.navigateTo();
    expect(page.getAppExampleTemplateHeaderText()).toBe('Angular 4 Example Component');
  });

  it('Should display content of component `app-example-template`', () => {
    page.navigateTo();
    expect(page.getAppExampleTemplateContentText()).toBe('built by Anisetus Elly Efendi [Angular 4.3.6]');
  });

  it('Should display header view', () => {
    page.navigateTo();
    expect(page.getHeaderViewText()).toBe('Angular 4 Example Route');
  });

  it('Should display view1 at first load', () => {
    page.navigateTo();
    expect(page.getView1El()).toBeTruthy();
  });

  it('Should display view2 after click link2', () => {
    page.navigateTo();
    page.clickLink2();
    expect(page.getView2El()).toBeTruthy();
  });

  it('Should display view3 after click link3', () => {
    page.navigateTo();
    page.clickLink3();
    expect(page.getView3El()).toBeTruthy();
  });

  it('Should back to view1 after click link1 from other view', () => {
    page.navigateTo();
    page.clickLink2();
    page.clickLink1();
    expect(page.getView3El()).toBeTruthy();
  });

});
