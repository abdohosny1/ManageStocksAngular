import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-edit-stocks',
  templateUrl: './add-edit-stocks.component.html',
  styleUrls: ['./add-edit-stocks.component.sass']
})
export class AddEditStocksComponent {

  stock:any={
    id:0,
    name:"",
    price:0,

  };

  onClose:any;
  //department:Array<IDepartment>=[];
  selectedVlue:any;
  submitted = false;
  constructor(
    public  bsModel: BsModalRef,
    private service:StockService,
    private fb:FormBuilder,

  ) { }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
     if(this.stock.id==0){
      this.service.AddStock(this.stock).subscribe(
        taskAdd=>{
          this.onClose(taskAdd);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }else{
      this.service.UpdateStock(this.stock.id,this.stock).subscribe(
        taskupdare=>{
          this.onClose(taskupdare);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }
    }
  }

  registerForm = this.fb.group({
    name: ['',[Validators.required]],

  },);

  get name(){
    return this.registerForm.get('name');
  }


  







}
function ForBiddenName(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}

