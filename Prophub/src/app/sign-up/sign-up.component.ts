import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private AuthService:AuthService, private Router:Router){}
  password: string ='';
  username: string ='';
  email: string = '';
  doit=false;

  onSubmit(){
    this.AuthService.signup(this.username,this.password,this.email);
    if(this.AuthService.doit){
      this.Router.navigate(['/sign-in']);}
  }
}
