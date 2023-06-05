import { Component } from '@angular/core';
import {Orders, OrdersService} from '../orders.service'
import{ Coursiers, CoursiersOrder, DeliverymenService} from '../deliverymen.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-assigner',
  templateUrl: './assigner.component.html',
  styleUrls: ['./assigner.component.css']
})
export class AssignerComponent {
  coursiers : Coursiers[] = []

  selectedOrder: any ;
  selectedCoursier: any;

  constructor (
    private orderService : OrdersService,
    private deliverymenService : DeliverymenService, 
    private routers:Router,
    private route: ActivatedRoute){}

    ngOnInit() {
      this.deliverymenService.getCoursierList().subscribe(
        data => {
          this.coursiers = data;
          console.log(this.coursiers);
        }
      )
      this.route.queryParams.subscribe(params => {
        this.selectedOrder = {
          order_id: params['order_id'],
          customer: params['customer'],
          restaurant: params['restaurant'],
          customer_address: params['customer_address'],
          restaurant_address: params['restaurant_address'],
          price: params['price'],
          distance: params['distance']
        };
        console.log(this.selectedOrder);
      });

      }
     
      assignOrder(selectedOrder:any, coursier: any): void{
        this.selectedCoursier = coursier;
        this.route.queryParams.subscribe(params => {
          this.selectedOrder = {
            order_id: params['order_id'],
            customer: params['customer'],
            restaurant: params['restaurant'],
            customer_address: params['customer_address'],
            restaurant_address: params['restaurant_address'],
            price: params['price'],
            distance: params['distance'],
            coursier_id: this.selectedCoursier.coursier_id
          };
          console.log(this.selectedOrder);
        });
        this.orderService.assignOrder(this.selectedOrder.order_id, this.selectedOrder, this.selectedCoursier.coursier_id).subscribe(() => {
        });
        this.routers.navigate(['orders/list'])
        console.log(this.selectedCoursier)
        console.log(this.selectedOrder);
      }

    }
