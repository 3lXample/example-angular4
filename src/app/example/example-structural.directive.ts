/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExampleStructural]'
})
export class ExampleStructuralDirective {
  private hasView = false;

  constructor(
    private templateRef:   TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

  private conditionChecker(condition) {
    return condition && condition.active;
  }

  @Input()
  set appExampleStructural(condition) {
    if (this.conditionChecker(condition) && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!this.conditionChecker(condition) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
