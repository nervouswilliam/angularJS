import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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

  form : FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

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
      }
    )

    // if(this.form.valid)

    // this.redirectToHome();
  }

  

}
