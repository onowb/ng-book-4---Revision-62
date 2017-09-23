import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBookIfComponent } from './ng-book-if/ng-book-if.component';
import { NgBookIfDirective } from './ng-book-if/ng-book-if.directive';
import { NgBookForComponent } from './ng-book-for/ng-book-for.component';
import { NgBookForDirective } from './ng-book-for/ng-book-for.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgBookIfComponent, NgBookForComponent, NgBookForDirective, NgBookIfDirective]
})
export class TemplatesModule { }
