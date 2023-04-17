import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  public signInForm!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.signInForm=this.fb.group(
        {
          email:['', Validators.required],
          password:['', Validators.required]
        }
      )
  }
  public logIn():void{
    console.log(this.signInForm.value);
  }
}
