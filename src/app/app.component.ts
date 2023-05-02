import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  
  constructor() {
  }

  ngOnInit() {
    this.sidenav.mode = 'side';
    this.sidenav.open();
  }

  toggle() {
    this.sidenav?.toggle();
  }
  title = 'TakeAway';
}
