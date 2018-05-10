import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import {WarningMessageComponent} from "./warning_message/warning_message.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
