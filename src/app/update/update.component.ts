import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  employee: any = {};
  constructor(private employeeService: EmployeeService){}

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.required)
  })
  get f(){
    return this.form.controls;
  }

  onUpdateForm(): void{
    this.employeeService.updateEmployees(this.employee.id, this.employee).subscribe(
      updatedEmployee =>{
        console.log("update employee succeeded", updatedEmployee);
        window.location.reload();
      }, error => {
        console.log("Error updating employees", error);
      }
    )

  }

}
