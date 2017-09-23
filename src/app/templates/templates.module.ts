import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBookIfDirective } from './ng-book-if/ng-book-if.directive';
import { NgBookForDirective } from './ng-book-for/ng-book-for.directive';
import { NgBookForDemoComponent } from './ng-book-for/ng-book-for-demo.component';
import { NgBookIfDemoComponent } from './ng-book-if/ng-book-if-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgBookForDirective, NgBookIfDirective, NgBookForDemoComponent, NgBookIfDemoComponent]
})
export class TemplatesModule { }
