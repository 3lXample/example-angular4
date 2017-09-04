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

import { ExampleReversePipe }        from './example-reverse.pipe';

@Component({ template: '<p>{{\'elpmaXl3\' | exampleReverse}}</p>' })
class TestComponent {}

describe('ExampleReversePipe', () => {
  const pipe = new ExampleReversePipe();

  it('Should transforms `elpmaXl3` to `3lXample`', () => {
    expect(pipe.transform('elpmaXl3')).toBe('3lXample');
  });

  it('Should transforms undefined to ``', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('Should transforms null to ``', () => {
    expect(pipe.transform(null)).toBe('');
  });

  describe('TestComponent', () => {
    let comp:    TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ExampleReversePipe, TestComponent]
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

    it('Should transforms text `elpmaXl3` to `3lXample`', () => {
      expect(el.textContent).toContain('3lXample');
    });

  });

});
