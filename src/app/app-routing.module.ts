import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"",component:StockComponent},
  {path:"stock",component:StockComponent},
  {path:"order",component:OrderComponent},


  {path:"not-found",component:NotFoundComponent, },

  {path:"**",redirectTo:"not-found",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
