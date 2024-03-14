import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';
import { PasswordStrengthValidator } from '../confirm.validator';

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

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required)
  },
  {validators: PasswordStrengthValidator}
  );

  get f(){
    return this.form.controls
  }

  
  passwordMatchValidator(controlName: string, matchingControlName: string){
    return (form: FormGroup) => {
      const passwordControl = form.controls[controlName];
      const ConfirmPasswordControl = form.controls[matchingControlName];

      if(passwordControl && !ConfirmPasswordControl?.errors?.['passwordMatchValidator']){
        return;
      }
  
      if(passwordControl?.value !== ConfirmPasswordControl?.value){
        // ConfirmPasswordControl?.hasError('confirm password does not match password')
        ConfirmPasswordControl.setErrors({passwordMatchValidator:true});
      } else{
        ConfirmPasswordControl.setErrors(null);
      }
    }
    
  }

  registerForm(): void{
    this.UserService.createUsers(this.user).subscribe(
      createdUser =>{
        console.log("Successfully created user", createdUser);
        this.form.reset();
        this.redirectToLogin();
      }, error => {
        console.log("error creating user", error);
      }
    )
    
  }


  redirectToLogin(): void{
    this.router.navigate(['/login'])
  }

}
