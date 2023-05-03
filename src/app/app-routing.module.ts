import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursierComponent } from './coursier/coursier.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: UsersComponent},
  {path: 'categories/list', component: DashboardComponent},
  {path: 'coursiers/list', component: CoursierComponent},
  {path: 'coursiers', component: CoursierComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'categories/:id/coursiers', component: CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
