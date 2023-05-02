import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import{ Coursiers} from '../deliverymen.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  coursiers : Coursiers[] = []
  category = new Category();
  name:string = "";
  description:string = "";

  constructor (private categoryService : CategoryService, private router:ActivatedRoute){}

  ngOnInit() {
    this.categoryService.getCategory(this.router.snapshot.params["id"]).subscribe(
      data => {
        this.category = data
        this.name = this.category.category_name
        this.description = this.category.description
      }
    )
    this.categoryService.getCoursierByCategory(this.router.snapshot.params["id"]).subscribe(
      data => {
        this.coursiers = data;
        console.log(this.coursiers);
      }
    )
  }
}
