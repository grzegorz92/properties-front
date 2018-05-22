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
import {RequestService} from "./requests.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";


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
    ClickOutsideModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
