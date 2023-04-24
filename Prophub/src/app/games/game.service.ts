import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly Games_API_URL='http://localhost/index.php'
  games: any = [];
  

  constructor(private http: HttpClient) {}

  getData(r:any){
    this.games = r;
  }
  

  getGames() {
    fetch(this.Games_API_URL).then(data => data.json()).then((result)=> this.games = result);
    return this.games;
  }


}
