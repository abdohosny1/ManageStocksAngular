import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import { IOrder, IOrderCreate } from '../shared/model/order';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  GetAllOrder(){

    //return this.http.get<IStock[]>("https://localhost:7101/api/Stock/GetAll");

   return this.http.get<IOrder[]>(environment.BASE_URL+environment.ORDER+environment.GetAllOrder);
  }
  GetOrderByStock( name:string){
    return this.http.get<IOrder[]>(environment.BASE_URL+environment.ORDER+"/name?name="+name);
   }
  GetOrderById(id:number){
    return this.http.get(environment.BASE_URL+environment.ORDER+"/"+id);
  }

  RemoveOrder(id:number){

    return this.http.delete(environment.BASE_URL+environment.ORDER+"/id?id=" +id);
  }

  AddOrder(order:IOrder){
    return this.http.post(environment.BASE_URL+environment.ORDER,order);
  }

  UpdateOrder(id:number,order:IOrder){
    return this.http.put(environment.BASE_URL+environment.ORDER+"/id?id=" +id,order);
  }
}
