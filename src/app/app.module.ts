import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { AuthService } from './user/login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", redirectTo: "home", pathMatch: "full"},
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
