/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Component, DebugElement }    from '@angular/core';
import { ComponentFixture, TestBed }  from '@angular/core/testing';
import { By }                         from '@angular/platform-browser';

import { ExampleStructuralDirective } from './example-structural.directive';

@Component({ template: '<p *appExampleStructural="condition">3lXample</p>' })
class TestComponent {
  condition = { active: false };
}

describe('ExampleStructuralDirective', () => {

  describe('TestComponent', () => {
    let comp:    TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de:      DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleStructuralDirective, TestComponent]
      });
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      comp    = fixture.componentInstance;

      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('p'));
    });

    it('Should create the test component', () => {
      expect(comp).toBeTruthy();
    });

    it('Should not display when active is `false`', () => {
      expect(de).toBeFalsy();
    });

    it('Should do nothing when active change from `false` to `false`', () => {
      comp.condition = { active: false };
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('p'));
      expect(de).toBeFalsy();
    });

    it('Should be rendered in dom, when active change from `false` to `true`', () => {
      comp.condition = { active: true };
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('p'));
      expect(de).toBeTruthy();
    });

    it('Should do nothing when active change from `true` to `true`', () => {
      comp.condition = { active: true };
      fixture.detectChanges();
      comp.condition = { active: true };
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('p'));
      expect(de).toBeTruthy();
    });

    it('Should be removed from dom when active change from `true` to `false`', () => {
      comp.condition = { active: true };
      fixture.detectChanges();
      comp.condition = { active: false };
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('p'));
      expect(de).toBeFalsy();
    });

  });

});
