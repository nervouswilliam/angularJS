import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup
  constructor(
    private UserService: usersService,
    private router: Router, 
    private formBuilder: FormBuilder 
  ){
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }
  user: any = {}; 
  loginError = false;

  form : FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  isLoggedin = false;
  isLoginFailed = false;
  errorMsg = '';
  roles: string[] = [];

  

  get f(){
    return this.form.controls;
  }

  redirectToHome(): void{
    this.router.navigate(['/home']);
  }

  onSubmit(): void{    
    this.UserService.login(this.form.value).subscribe(
      response => {
        console.log("login successful", response);
        this.redirectToHome();
      }, error =>{
        console.error('Login Failed:', error);
        this.loginError = true;
      }
    )

    // if(this.form.valid)

    // this.redirectToHome();
  }

  

}
