import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
