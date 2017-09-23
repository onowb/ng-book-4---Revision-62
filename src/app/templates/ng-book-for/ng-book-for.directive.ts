import {
  Directive,
  IterableDiffer,
  IterableDiffers,
  ViewRef,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectorRef,
  DoCheck,
  Input
} from '@angular/core';

@Directive({
  selector: '[appNgBookFor]'
})
export class NgBookForDirective implements DoCheck {
  private items: any;
  private differ: IterableDiffer<any>;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();


  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private changeDetector: ChangeDetectorRef,
              private differs: IterableDiffers) {}

  @Input() set appNgBookForOf(items) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create(null);
    }
  }

  ngDoCheck(): void {
    if (this.differ) {
      const changes = this.differ.diff(this.items);
      if (changes) {

        changes.forEachAddedItem((change) => {
          const view = this.viewContainer.createEmbeddedView(
            this.template,
            {'$implicit': change.item});
          this.views.set(change.item, view);
        });
        changes.forEachRemovedItem((change) => {
          const view = this.views.get(change.item);
          const idx = this.viewContainer.indexOf(view);
          this.viewContainer.remove(idx);
          this.views.delete(change.item);
        });
      }
    }
  }
}
