import { Component } from '@angular/core';
import {Orders, OrdersService} from '../orders.service'
import{ Coursiers, DeliverymenService} from '../deliverymen.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../coursier/coursier.component.css']
})
export class OrdersComponent {
  coursiers : Coursiers[] = []
  orders: Orders[] = []

  selectedOrder: any = {};

  order: Orders ={
    name_customer: '', 
    name_restaurant: '', 
    adress_customer: '',
    adress_restaurant: '', 
    price: parseFloat(''), 
    distance: parseFloat(''),
    coursier_id: ''
   }

  constructor (
    private orderService : OrdersService,
    private deliverymenService : DeliverymenService, 
    private router:ActivatedRoute,
    private routers:Router){}

    ngOnInit() {
      this.orderService.getOrderList().subscribe(
        data => {
          this.orders = data;
          console.log(this.orders);
        }
      )
    }

}
