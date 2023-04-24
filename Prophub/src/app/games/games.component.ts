import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { GameService } from './game.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games = [];
  loginId: any;

  private readonly Games_API_URL = 'http://localhost/games.php';
  term = '';
  constructor(
    private GameService: GameService,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    fetch(this.Games_API_URL)
      .then((data) => data.json())
      .then((result) => (this.games = result));
    this.loginId = this.loginService.getId();
  }

  logout() {
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }
}
