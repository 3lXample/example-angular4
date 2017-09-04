/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { ExampleService } from './example.service';

describe('ExampleService', () => {

  it('Should have exampleConstant with value `built by Anisetus Elly Efendi`', () => {
    expect(ExampleService.exampleConstant).toBe('built by Anisetus Elly Efendi');
  });

});
