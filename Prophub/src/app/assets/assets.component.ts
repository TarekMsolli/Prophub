import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  term='';
  assets:any=[];
  ngOnInit(): void {
    fetch('http://127.0.0.1/getassets.php').then((data)=>{return data.json()}).then((response)=>{this.assets=(response)});
  }
}
