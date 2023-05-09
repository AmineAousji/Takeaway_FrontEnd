import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent {
  categories: Category[] = [];


  category: Category = {category_name:'', description:''};
  constructor (
    private categoryService : CategoryService,
    private router:ActivatedRoute,
    private routers:Router){}

    addCategory(): void{
      this.categoryService.addCategory(this.category).subscribe(() => {

        this.routers.navigate(['categories/list'])
      });
    }
}