import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: [
    'h2 {margin:20px 0px}',
  ]
})
export class EmployeeListComponent implements OnInit {

  employees:any = [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {

    this.employees = this._employeeService.getEmployees();

  }



}
