import { Injectable } from '@angular/core';
import { environment } from '../shared/environment';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs/internal/Subject';
import { IStock } from '../shared/model/stock';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignalrServiceService {


   connection: HubConnection;
    stocksSubject: Subject<IStock[]> = new Subject<IStock[]>();
    public stocks: IStock[] = [];


  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7101/SocketHub')
      .build();
  }

  public startConnection(): void {
    this.connection.start()
      .then(() => {
        console.log('Connected to SignalR hub');
        this.connection.on('updateAllPrice', (newStocks: IStock[]) => {
          this.stocks = newStocks;
          this.stocksSubject.next(newStocks); // Emit the updated stocks through the subject
        });
      })
      .catch((err) => {
        console.log('Error connecting to SignalR hub: ' + err);
      });
  }

  public getStocks(): Subject<IStock[]> {
    return this.stocksSubject;
  }
 
  stopConnection(): void {
    // Stop the SignalR connection
    this.connection.stop();
  }



}
