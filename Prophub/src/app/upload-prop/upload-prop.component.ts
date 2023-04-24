import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-prop',
  templateUrl: './upload-prop.component.html',
  styleUrls: ['./upload-prop.component.scss']
})
export class UploadPropComponent {
  loginId:any;
  constructor( private loginService:LoginService, private router:Router){}
  ngOnInit(): void {
    this.loginId = this.loginService.getId();
  }
  logout(){
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }

}
