import { StockService } from './../../stock/stock.service';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IStock } from 'src/app/shared/model/stock';
import { OrderService } from '../order.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.sass']
})
export class AddEditOrderComponent {
  order:any={
    id:0,
    quentity:0,
    personName:"",
    stockId:0,

  };

  onClose:any;
  stocks:Array<IStock>=[];
  selectedVlue:any;
  submitted = false;

  constructor(
    public  bsModel: BsModalRef,
    private orderService:OrderService,
    private fb:FormBuilder,
    private StockService:StockService
  ){}
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
     if(this.order.id==0){
      this.orderService.AddOrder(this.order).subscribe(
        taskAdd=>{
          console.log("done add"+taskAdd);
          this.onClose(taskAdd);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }else{
      this.orderService.UpdateOrder(this.order.id,this.order).subscribe(
        taskupdare=>{
          console.log("id ==>"+this.order.id);
          console.log("emp ==>"+this.order.stockId);

          console.log(taskupdare);
          this.onClose(taskupdare);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }
    }
  }
  registerForm = this.fb.group({
    // id:['',[Validators.required]],
    quentity: ['',[Validators.required]],
    personName: ['',[Validators.required]],
    stockId: ['',[Validators.required]],

  },);

  get quentity(){
    return this.registerForm.get('quentity');
  }
  get personName(){
    return this.registerForm.get('personName');
  }
  get stockId(){
    return this.registerForm.get('stockId');
  }
  ngOnInit(): void {
    this.GetAllStocks();
  }

  changeStock(e:any){

    console.log("value change"+e.target.value);
    this.selectedVlue=e.target.value;
    this.stockId?.setValue(e.target.value, {
      onlySelf: true,
    });
    let id = e.target.value;
    if (id == 0) {
      this.registerForm.controls['stockId'].setValidators([
        Validators.required,
      ]);
  }
  }
  GetAllStocks(){
    this.StockService.GetAllStock().subscribe(
      (response)=>{
      this.stocks=response
      },
      (error)=>{
        console.log(error);
      }
    )
  }




}
function ForBiddenName(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}

