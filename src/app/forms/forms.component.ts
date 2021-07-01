import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { EmployeeModel } from './forms.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObject: EmployeeModel = new EmployeeModel();
  

  constructor(private formBuilder: FormBuilder , 
    private api :ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group ({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : ['']
  })

}
postEmployeeDetails(){
  this.employeeModelObject.firstName = this.formValue.value.firstName
  this.employeeModelObject.lastName = this.formValue.value.lastName
  this.employeeModelObject.email = this.formValue.value.email
  this.employeeModelObject.mobile = this.formValue.value.mobile
  this.employeeModelObject.salary = this.formValue.value.salary


  this.api.postEmploye(this.employeeModelObject)
  .subscribe (res=> {
    console.log(res);

    alert("Employee added Successfully")
    this.formValue.reset();
  },

  err=>{
  alert("something went wrong");

  
  })
}
}
  
