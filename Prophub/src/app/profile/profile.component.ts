import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileId: any;
  games:any=[];
  term=""
  bioDemand={
    "id":'',
    "bio":''
  }
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private AuthService:AuthService) { 
    this.activatedRoute.params.subscribe(params => {
      this.profileId = params['id'];
    }); 
  }
  sessionId = this.AuthService.user.id;
  editBio = false;
  profile:any=
    {
        "id": "2",
        "name": "Mariem",
        "description": null,
        "password": "asdi9a2i",
        "email": "mariem@prophub.com"
    };
  
  ngOnInit(): void {    
    this.httpClient.post('http://127.0.0.1/getprofile.php', this.profileId).subscribe(response => {
      this.profile = response;this.bioDemand.bio=this.profile[0].description;
      fetch('http://127.0.0.1/getgames.php').then((data)=>{return data.json()}).then((response)=>{this.games=(response)});
      this.term=this.profile[0].name;
    });
  }

  

  changeBio(){
    this.bioDemand.id = this.AuthService.user.id;
    console.log(this.bioDemand)
    this.httpClient.post('http://127.0.0.1/editbio.php', this.bioDemand).subscribe(response => {
      console.log(response);
    });
    this.editBio=false;
    this.profile[0].description=this.bioDemand.bio;
  }
}
