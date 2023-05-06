import { Component } from '@angular/core';
import { CoursiersOrder, DeliverymenService} from '../deliverymen.service';
import { Orders, OrdersService} from '../orders.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['../newcoursier/newcoursier.component.css']
})
export class NeworderComponent {
  coursiers : CoursiersOrder[] = []
  orders : Orders[] = []

  order :Orders = {
    name_customer: '',
    name_restaurant: '',
    adress_customer: '',
    adress_restaurant: '',
    price:parseFloat('0') , 
    distance: parseFloat(''),
    coursier_id: ''
  }

  getCoursierIds() : number[] {
    const coursierIds = this.coursiers.map(coursier => coursier.coursier_id);
    return coursierIds
  }

  constructor (
    private OrdersService : OrdersService,
    private deliverymenService : DeliverymenService, 
    private routers:Router){}

  ngOnInit() {
    this.deliverymenService.getCoursierList().subscribe(
      data => {
        this.coursiers = data
        console.log(this.coursiers)
      }
    )
  }

  addOrder(): void{
    this.OrdersService.addOrder(this.order).subscribe(() => {
      this.routers.navigate(['orders/list'])
    });
  }



}
