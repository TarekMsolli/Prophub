import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private apiUrl = 'http://127.0.0.1/signup.php';
  name: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = { name: this.name, password: this.password };
    this.http.post(this.apiUrl, data).subscribe(response => {
      console.log('User added!');
    });
  }
}
