import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursierComponent } from './coursier/coursier.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewcoursierComponent } from './newcoursier/newcoursier.component';
import { NeworderComponent } from './neworder/neworder.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { AssignerComponent } from './assigner/assigner.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: UsersComponent},
  {path: 'users', component: NewuserComponent},
  {path: 'categories/list', component: DashboardComponent},
  {path: 'categories', component: NewcategoryComponent},
  {path: 'coursiers/list', component: CoursierComponent},
  {path: 'coursiers', component: NewcoursierComponent},
  {path: 'orders', component: NeworderComponent},
  {path: 'orders/list', component: OrdersComponent},
  {path: 'orders/assign', component: AssignerComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'categories/:id/coursiers', component: CategoriesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
