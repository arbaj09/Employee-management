import { sanitizeIdentifier } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  @Output() employeeAdd:EventEmitter<Employee>=new EventEmitter();
  Name:any
Email: any;
Sallary: any;
Designation: any;

onSubmit(){
  const employee={
    Name:this.Name,
    Email:this.Email,
    Sallary:this.Sallary,
    Designation:this.Designation,


     
  }
  this.employeeAdd.emit(employee)
}

}
