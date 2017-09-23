import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[appNgBookIf]'
})
export class NgBookIfDirective {
  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {}

  @Input() set appNgBookIf(condition) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
