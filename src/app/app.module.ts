import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { IntroComponent } from './intro/intro.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserDemoComponent } from './user-demo/user-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsDemoComponent,
    IntroComponent,
    PriceServiceDemoComponent,
    SidebarComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
