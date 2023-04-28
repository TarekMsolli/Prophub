import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private AuthService:AuthService){}
  password: string ='';
  username: string ='';
  email: string = '';

  onSubmit(){
    this.AuthService.signup(this.username,this.password,this.email);
  }
}
