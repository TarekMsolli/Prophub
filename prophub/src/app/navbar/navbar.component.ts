import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private AuthService:AuthService){}
  user=this.AuthService.user;

  subscription = interval(1000).subscribe(() => {
    this.user=this.AuthService.user;
  });



  
  
}
