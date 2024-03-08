import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, RequiredValidator } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() createEmployee = new EventEmitter<any>();
  employee: any = {};

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ){}

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required)
  })
  get f(){
    return this.form.controls;
  }

  onSubmitForm(): void{
  

    this.employeeService.createEmployees(this.employee).subscribe(
      createdEmployee =>{
        console.log("created employee successful", createdEmployee);
        window.location.reload();
      },
      error => {
        console.log("created employee error", error);
      }
      
    );
  
  }



}
