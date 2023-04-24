import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginId: any;
  ngOnInit(): void {
    this.loginId = this.loginService.getId();
  }
  logout() {
    this.loginService.setId(0);
    this.router.navigate(['/home']);
  }

  username: any;
  password: any;
  foundClient: any;

  private readonly Games_API_URL = 'http://localhost/signin.php';
  clients: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {}

  login() {
    fetch(this.Games_API_URL)
      .then((data) => data.json())
      .then((result) => (this.clients = result));

    const client = this.clients.find(
      (c: { name: any; password: any }) =>
        c.name === this.username && c.password === this.password
    );

    if (client) {
      this.router.navigate(['/home']);
      this.loginService.setId(client.id);
      this.loginService.setUser(client);
    } else {
      alert('Client not found');
    }
  }
}
