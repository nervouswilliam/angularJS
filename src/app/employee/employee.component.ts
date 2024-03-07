import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employee: any[] = [];
  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.loadEmployees();
    
  }

  onSubmitForm(employeeData: any): void{
    this.employeeService.createEmployees(employeeData).subscribe(createdEmployee =>{
      console.log("Employee created successfully", createdEmployee);
      this.loadEmployees();
    }, error => console.error("Error Creating employee: ", error));
  }

  loadEmployees(): void{
    this.employeeService.getAllEmployees().subscribe(
      data => {
        console.log("Received employee data: ", data);
        this.employee = data;
        // this.ngZone.run();
      },
      error => {
        console.log("Error get data", error)
      }
    );
    console.log(this.employee);
  }

  onDeleteEmployee(employeeId: number): void{
    this.employeeService.deleteEmployees(employeeId).subscribe(() =>{
      console.log(`Employee with ID ${employeeId} deleded successfully`);
      this.loadEmployees();
    }, error => console.error(`Error deleting employee with ID ${employeeId}: `,error));
  }

  // onSubmit(): void{
  //   this.employeeService.createEmployees(this.employee).subscribe(
  //     createdEmployee => {
  //       console.log("Employee Created Successfully: ", createdEmployee);
  //     },
  //     error => console.error("Error Creating Employee: ", error)
  //   );
  //   console.log(console.error())
  // }
}
