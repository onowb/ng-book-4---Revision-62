import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { TemplatesModule } from './templates/templates.module';
import { StylingModule } from './styling/styling.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { TabsModule } from './tabs/tabs.module';
import { HostModule } from './host/host.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { StylingDemoComponent } from './styling/styling-demo/styling-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    StylingDemoComponent
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    StylingModule,
    ChangeDetectionModule,
    ContentProjectionModule,
    TabsModule,
    HostModule,
    LifecycleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
