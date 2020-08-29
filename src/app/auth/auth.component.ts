import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logInMode = true;
  loadingMode= false;
  error:string = null;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.logInMode = !this.logInMode;
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.loadingMode = true;
    if(this.logInMode){
       this.authService.logIn(email,password).subscribe(resData=>{
        console.log(resData);
        this.loadingMode = false;
        this.router.navigate(['/recipes'])

      },errorMessage=>{
        console.log(errorMessage)
        this.error = errorMessage
        this.loadingMode = false;
      })
      
    }else{
     
    this.authService.signUp(email,password).subscribe(resData=>{
      console.log(resData);
      this.loadingMode = false;
      this.router.navigate(['/recipes'])
    },errorMessage=>{
      console.log(errorMessage)
      this.error = errorMessage
      this.loadingMode = false;
    })
    }
   form.reset();
  }
  OnHandleError(){
    this.error = null;
  }
}
