import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginId: any;
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    this.loginId = this.loginService.getId();
  }
  logout() {
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }
}
