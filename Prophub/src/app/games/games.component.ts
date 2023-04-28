
import { Component,OnInit, ElementRef } from '@angular/core';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{
  constructor(private ElementRef:ElementRef){}
  term='';
  games:any=[];
  tags:any=[]
  previous='sci-fi';
  ngOnInit(): void {
    fetch('http://127.0.0.1/getgames.php').then((data)=>{return data.json()}).then((response)=>{this.games=(response)});
    fetch('http://127.0.0.1/gettags.php').then((data)=>{return data.json()}).then((response)=>{this.tags=(response)});
  }
  filter(name:string){
    if(name==this.term){
      this.term='';
      this.ElementRef.nativeElement.querySelector('#'+name).style.backgroundColor = 'crimson';
    }
    else {
      this.term=name;
      this.ElementRef.nativeElement.querySelector('#'+name).style.backgroundColor = '#212130';
      this.ElementRef.nativeElement.querySelector('#'+this.previous).style.backgroundColor = 'crimson';
      this.previous=name;
    }

  }
  
}
