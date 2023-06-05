import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { CoursierComponent } from './coursier/coursier.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewcoursierComponent } from './newcoursier/newcoursier.component';
import { NeworderComponent } from './neworder/neworder.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewuserComponent } from './newuser/newuser.component';
import { AuthserviceService } from './authservice.service';
import { AssignerComponent } from './assigner/assigner.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursierComponent,
    OrdersComponent,
    UsersComponent,
    CategoriesComponent,
    NewcoursierComponent,
    NeworderComponent,
    NewcategoryComponent,
    NewuserComponent,
    AssignerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
