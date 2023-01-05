import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent {
  

onEditemployee() {

}
  @Input() 
  employee: Employee = new Employee; 
  @Output() employeeDelete:EventEmitter<Employee>=new EventEmitter();
  

  onClick(employee:Employee){
    this.employeeDelete.emit(employee)
    console.log('triged')
  }
}
