import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, RequiredValidator } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  // employeeForm: FormGroup;
  @Output() createEmployee = new EventEmitter<any>();
  employee: any = {};
  // employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ){
    // this.employeeForm = this.formBuilder.group({
    //   firstname: ['', [Validators.required]]
    // })
  }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required)
  })
  get f(){
    return this.form.controls;
  }

  onSubmitForm(): void{
    // if(this.employeeForm.valid){
    //   const employeeData = this.employeeForm .value;
    //   this.createEmployee.emit(employeeData);
    //   this.employeeForm.reset();      
    // } else{
    //   console.log("Form Validation Failed.");
    // }
  

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
