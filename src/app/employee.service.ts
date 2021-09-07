import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployees(){
    return [
      {"id" : 1, "name" : "Andrew", "age" : 31},
      {"id" : 2, "name" : "Brandon", "age" : 25},
      {"id" : 4, "name" : "Chrisrina", "age" : 26},
      {"id" : 4, "name" : "Elena", "age" : 28},
    ];
  }

}
