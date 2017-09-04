/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { DebugElement, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed }         from '@angular/core/testing';
import { By }                                from '@angular/platform-browser';

import { ExampleTemplateComponent }          from './example-template.component';
import { ExampleService }                    from './example.service';

@Pipe({ name: 'exampleReverse' })
class MockExampleReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any { return 'ExampleReversePipe'; }
}

class MockExampleService {
  getHeader(): string { return '3lXample Header'; }
}

describe('ExampleTemplateComponent', () => {
  let comp:      ExampleTemplateComponent;
  let fixture:   ComponentFixture<ExampleTemplateComponent>;
  let deHeader:  DebugElement;
  let elHeader:  HTMLElement;
  let deContent: DebugElement;
  let elContent: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleTemplateComponent,
        MockExampleReversePipe
      ],
      providers: [{ provide: ExampleService, useClass: MockExampleService }]
    });
  });

  beforeEach(() => {
    fixture    = TestBed.createComponent(ExampleTemplateComponent);
    comp       = fixture.componentInstance;
    comp.title = '3lXample';

    fixture.detectChanges();

    deHeader  = fixture.debugElement.query(By.css('h1#headerTemplate'));
    elHeader  = deHeader.nativeElement;
    deContent = fixture.debugElement.query(By.css('span#content'));
    elContent = deContent.nativeElement;
  });

  it('Should create the component', () => {
    expect(comp).toBeTruthy();
  });

  it('Should have title value from input', () => {
    expect(comp.title).toBe('3lXample');
  });

  it('GetContent should get header from service', () => {
    expect(comp.getContent()).toBe('3lXample Header');
  });

  it('Should render title in a h1 tag', () => {
    expect(elHeader.textContent).toBe('ExampleReversePipe Component');
  });

  it('Should print content in view', () => {
    expect(elContent.textContent).toBe('3lXample Header');
  });

});
