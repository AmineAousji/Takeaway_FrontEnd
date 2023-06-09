import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent {
  category: Category = { category_name: '', description: '' };
  isEditMode: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const categoryId = this.activatedRoute.snapshot.params['id'];
    if (categoryId) {
      this.isEditMode = true;
      this.categoryService.getCategory(categoryId).subscribe(
        (data) => {
          this.category = data;
        }
      );
    } else {
      this.isEditMode = false;
    }
  }

  saveCategory(): void {
    if (this.isEditMode) {
      this.categoryService.modifyCategory(this.category.category_name, this.category).subscribe(() => {
        this.router.navigate(['categories', 'list']);
      });
    } else {
      this.categoryService.addCategory(this.category).subscribe(() => {
        this.router.navigate(['categories', 'list']);
      });
    }
  }
}
