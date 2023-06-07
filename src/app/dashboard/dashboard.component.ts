import { Component } from '@angular/core';
import {CategoryService, Category} from '../category.service'
import { OrdersService, Orders } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = []
  orders: Orders[] = []
  searchValue: string = ''

  constructor (private categoryService : CategoryService, private router:Router, private orderService: OrdersService){}
  

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data
        console.log(this.categories)
      }
    )
  }
  viewCategory(category:any){
    let category_name = category.category_name;
    console.log('category_name : ', category_name);
    this.router.navigate(['categories',category_name]);
  }

  viewCoursierBycategory(category:any){
    let category_name = category.category_name;
    this.router.navigate(['categories',category_name,'coursiers'])
  }
  newCoursier(): void{
    this.router.navigate(['coursiers']);
  }

  newOrder(): void{
    this.router.navigate(['orders']);
  }
  newUser(){
    this.router.navigate(['users']);
  }

  newCategory():void{
    this.router.navigate(['categories']);
  }

  searchOrders() {
    if (this.searchValue) {
      const name_restaurant = this.searchValue;
      this.router.navigate(['orders', name_restaurant]);
    } else {
      console.error('Empty search value');
    }
  }
  


}
