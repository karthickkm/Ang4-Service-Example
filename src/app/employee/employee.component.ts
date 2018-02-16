import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : Employee;
  
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() : void {
    this.employeeService.getEmployee()
    .subscribe(
      employee => this.employee = employee

    );
    //console.log('emp = '+this.employee.empId);
  }

}
