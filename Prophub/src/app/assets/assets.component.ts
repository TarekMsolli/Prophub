import { Component } from '@angular/core';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent {
  assets = [];

  private readonly Assets_API_URL='http://localhost/props.php'
  term = '';
  constructor(private AssetService: AssetService){}
  ngOnInit(): void {
    fetch(this.Assets_API_URL).then(data => data.json()).then((result)=> this.assets = result);
  }

}
