import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { IStock } from '../shared/model/stock';
import { AddEditStocksComponent } from './add-edit-stocks/add-edit-stocks.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common'
import { SignalrServiceService } from './signalr-service.service';
import { Subscription } from 'rxjs';
import { environment } from '../shared/environment';
import { HubConnectionBuilder } from '@microsoft/signalr';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass']
})
export class StockComponent {

  stocks: IStock[] = []; // Replace with the actual type of your stocks

  bsModelresf? :BsModalRef;
   stocksSubscription!: Subscription;
   connection: signalR.HubConnection | undefined;



  constructor(  private serviceSignalr:SignalrServiceService,private stockService:StockService,
    private bsmodalService: BsModalService,){}

  ngOnInit(): void {
    this.serviceSignalr.startConnection();

    this.stocksSubscription = this.serviceSignalr.getStocks()
      .subscribe((stocks: IStock[]) => {
        console.log('Stocks received:', stocks);
        // Do something with the stocks, such as assigning them to a component property
        this.stocks = stocks;
      });

  
     
  }
  GetAllStocks(){
    this.stockService.GetAllStock().subscribe(
       (response)=>{
         this.stocks=response
       },
       (error)=>{
        console.log(error);
       }
    )
  }






  AddStock(){
    this.bsModelresf=this.bsmodalService.show(AddEditStocksComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.GetAllStocks();
      }
    }
  }

  ngOnDestroy(): void {
    this.serviceSignalr.stopConnection();
    if (this.stocksSubscription) {
      this.stocksSubscription.unsubscribe();
    }
  }
  onEditStock(stock:any)
  {

    this.bsModelresf=this.bsmodalService.show(AddEditStocksComponent,{initialState:{stock}});
    this.bsModelresf.content.onClose=(update:any)=>{
      if(update){
       // this.GetAllStocks();
      }
    }
  }

  onDeleteStock(id:number){

    let confirmDelete=confirm("Are you sure  Delete?")
    if(confirmDelete){
       this.stockService.RemoveStock(id).subscribe(
         done=>{
          this.GetAllStocks();
          console.log("done");

         },
         error=>{console.log(error);}
       )


   }

}
}
