import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(private employeeService: EmployeeService){}
  employee: any = {};
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
