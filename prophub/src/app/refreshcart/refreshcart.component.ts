import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshcart',
  templateUrl: './refreshcart.component.html',
  styleUrls: ['./refreshcart.component.scss']
})
export class RefreshcartComponent implements OnInit{
  constructor(private Router:Router){}
  ngOnInit(): void {
    this.Router.navigate(['/cart']);
  }
}
