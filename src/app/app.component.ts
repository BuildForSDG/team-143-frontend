import { Component, OnInit } from "@angular/core";
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  template: `
  
  <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  pageTitle = "Land Registry";
  
  constructor( private auth:AuthService) {}

  ngOnInit () {
  }

  
}
