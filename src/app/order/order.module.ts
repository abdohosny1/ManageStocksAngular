import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule,
    ModalModule.forRoot(),
  ]
})
export class OrderModule { }
