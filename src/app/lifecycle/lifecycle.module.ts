import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnInitComponent } from './on-init/on-init.component';
import { AllHooksComponent } from './all-hooks/all-hooks.component';
import { AllHooksDemoComponent } from './all-hooks/all-hooks-demo.component';
import { CommentComponent } from './differs/comment.component';
import { CommentsListComponent } from './differs/comments-list.component';
import { DiffersDemoComponent } from './differs/differs-demo.component';
import { OnChangesDemoComponent } from './on-changes/on-changes-demo.component';
import { OnInitDemoComponent } from './on-init/on-init-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OnChangesComponent, OnInitComponent, AllHooksComponent, AllHooksDemoComponent, CommentComponent, CommentsListComponent, DiffersDemoComponent, OnChangesDemoComponent, OnInitDemoComponent]
})
export class LifecycleModule { }
