import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("^[A-Za-z][A-Za-z0-9_]{0,29}$")]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/Signup",this.signupForm.value).subscribe(res=>{
      alert("Registration Successfully..");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err=>{
        alert("Something Went Wrong... !")
    }
    )
  }

  get name() {return this.signupForm!.get('name') }
  get email() {return this.signupForm!.get('email') }
  get mobile() {return this.signupForm!.get('mobile') }
}
