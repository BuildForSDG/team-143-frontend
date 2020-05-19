import { Component, OnInit } from '@angular/core';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-revenue-dashboard',
  templateUrl: './revenue-dashboard.component.html',
  styles: [`
  .kt-aside{
    height: 89vh;
  }
  #kt-header{
    position: absolute !important;
    height: 65px !important;
  }
  .kt-menu_action {
    font-size: 1.53rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    margin-left: 30.5%;
  }
  .kt-aside{
    float: left;
    
  }
  .kt-child{
    float: right;
    width: 80%;
    margin-top: 2%;
  }
  `]
})
export class RevenueDashboardComponent implements OnInit {
  faFileAlt = faFileAlt;
  faPlus = faPlus;
  faExchangeAlt = faExchangeAlt;
  faTimes = faTimes;
  faCogs = faCogs;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
