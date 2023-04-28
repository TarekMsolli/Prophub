import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private HttpClient:HttpClient, private AuthService:AuthService, private Router:Router){}
  demand=
  {
    "client_id": this.AuthService.user.id,
    "game_id": ''
  }
  cartlist:any;
  ngOnInit(){
    this.HttpClient.post('http://127.0.0.1/getcart.php', this.demand.client_id).subscribe(response => {this.cartlist=response;console.log(this.cartlist)})
  }
  removeCartItem(id:any){
    this.demand.game_id=id;
    console.log(this.demand);
    this.HttpClient.post('http://127.0.0.1/removefromcart.php', this.demand).subscribe(response => {console.log(response);})
    this.Router.navigate(['/refreshcart']);
  }
}
