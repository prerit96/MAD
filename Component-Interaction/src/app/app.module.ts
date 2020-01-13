import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourceInputComponent } from './source-input/source-input.component';
import { DestInputComponent } from './dest-input/dest-input.component';
import { SourceViewChildComponent } from './source-view-child/source-view-child.component';
import { DestViewChildComponent } from './dest-view-child/dest-view-child.component';
import { SourceEventEmitterComponent } from './source-event-emitter/source-event-emitter.component';
import { DestEventEmitterComponent } from './dest-event-emitter/dest-event-emitter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SourceInputComponent,
    DestInputComponent,
    SourceViewChildComponent,
    DestViewChildComponent,
    SourceEventEmitterComponent,
    DestEventEmitterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
