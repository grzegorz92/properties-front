import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import {WarningMessageComponent} from "./warning_message/warning_message.component";
import { PropertiesTableComponent } from './properties-table/properties-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ClickOutsideModule} from "ng-click-outside";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningMessageComponent,
    PropertiesTableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
