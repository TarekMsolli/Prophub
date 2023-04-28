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
  constructor(private AuthService:AuthService){}
  mail='';
  subscription = interval(1000).subscribe(() => {
    this.mail=this.AuthService.user.email;
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
