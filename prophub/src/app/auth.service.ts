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

  constructor(private HttpClient:HttpClient) { }

  login(usename:string,password:string){
    this.user.username=usename;
    this.user.password=password;
    this.HttpClient.post('http://127.0.0.1/signin.php', this.user).subscribe(response => {this.verify(response);})
    
  }

  signup(usename:string,password:string,email:string){

  }

  verify(x:any){
    this.user=x;
    console.log(this.user)
  }

}
