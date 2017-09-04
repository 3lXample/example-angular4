/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, DebugElement }   from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';

import { ExampleAttributeDirective } from './example-attribute.directive';

@Component({ template: '<p appExampleAttribute>3lXample</p>' })
class TestComponent {}

describe('ExampleAttributeDirective', () => {

  describe('TestComponent', () => {
    let comp:    TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleAttributeDirective, TestComponent]
      });
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      comp    = fixture.componentInstance;

      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('p'));
      el = de.nativeElement;
    });

    it('Should create the test component', () => {
      expect(comp).toBeTruthy();
    });

    it('Should not have style color at first display', () => {
      expect(el.style.color).toBeFalsy();
    });

    it('Should have style color `red` when mouseenter', () => {
      de.triggerEventHandler('mouseenter', null);
      expect(el.style.color).toBe('red');
    });

    it('Should remove style color after mouseleave', () => {
      de.triggerEventHandler('mouseenter', null);
      de.triggerEventHandler('mouseleave', null);
      expect(el.style.color).toBeFalsy();
    });

  });

});
