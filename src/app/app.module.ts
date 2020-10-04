

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {OrderComponent} from './components/order/order.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {TableComponent} from './components/dashboard/table/table.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
