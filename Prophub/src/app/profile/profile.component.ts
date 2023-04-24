import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  randomInt = Math.floor(Math.random() * (4)) +1;
  loginId:any;
  showBio = false;
  bio='';

  constructor( private loginService:LoginService, private router:Router){}
  ngOnInit(): void {
    this.loginId = this.loginService.getId();
    console.log(this.user)
  }
  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }
  user = this.loginService.getUser();
  changeBio(){
    console.log(this.bio)
    this.showBio= false;
  }
}
