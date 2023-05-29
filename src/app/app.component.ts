import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  constructor(private authService: AuthserviceService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.sidenav.mode = 'side';
    this.sidenav.open();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggle() {
    this.sidenav?.toggle();
  }
  title = 'TakeAway';
}
