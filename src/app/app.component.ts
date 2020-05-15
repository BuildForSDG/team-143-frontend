import { Component } from "@angular/core";

import { AuthService } from "./user/login/auth.service";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle = "Land Management System";
  faSearch = faSearch;
  faBell = faBell;
  faHome = faHome;
  faDatabase = faDatabase;
  faChevronRight = faChevronRight;
  faChartPie = faChartPie;
  faUser = faUser;

  constructor( public auth:AuthService) {}
}
