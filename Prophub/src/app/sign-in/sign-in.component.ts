import { AuthService } from './../auth.service';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private AuthService:AuthService, private Router:Router){}
  password: string =this.AuthService.user.password;
  username: string =this.AuthService.user.username;
  
  onSubmit(){
    this.AuthService.login(this.username,this.password);
    if(this.AuthService.user.email != ''){
      this.Router.navigate(['/games']);}
  }


}
