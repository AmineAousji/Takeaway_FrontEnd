import { Component } from '@angular/core';
import{ Coursiers, DeliverymenService} from '../deliverymen.service';
import { Category, CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-newcoursier',
  templateUrl: './newcoursier.component.html',
  styleUrls: ['./newcoursier.component.css']
})
export class NewcoursierComponent {

  coursiers : Coursiers[] = []
  categories: Category[] = []
  addCoursierForm: boolean = false;
  

  coursier: Coursiers ={name:'', adress:'', recruitment_date:'', Num_tel:'', category_name: '' }
  constructor (
    private categoryService : CategoryService,
    private deliverymenService : DeliverymenService, 
    private router:ActivatedRoute,
    private routers:Router){}

    ngOnInit() {
      this.categoryService.getCategoryList().subscribe(
        data => {
          this.categories = data
          console.log(this.categories)
        }
      )
    }
    addCoursier(): void{
      this.deliverymenService.addCoursier(this.coursier).subscribe(() => {
        this.addCoursierForm = false;
        this.coursier = {name:'', adress:'', recruitment_date:'', Num_tel:'', category_name: ''};

        this.routers.navigate(['coursiers/list'])
      });
    }

}
