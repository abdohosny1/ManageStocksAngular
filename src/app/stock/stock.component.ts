import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { IStock } from '../shared/model/stock';
import { AddEditStocksComponent } from './add-edit-stocks/add-edit-stocks.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass']
})
export class StockComponent {

  stocks:Array<IStock>=[];
  bsModelresf? :BsModalRef;



  constructor(private stockService:StockService, private router:Router,private route: ActivatedRoute,
    private bsmodalService: BsModalService,){}

  ngOnInit(): void {
    this.GetAllStocks();
  }
  GetAllStocks(){
    this.stockService.GetAllStock().subscribe(
       (response)=>{
         console.log(response);
         console.log("result");
         this.stocks=response
       },
       (error)=>{
        console.log(error);
       }
    )
  }




  // onDetails(details:any){
  //   this.router.navigate(["/Datails",details.id]);

  // }
  // onDelete(deleteEmp:number){
  //   this.router.navigate(["/delete",deleteEmp]);
  // }

  AddStock(){
    this.bsModelresf=this.bsmodalService.show(AddEditStocksComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.GetAllStocks();
      }
    }
  }

  // onEditEmployee(employee:any)
  // {

  //   this.bsModelresf=this.bsmodalService.show(AddEditEmployeeComponent,{initialState:{employee}});
  //   this.bsModelresf.content.onClose=(update:any)=>{
  //     if(update){
  //       this.getEmployee();
  //     }
  //   }
  // }

  // onDeleteEmployee(id:number){

  //   let confirmDelete=confirm("Are you sure  Delete?")
  //   if(confirmDelete){
  //      this.employeeService.RemoveEmployeeById(id).subscribe(
  //        done=>{
  //         this.getEmployee()
  //         console.log("done");

  //        },
  //        error=>{console.log(error);}
  //      )


  //  }

//}
}
