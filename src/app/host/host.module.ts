import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { PopupDirective } from './popup-demo/popup.directive';
import { ProfileCardComponent } from './popup-demo/profile-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PopupDemoComponent, PopupDirective, ProfileCardComponent]
})
export class HostModule { }
