import { Orders } from './../models/orders';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  

  getAllOrders():Observable<Orders[]> { // get all orders
    return this.http.get<Orders[]>('http://meatstoreapii.herokuapp.com/order'); // get the data from the api
  }
  getOrderDetails(id:string):Observable<Orders[]>{ // get the order details
    return this.http.get<Orders[]>(`http://meatstoreapii.herokuapp.com/order/${id}`); // get the data from the api
  }
}
