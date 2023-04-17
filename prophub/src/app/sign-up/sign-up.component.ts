import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  public signUpForm!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
      this.signUpForm=this.fb.group(
        {
          username:['', Validators.required],
          email:['', Validators.required],
          confirmemail:['', Validators.required],
          password:['', Validators.required],
          confirmpassword:['', Validators.required]
        }
      );
  }
  public saveUser():void{
    console.log(this.signUpForm.value);
  }
}
