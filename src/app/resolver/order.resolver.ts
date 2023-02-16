import { Orders } from './../models/orders';
import { OrdersService } from './../services/orders.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver implements Resolve<Orders[]> {
  constructor(private ordersService:OrdersService){}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Orders[]> {
    const id = route.paramMap.get('id'); // get the id from the url 
    if (id)  return this.ordersService.getOrderDetails(id); // get the order details from the service
    return of([]); // return an empty array if there is no id
  }
}
