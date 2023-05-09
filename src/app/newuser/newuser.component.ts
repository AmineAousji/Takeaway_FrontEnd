import { Component } from '@angular/core';
import {User, UserLogin, UserService} from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['../newcategory/newcategory.component.css']
})
export class NewuserComponent {
  users: UserLogin[] = []


  user: UserLogin = {login: '', password: ''}
  constructor(private userService: UserService, private router: Router ) {}

  addUser(): void{
    this.userService.addUser(this.user).subscribe(() => {
    })
  }

}
