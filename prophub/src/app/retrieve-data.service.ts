import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService{

  constructor(private HttpClient:HttpClient) { }
  games:any;

  InitGames() {
    fetch('http://127.0.0.1/getgames.php')
  }

  
}
