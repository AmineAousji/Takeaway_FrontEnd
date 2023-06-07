import { Component } from '@angular/core';
import {Orders, OrdersService} from '../orders.service'
import{ Coursiers, CoursiersOrder, DeliverymenService} from '../deliverymen.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchorder',
  templateUrl: './searchorder.component.html',
  styleUrls: ['../coursier/coursier.component.css']
})
export class SearchorderComponent {

  orders: any[] = [];
  coursierId : number = 0;
  
  order = new Orders();


    name_customer: string = "";
    name_restaurant: string = "";
    adress_customer: string = "";
    adress_restaurant: string = ""; 
    price: string = "";
    distance: string = "";
    coursier_id:  string = "";
   

  constructor (
    private orderService : OrdersService,
    private deliverymenService : DeliverymenService, 
    private routers:ActivatedRoute){}

    ngOnInit() {
      this.orderService.searchOrder(this.routers.snapshot.params["name_restaurant"]).subscribe(
        data => {
          this.orders = data;
      
          console.log(this.order);
        }
      )
      
    }


}
