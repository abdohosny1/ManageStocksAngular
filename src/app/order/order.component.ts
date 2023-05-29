import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { IOrder } from '../shared/model/order';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddEditOrderComponent } from './add-edit-order/add-edit-order.component';
import { IStock } from '../shared/model/stock';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent {
  public orders: IOrder[] = []; // Replace with the actual type of your stocks
  allStock:Array<IStock>=[];
  nameStock:string="All";
  
  bsModelresf? :BsModalRef;
  constructor(private orderService:OrderService ,private bsmodalService: BsModalService,private stockService:StockService){}
  ngOnInit(): void {
    this.GetAllOrder();
    this.getAllStock();
  }
  getAllStock(){
    this.stockService.GetAllStock().subscribe(
      (response)=>{
        this.allStock=[{id:0,name:"All"},...response];
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  onStockSelected(name:string| null){
    if(name ==="All"){
     this.GetAllOrder();
     this.nameStock="All"
    }else{
     this.orderService.GetOrderByStock(name!).subscribe(
       (response)=>{
         this.orders=response;
         this.nameStock!=name
 
       },
       (error)=>{
        console.log(error);
       }
    )
    }
   }
  GetAllOrder(){
    this.orderService.GetAllOrder().subscribe(
       (response)=>{
         this.orders=response
       },
       (error)=>{
        console.log(error);
       }
    )
  }

  AddOrder(){
    this.bsModelresf=this.bsmodalService.show(AddEditOrderComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.GetAllOrder();
      }
    }

  }

  onDeleteOrder(id:number){
    let confirmDelete=confirm("Are you sure  Delete?")
    if(confirmDelete){
       this.orderService.RemoveOrder(id).subscribe(
         done=>{
          this.GetAllOrder();
          console.log("done");

         },
         error=>{console.log(error);}
       )
  } 
}

  onEditOrder(order:any){
    this.bsModelresf=this.bsmodalService.show(AddEditOrderComponent,{initialState:{order}});
    this.bsModelresf.content.onClose=(update:any)=>{
      if(update){
        this.GetAllOrder();
      }
    }
 
}
}
