import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2 class="m-10">Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: [
    'ul {list-style-type:none}',
    'h2 {margin:20px 0px}',
  ]
})
export class EmployeeDetailComponent implements OnInit {

  employees: any = [];

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
