import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { AuthService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
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
    CommonModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
