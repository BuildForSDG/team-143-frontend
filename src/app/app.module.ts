import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navigation/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "login", pathMatch: "full"},
      { path: "**", redirectTo: "login", pathMatch: "full"},
      {path: "user", loadChildren: "./user/user.module#UserModule"}
    ]),
    UserModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    DataTablesModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
