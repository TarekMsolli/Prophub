import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=
    {
      "id": '',
      "username": '',
      "description": '',
      "password": '',
      "email": ''
    }

    signupdemand=
    {
      "username": "",
      "email": "",
      "password": ""
    }

  constructor(private HttpClient:HttpClient) { }

  login(usename:string,password:string){
    this.user.username=usename;
    this.user.password=password;
    this.HttpClient.post('http://127.0.0.1/signin.php', this.user).subscribe(response => {this.verify(response);});
    
  }

  signup(username:string,password:string,email:string){
    console.log(username,password,email);
    this.signupdemand.email=email;
    this.signupdemand.password=password;
    this.signupdemand.username=username;
    this.HttpClient.post('http://127.0.0.1/userexists.php', this.signupdemand).subscribe(response => {this.nameExists(response);})
  }

  verify(x:any){
    this.user=x;
    console.log(this.user)
  }
  nameExists(x:any){
    if (x === null) {
      this.HttpClient.post('http://127.0.0.1/mailexists.php', this.signupdemand).subscribe(response => {this.emailExists(response);})
    } else {
      alert("Username already exists");
    }
  }
  doit=false;
  emailExists(x:any){
    if (x === null) {
      this.HttpClient.post('http://127.0.0.1/signup.php', this.signupdemand).subscribe(response => {console.log(response);this.doit=true;})
    } else {
      alert("Email already exists");
    }
  }

}
