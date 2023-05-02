import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export class Orders{
  "name_customer": string;
  "name_restaurant": string;
  "adress_customer": string;
  "adress_restaurant": string;
  "price": number;
  "distance": number;
  "coursier_id": number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getOrderList(): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'orders/list',{headers:headers});
  }
  
}
