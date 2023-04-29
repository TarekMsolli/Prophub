import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private AuthService:AuthService,private Router:Router){}
  user=this.AuthService.user;
  home:boolean=true;
  subscription = interval(1000).subscribe(() => {
    this.user=this.AuthService.user;
    this.home=this.Router.url === '/home';
  });

};
  
  

