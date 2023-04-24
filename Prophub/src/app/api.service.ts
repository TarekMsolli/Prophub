import { Injectable, Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string ="http://localhost/signup.php/";

  constructor(private httpClient:HttpClient) { }


  public clientregistration(nameclient:any,  passwordclient:any){
    return this.httpClient.post(this.baseUrl,
    {
      nameclient,passwordclient
    }
    )
    .pipe(map(client => {
      return client;
    }))
  }

  public clientlogin(emailclient:any, passwordclient:any){
    //alert(email)
    return this.httpClient.post<any>(this.baseUrl+'/loginclient.php',{emailclient, passwordclient})
    .pipe(map((client:any) => {
      console.log(client)
      
       this.setToken(emailclient);
      //this.getLoggedInName.emit(true);
      return client;
    }));
  }
setToken(token: string){
  localStorage.setItem('token',token);
}
  }


