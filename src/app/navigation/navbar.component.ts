import { Component } from "@angular/core";
import {AuthService} from "../services/auth.service";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styles:[`.nav-link {
        font-size: large;
      }
      .login{
        margin-right: auto !important;
      }
      i{
        color: white;
      }
      `] 
})

export class NavbarComponent {
    faSearch = faSearch;
    faBell = faBell;
    faHome = faHome;
    faDatabase = faDatabase;
    faChevronRight = faChevronRight;
    faChartPie = faChartPie;
    faUser = faUser;

    constructor( public auth:AuthService) {}

    
  
}