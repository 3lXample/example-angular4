/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { DebugElement, Directive, Input, Pipe, PipeTransform } from '@angular/core';
import { TemplateRef, ViewContainerRef }                       from '@angular/core';
import { async, ComponentFixture, TestBed }                    from '@angular/core/testing';
import { By }                                                  from '@angular/platform-browser';
import { RouterTestingModule }                                 from '@angular/router/testing';

import { ExampleComponent }                                    from './example.component';

@Pipe({ name: 'exampleReverse' })
class MockExampleReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any { return 'ExampleReversePipe'; }
}

@Directive({ selector: '[appExampleAttribute]' })
class MockExampleAttributeDirective {}

@Directive({ selector: '[appExampleStructural]' })
class MockExampleStructuralDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
  @Input()
  set appExampleStructural(condition) { this.viewContainer.createEmbeddedView(this.templateRef); }
}

describe('ExampleComponent', () => {
  let comp:       ExampleComponent;
  let fixture:    ComponentFixture<ExampleComponent>;
  let deHeader:   DebugElement;
  let elHeader:   HTMLElement;
  let deAttrDir:  DebugElement;
  let elAttrDir:  HTMLElement;
  let deStrucDir: DebugElement;
  let elStrucDir: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ExampleComponent,
        MockExampleReversePipe,
        MockExampleAttributeDirective,
        MockExampleStructuralDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges();

    deHeader   = fixture.debugElement.query(By.css('h1#header'));
    elHeader   = deHeader.nativeElement;
    deAttrDir  = fixture.debugElement.query(By.directive(MockExampleAttributeDirective));
    elAttrDir  = deAttrDir.nativeElement;
    deStrucDir = fixture.debugElement.query(By.css('span#appExampleStructural'));
    elStrucDir = deStrucDir.nativeElement;
  });

  it('Should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('Should have title `elpmaxE 4 ralugnA`', () => {
    expect(comp.title).toBe('elpmaxE 4 ralugnA');
  });

  it('Should have condition property', () => {
    expect(comp.condition).toEqual({ active: true });
  });

  it('Should render title in a h1 tag', () => {
    expect(elHeader.textContent).toBe('ExampleReversePipe');
  });

  it('Should render directive appExampleAttribute', () => {
    expect(elAttrDir).toBeTruthy();
  });

  it('Should render directive appExampleStructural', () => {
    expect(elStrucDir).toBeTruthy();
  });

});
