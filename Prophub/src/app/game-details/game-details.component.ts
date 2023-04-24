import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../games/game.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

const Games_API_URL ='http://localhost/games.php'
const CART_API_URL = 'http://localhost/addtocart.php'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit{
  games: any;
  gameId: any ='';
  game: any;
  data:any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private http: HttpClient,
    private loginService:LoginService, 
    private router:Router
  ) { }

  ngOnInit(): void {
    fetch(Games_API_URL).then(data => data.json()).then((result)=> this.getData(result)).catch;
    this.route.paramMap.subscribe(params => {
      this.gameId = Number(params.get('id'));
    });
    this.loginId = this.loginService.getId();
    
  }
  getData(r: any){
    this.games = r;
    this.gameId = this.gameId
    this.game = this.games[this.gameId - 1];

  }

  loginId:any;

  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }

  addToCart(){
    this.data.gameId = this.gameId;
    this.data.loginId = this.loginId;
    this.http.post(CART_API_URL, this.data).subscribe(response => {
      console.log(response);})
  }
}
