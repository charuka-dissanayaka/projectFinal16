import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  logInvalid = false;
  selectedUser:string;

  constructor(
    private router: Router, 
    private authService: AuthService,
    fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  ngOnInit() {
    //this.authService.logOut();
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get role(){
    return this.form.get('role');
  }


  onSubmit(loginForm){
    let user = loginForm.value;
    console.log(user)
    this.authService.loginUser(user).subscribe(
      res=>{
        console.log(res)
        if(res.json().token){
          localStorage.setItem('token', res.json().token);
          if(this.authService.currentUser.user.role == 'tutor'){
            this.router.navigate(['profile-edit-tutor']);
          }else{
            this.router.navigate(['studenthome']);            
          }
        }
        else{
          this.form.reset();
          this.logInvalid = true;
        }
      },
      err=>{
        throw err;
      }
    )
    if(this.selectedUser=='QC'){
      this.router.navigate(['intimate']);
    }
    else{
      this.router.navigate(['graph']);

    }

  }

  userChange(event){
    this.selectedUser=event.target.value;
    

  }
  textBoxDisabled = true;

  toggle1(){
    console.log("toggle function");
    this.textBoxDisabled =false ;
  }
  toggle2(){
    console.log("toggle function");
    this.textBoxDisabled = true;
  }
}
