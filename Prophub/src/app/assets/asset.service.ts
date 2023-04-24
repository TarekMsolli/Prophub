import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private readonly Assets_API_URL='http://localhost/props.php'
  assets: any = [];

  constructor(private http: HttpClient) { }

  getData(r:any){
    this.assets = r;
  }

  getAssets() {
    fetch(this.Assets_API_URL).then(data => data.json()).then((result)=> this.assets = result);
    return this.assets;
  }
}
