import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditStocksComponent } from './add-edit-stocks/add-edit-stocks.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    StockComponent,
    AddEditStocksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    NgModule,
    FormsModule,
    BrowserModule,
    ModalModule.forRoot(),
    // ReactiveFormsModule,
    // FormsModule,
    // ModalModule,
    // NgModule,



    // ModalModule.forRoot(),
  ]
})
export class StockModule { }
