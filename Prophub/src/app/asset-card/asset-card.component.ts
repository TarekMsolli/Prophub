import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent implements OnInit{
  @Input() asset: any;
  ngOnInit(): void {
    console.log(this.asset)
  }
}
