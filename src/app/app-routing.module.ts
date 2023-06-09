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
import { SearchorderComponent } from './searchorder/searchorder.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UsersComponent },
  { path: 'users', component: NewuserComponent },
  { path: 'categories/list', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'categories/modify/:id', component: NewcategoryComponent, canActivate: [AuthGuard] },
  { path: 'categories/add', component: NewcategoryComponent, canActivate: [AuthGuard] },
  { path: 'coursiers/list', component: CoursierComponent, canActivate: [AuthGuard] },
  { path: 'coursiers', component: NewcoursierComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: NeworderComponent, canActivate: [AuthGuard] },
  { path: 'orders/list', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'orders/assign', component: AssignerComponent, canActivate: [AuthGuard] },
  { path: 'categories/:id', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'categories/:id/coursiers', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'orders/:name_restaurant', component: SearchorderComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
