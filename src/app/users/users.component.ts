import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User, UserLogin, UserService} from '../user.service'
import {AuthserviceService} from '../authservice.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userLogin = new UserLogin();
  user = new User();

  constructor(private userService: UserService, private router: Router, private authService: AuthserviceService ) {}
  
  LoginUser( login : string, password : string){
    this.userLogin.login = login;
    this.userLogin.password = password;
    console.log(login);
    console.log(password);

    this.userService.check(this.userLogin).subscribe(
      data => {
      if (data){
        this.user = data
        this.userService.login(this.user).subscribe(data =>{
          this.authService.isLoggedIn = true;
          console.log(data.token);
          localStorage.setItem('token', data.token);
          console.log(localStorage)
          this.router.navigate(['categories/list'])
        })
      }else{
        console.log("user not found");
      }
    })
  }

}
