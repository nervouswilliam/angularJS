import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private UserService: usersService,
    private router: Router  
  ){}
  user: any = {}; 

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  get f(){
    return this.form.controls
  }

  onSubmit(): void{    
    this.UserService.createUsers(this.user).subscribe(
      validateUser =>{
        console.log("Successfully validated user", validateUser);
      }, error => {
        console.log("error validating user", error);
      }
    )

    this.redirectToHome();
  }

  redirectToHome(): void{
    this.router.navigate(['/home']);
  }

}
