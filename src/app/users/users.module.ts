import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LrDashboardComponent } from './land-registrar/dashboard/lr-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandOwnerRegistration } from "./land-registrar/actions/land-owner-reg.component";
import { NewLandRecordComponent } from "./land-registrar/actions/new-land-record.component";
import { InitiateTransferComponent } from './land-registrar/actions/initiate-transfer.component';
import { ModifyLandRecordComponent } from './land-registrar/actions/modify-land-record.component';
import { ApproveLandTransferComponent } from './land-registrar/actions/approve-land-transfer.component';
import { RevenueDashboardComponent } from './revenue-authority/dashboard/revenue_dashboard.component';
import { ApprovalsComponent } from './revenue-authority/actions/approvals.component';
import { DeclinesComponent } from './revenue-authority/actions/declines.component';
import { ActivityLogComponent } from './revenue-authority/actions/activity-log.component';
import { PendingComponent } from './revenue-authority/actions/pending.component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';
//import services here
import {
  AuthService,
  AlertsService,
} from '../services';

//import guards here
import {
  AuthGuard,
  RevenueAuthGuard,
  LandRegistryAuthGuard,
  LandOwnerAuthGuard,
  AdminAuthGuard
} from '../guards';

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
        canActivate: [LandRegistryAuthGuard],
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
        canActivate: [RevenueAuthGuard],
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
        canActivate: [AdminAuthGuard],
        component: RevenueDashboardComponent,
        children:[
          {path:"admin", component:AdminDashboardComponent}
        ] 
      }
    ]),
    FontAwesomeModule
  ],
  providers: [
    LandRegistryAuthGuard,
    RevenueAuthGuard,
    AdminAuthGuard
  ]
})
export class UsersModule { }
