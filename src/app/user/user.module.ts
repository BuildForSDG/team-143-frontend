import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LrDashboardComponent } from './lr-dashboard/lr-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandOwnerRegistration } from "./lr-dashboard/actions/land-owner-reg.component";
import { NewLandRecordComponent } from "./lr-dashboard/actions/new-land-record.component";
import { InitiateTransferComponent } from './lr-dashboard/actions/initiate-transfer.component';
import { ModifyLandRecordComponent } from './lr-dashboard/actions/modify-land-record.component';
import { ApproveLandTransferComponent } from './lr-dashboard/actions/approve-land-transfer.component';
import { RevenueDashboardComponent } from './revenue-dashboard/revenue-dashboard.component';



@NgModule({
  declarations: [ 
    LrDashboardComponent,
    LandOwnerRegistration,
    NewLandRecordComponent,
    InitiateTransferComponent,
    ModifyLandRecordComponent,
    ApproveLandTransferComponent,
    RevenueDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { 
        path: "user", 
        component: LrDashboardComponent,
        children:[
          {path:"registration", component:LandOwnerRegistration},
          {path:"new_record", component:NewLandRecordComponent},
          {path:"transfer", component:InitiateTransferComponent},
          {path:"modify", component:ModifyLandRecordComponent},
          {path:"approve", component:ApproveLandTransferComponent}
        ] 
      },
      { 
        path: "revenue", 
        component: RevenueDashboardComponent,
        children:[
          {path:"approvals", component:LandOwnerRegistration},
          {path:"declines", component:NewLandRecordComponent},
          {path:"log", component:InitiateTransferComponent}
        ] 
      }
    ]),
    FontAwesomeModule
  ]
})
export class UserModule { }
