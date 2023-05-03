import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import{ Coursiers, DeliverymenService} from '../deliverymen.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-coursier',
  templateUrl: './coursier.component.html',
  styleUrls: ['./coursier.component.css']
})
export class CoursierComponent {
  coursiers : Coursiers[] = []
  categories: Category[] = []
  addCoursierForm: boolean = false;
  modifyCoursierForm: boolean = false;
  delOrMod: boolean = false;
  selectedCoursier: any = {};

  coursier: Coursiers ={name:'', adress:'', recruitment_date:'', Num_tel:'', category_name: '' }
  constructor (
    private categoryService : CategoryService,
    private deliverymenService : DeliverymenService, 
    private router:ActivatedRoute,
    private routers:Router){}

  ngOnInit() {
    this.deliverymenService.getCoursierList().subscribe(
      data => {
        this.coursiers = data;
        console.log(this.coursiers);
      }
    )
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data
        console.log(this.categories)
      }
    )
  }


  getCoursier(coursier: any) {
    this.selectedCoursier = coursier;
    this.modifyCoursierForm = true;
    console.log(this.selectedCoursier.coursier_id);
  }

  updateCoursier(coursier:any): void{
    this.deliverymenService.modifyCoursier(coursier.coursier_id, coursier).subscribe(() => {
      console.log(coursier);
      this.modifyCoursierForm = false;
    });
  }

  deleteCoursier(coursier:any): void{
    this.deliverymenService.deleteCoursier(coursier.coursier_id, coursier).subscribe(() => {
      console.log(coursier);
      this.modifyCoursierForm = false;
    });
    this.routers.navigate(['coursiers/list'])
  }
}
