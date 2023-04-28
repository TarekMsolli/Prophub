import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private AuthService:AuthService, private HttpClient:HttpClient) {}

  game: any;
  gameId: number = 0;

  demand=
    {
      "client_id": '1',
      "game_id": ''
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.gameId = Number(params.get('id')) - 1;
      this.demand.client_id=this.AuthService.user.id;
      this.demand.game_id=(this.gameId + 1).toString();
      fetch('http://127.0.0.1/getgames.php')
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          this.game = response[this.gameId];
        });
    });
  }

  addToCart(){
    console.log(this.demand)
    this.HttpClient.post('http://127.0.0.1/addtocart.php', this.demand).subscribe(response => {console.log(response);})
  }
}
