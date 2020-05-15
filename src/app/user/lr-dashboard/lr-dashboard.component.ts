import { Component, OnInit } from '@angular/core';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"; 
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-lr-dashboard',
  templateUrl: './lr-dashboard.component.html',
  styleUrls: ['./lr-dashboard.component.css']
})
export class LrDashboardComponent implements OnInit {
  faUserPlus = faUserPlus;
  faPlus = faPlus;
  faExchangeAlt = faExchangeAlt;
  faSearch = faSearch;
  faCogs = faCogs;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
