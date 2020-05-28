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
import { RevenueDashboardComponent } from './revenue-dashboard/revenue_dashboard.component';
import { ApprovalsComponent } from './revenue-dashboard/actions/approvals.component';
import { DeclinesComponent } from './revenue-dashboard/actions/declines.component';
import { ActivityLogComponent } from './revenue-dashboard/actions/activity-log.component';
import { PendingComponent } from './revenue-dashboard/actions/pending.component';
import { AdminDashboardComponent } from './admin _dashboard/admin-dashboard.component';

@NgModule({
  declarations: [ 
    LrDashboardComponent,
    LandOwnerRegistration,
    NewLandRecordComponent,
    InitiateTransferComponent,
    ModifyLandRecordComponent,
    ApproveLandTransferComponent,
    RevenueDashboardComponent,
    PendingComponent,
    DeclinesComponent,
    ApprovalsComponent,
    AdminDashboardComponent
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
          {path:"pending", component:PendingComponent},
          {path:"approvals", component:ApprovalsComponent},
          {path:"declines", component:DeclinesComponent},
          {path:"log", component:ActivityLogComponent}
        ] 
      },
      { 
        path: "admin", 
        component: RevenueDashboardComponent,
        children:[
          {path:"admin", component:AdminDashboardComponent}
        ] 
      }
    ]),
    FontAwesomeModule
  ]
})
export class UserModule { }
