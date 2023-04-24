import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  carts:any;
  CART_API_URL='http://127.0.0.1/cart.php';


  constructor(private loginService:LoginService, private router:Router, private http:HttpClient){};

  ngOnInit(): void {
    fetch(this.CART_API_URL).then(data => data.json()).then((result)=> this.carts = result);
  }
  loginId:any;

  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }

  deleteRow(game_id: any,client_id: any) {
    console.log(game_id, client_id);
    console.log('Row deleted!');
    this.http.delete(`/api/client_game?user_id=${client_id}&game_id=${game_id}`).subscribe(() => {
      this.carts = this.carts.filter((item: { user_id: any; game_id: any; }) => item.user_id !== client_id || item.game_id !== game_id);
    });
  }
}
