import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : new FormControl('',[Validators.required, Validators.email]),
      password :new FormControl('',[Validators.required])
    })
  }

  logIn(){
    this._http.get<any>("http://localhost:3000/Signup").subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successful..!");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("User not Found")
      }
    },err=>{
      alert("Server Unavailable")
    })
  }

  get email() {return this.loginForm.get('email')}
  get password() {return this.loginForm.get('password') }

}
