import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    FormsComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
