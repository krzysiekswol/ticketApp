import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  AngularMaterialConfigurationModule
} from './shared/angular-material-configuration/angular-material-configuration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialConfigurationModule,
    BrowserAnimationsModule,
    NavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
