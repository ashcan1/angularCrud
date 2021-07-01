import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [

  { path: '', component:EmployeeDashboardComponent},
  { path:  'form', component:FormsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
