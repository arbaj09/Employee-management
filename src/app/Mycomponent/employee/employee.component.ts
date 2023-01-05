import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  localItem: any;

  employee: Employee[] = []; 
  constructor(){
    this.localItem=localStorage.getItem("employee");
    if(this.localItem==null){
    this.employee=[]
    }
    else{
      this.employee=JSON.parse(this.localItem)
    }
  }
  ngOnInit(): void {
    
  }
  deleteEmployee(employee:Employee){
    console.log(employee)
    const index =this.employee.indexOf(employee)
    this.employee.splice(index,1)
    localStorage.setItem("employee",JSON.stringify(this.employee))
  }
  AddEmployee(employee:Employee){
    console.log(employee)
    this.employee.push(employee)
    localStorage.setItem("employee",JSON.stringify(this.employee))
  }
  editemployee(_employee:Employee){
    console.log(this.employee)
    
  }







}
