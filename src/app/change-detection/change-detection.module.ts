import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { OnPushDemoComponent } from './on-push-demo/on-push-demo.component';
import { ObservableChangeDetectionComponent } from './observables-demo/observable-change-detection.component';
import { DefaultChangeDetectionComponent } from './on-push-demo/default-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-demo/on-push-change-detection.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ObservablesDemoComponent,
    OnPushDemoComponent,
    ObservableChangeDetectionComponent,
    DefaultChangeDetectionComponent,
    OnPushChangeDetectionComponent]
})
export class ChangeDetectionModule { }
