import { Component } from '@angular/core';
import {Orders, OrdersService} from '../orders.service'
import{ Coursiers, CoursiersOrder, DeliverymenService} from '../deliverymen.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../coursier/coursier.component.css']
})
export class OrdersComponent {
  coursiers : CoursiersOrder[] = []
  orders: Orders[] = []
  modifyOrderForm: boolean = false;
  delOrMod: boolean = false;
  selectedOrder: any = {};
  coursierId : number = 0;
  

  order: Orders ={
    name_customer: '', 
    name_restaurant: '', 
    adress_customer: '',
    adress_restaurant: '', 
    price: '', 
    distance: '',
    coursier_id: ''
   }

  constructor (
    private orderService : OrdersService,
    private deliverymenService : DeliverymenService, 
    private routers:Router){}

    ngOnInit() {
      this.orderService.getOrderList().subscribe(
        data => {
          this.orders = data;
          console.log(this.orders);
        }
      )
      this.deliverymenService.getCoursierList().subscribe(
        data => {
          this.coursiers = data;
          console.log(this.coursiers);
        }
      )
    }

    getOrder(order: any) {
      this.selectedOrder = order;
      this.modifyOrderForm = true;
      console.log(this.selectedOrder.order_id);
    }
    updateOrder(order:any): void{
      this.orderService.modifyOrder(order.order_id, order).subscribe(() => {
        console.log(order);
        this.modifyOrderForm = false;
      });
    }

    deleteOrder(order:any): void{
      this.orderService.deleteOrder(order.order_id, order).subscribe(() => {
        console.log(order);
        this.modifyOrderForm = false;
      });
      this.routers.navigate(['orders/list'])
    }

    Assignments(order: any): void{
      this.selectedOrder = order;
      console.log(this.selectedOrder)
      this.routers.navigate(['orders/assign'], {
         queryParams: { 
          order_id: this.selectedOrder.order_id, 
          customer: this.selectedOrder.name_customer, 
          restaurant: this.selectedOrder.name_restaurant,
          customer_address: this.selectedOrder.adress_customer,
          restaurant_address: this.selectedOrder.adress_restaurant,
          price: this.selectedOrder.price,
          distance: this.selectedOrder.distance   } });
      
    }

}
