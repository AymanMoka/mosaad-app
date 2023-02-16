import { Orders } from './../../models/orders';
import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders!: Orders[];

  constructor(private ordersService: OrdersService , private router:Router) { }

  ngOnInit(): void {
    this.getAllOrders(); // get all orders
    // setInterval(() => {
    //   this.ngOnInit(); // refresh the page every 60 seconds
    // }, 60000)
  }

  getAllOrders() {
    this.ordersService.getAllOrders().subscribe((data) => { // get the data from the service
      this.orders = data; // assign the data to the orders array
    })
  }

  getOrderDetails(order: Orders) {
    const id = order.session_id; // get the id from the order
    this.router.navigate(['/order', id]); // navigate to the order details page
  }

  timeAgo(time: any) {
    moment.locale('ar') // change the locale to Arabic
    return moment(time).fromNow(); //  hours ago
  }



}
