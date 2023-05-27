import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { StockModule } from './stock/stock.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { AddEditStocksComponent } from './stock/add-edit-stocks/add-edit-stocks.component';
import { StockComponent } from './stock/stock.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    AddEditStocksComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
     ModalModule,
     //NgModule,
     FormsModule,
    ModalModule.forRoot(),
    //StockModule,
    //NgModule,
    //RouterModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
