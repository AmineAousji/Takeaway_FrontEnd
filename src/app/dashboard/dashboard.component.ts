import { Component } from '@angular/core';
import {CategoryService, Category} from '../category.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = []

  constructor (private categoryService : CategoryService, private router:Router){}
  

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
}
