export interface IOrder{
  id: number;
  price: number;
  personName: string | null;
  quentity: number;
  stockId: number;
  stockName:string;

}

export interface IOrderCreate{
  personName: string | null;
  quentity: number;
  stockId: number;

}
