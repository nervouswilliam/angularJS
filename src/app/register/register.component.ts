import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private UserService: usersService,
    private router: Router  
  ){}
  user: any = {}; 

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required)
  })

  get f(){
    return this.form.controls
  }

  registerForm(): void{
    this.UserService.createUsers(this.user).subscribe(
      createdUser =>{
        console.log("Successfully created user", createdUser);
      }, error => {
        console.log("error creating user", error);
      }
    )
    this.redirectToLogin();
  }

  redirectToLogin(): void{
    this.router.navigate(['/login'])
  }

}
