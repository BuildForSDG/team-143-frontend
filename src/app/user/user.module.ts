import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LrDashboardComponent } from './lr-dashboard/lr-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandOwnerRegistration } from "./lr-dashboard/actions/land-owner-reg.component";
import { NewLandRecordComponent } from "./lr-dashboard/actions/new-land-record.component";



@NgModule({
  declarations: [
    LoginComponent, 
    LrDashboardComponent,
    LandOwnerRegistration,
    NewLandRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "login", component: LoginComponent },
      { 
        path: "user", 
        component: LrDashboardComponent,
        children:[
          {path:"registration", component:LandOwnerRegistration},
          {path:"new_record", component:NewLandRecordComponent}
        ] 
      },
    ]),
    FontAwesomeModule
  ]
})
export class UserModule { }
