/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Injectable }      from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

import { ExampleService }  from './example.service';

@Injectable()
class TestService1 {
  constructor(private exampleService: ExampleService) {}
  getService(): ExampleService { return this.exampleService; }
  getVal(): string { return this.exampleService.exampleValue; }
}

@Injectable()
class TestService2 {
  constructor(private exampleService: ExampleService) {}
  getService(): ExampleService { return this.exampleService; }
  changeVal(): void { this.exampleService.exampleValue = '3lXample'; }
}

describe('ExampleService', () => {
  let exampleService: ExampleService;

  beforeEach(() => {
    exampleService = new ExampleService();
  });

  it('Should have exampleConstant with value `built by Anisetus Elly Efendi`', () => {
    expect(ExampleService.exampleConstant).toBe('built by Anisetus Elly Efendi');
  });

  it('Should have exampleValue with value `Angular 4.3.6`', () => {
    expect(exampleService.exampleValue).toBe('Angular 4.3.6');
  });

  it('GetHeader should return value `built by Anisetus Elly Efendi [Angular 4.3.6]`', () => {
    expect(exampleService.getHeader()).toBe('built by Anisetus Elly Efendi [Angular 4.3.6]');
  });

  describe('TestService', () => {
    let service1: TestService1;
    let service2: TestService2;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [ExampleService, TestService1, TestService2] });
    });

    beforeEach(inject([TestService1, TestService2],
      (testService1: TestService1, testService2: TestService2) => {
        service1 = testService1;
        service2 = testService2;
      }));

    it('Should be provide singleton ExampleService', () => {
      expect(service1.getService()).toBe(service2.getService());
    });

    it('Should be able to change exampleValue value', () => {
      service2.changeVal();
      expect(service1.getVal()).toBe('3lXample');
    });

  });

});
