import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddEditStocksComponent } from './stock/add-edit-stocks/add-edit-stocks.component';
import { StockComponent } from './stock/stock.component';
import { OrderModule } from './order/order.module';
import { AddEditOrderComponent } from './order/add-edit-order/add-edit-order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    AddEditStocksComponent,
    AddEditOrderComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
     ModalModule,
     FormsModule,
    ModalModule.forRoot(),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
