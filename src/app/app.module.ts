//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app module
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from './components/order/order.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {TableComponent} from './components/dashboard/table/table.component'

//store
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
