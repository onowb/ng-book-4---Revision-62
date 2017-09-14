import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';

import { ExampleDef } from './example.model';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Injector', name: 'Injector', path: 'injector', component: UserDemoInjectorComponent},
  {label: 'useClass (UserService)', name: 'UseClass', path: 'use-class', component: UserDemoComponent},
  {label: 'factory (AnalyticsService)', name: 'UseClass', path: 'factory', component: AnalyticsDemoComponent},
];

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full' },
  { path: 'use-class', component: UserDemoComponent, pathMatch: 'full' },
  { path: 'factory', component: AnalyticsDemoComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsDemoComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    UserDemoInjectorComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
