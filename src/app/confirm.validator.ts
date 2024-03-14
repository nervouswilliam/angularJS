import { FormGroup , AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

// export function confirmValidatorPassword(controlName: string, matchingControlName:string){
//     return (form: FormGroup) => {
//         const passwordControl = form.controls[controlName];
//         const ConfirmPasswordControl = form.controls[matchingControlName];
  
//         if(passwordControl && !ConfirmPasswordControl?.errors?.['passwordMatchValidator']){
//           return;
//         }
    
//         if(passwordControl?.value !== ConfirmPasswordControl?.value){
//           // ConfirmPasswordControl?.hasError('confirm password does not match password')
//           ConfirmPasswordControl.setErrors({passwordMismatch:true});
//         } else{
//           ConfirmPasswordControl.setErrors(null);
//         }
//       }
// }


export function PasswordStrengthValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if(!value){
            return null;
        }
        
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
        return !passwordValid ? {passwordStrength: true}: null;

      }
}

