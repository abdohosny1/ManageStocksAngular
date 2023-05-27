import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IStock } from '../shared/model/stock';
import { environment } from '../shared/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  GetAllStock(){

    //return this.http.get<IStock[]>("https://localhost:7101/api/Stock/GetAll");

   return this.http.get<IStock[]>(environment.BASE_URL+environment.STOCK+environment.GetAll);
  }

  GetStockById(id:number){
    return this.http.get(environment.BASE_URL+environment.STOCK+"/"+id);
  }

  RemoveStock(id:number){
    return this.http.delete(environment.BASE_URL+environment.STOCK+"/"+id);
  }

  AddStock(emp:IStock){
    return this.http.post(environment.BASE_URL+environment.STOCK,emp);
  }

  UpdateStock(id:number,stock:IStock){
    return this.http.put(environment.BASE_URL+environment.STOCK+"/"+id,stock);
  }
}
