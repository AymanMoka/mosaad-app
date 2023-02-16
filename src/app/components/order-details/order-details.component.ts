import { Orders } from './../../models/orders';
import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orders:Orders[]= [];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {   // get the data from the resolver
      this.orders = data['orders'] // assign the data to the orders array
    })
  }

  timeAgo(time: any) {
    moment.locale('ar') // change the locale to Arabic
    return moment(time).fromNow(); //  hours ago
  }



}
