import { Router } from '@angular/router';
import { auto } from '@popperjs/core';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private AuthService:AuthService, private Router:Router){}
  mail='';
  home:boolean=true;
  subscription = interval(600).subscribe(() => {
    this.mail=this.AuthService.user.email;
    this.home=this.Router.url === '/home';
    
  });

  logout(){
    this.AuthService.user=
    {
      "id": '',
      "username": '',
      "description": '',
      "password": '',
      "email": ''
    }
  }
}
