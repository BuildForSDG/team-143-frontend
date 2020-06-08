import { Component, OnInit } from '@angular/core';

import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

import { Globals } from 'src/globals';




@Component({
  selector: 'app-revenue-dashboard',
  templateUrl: './revenue_dashboard.component.html',
  styleUrls: ['./revenue_dashboard.component.css']
})
export class RevenueDashboardComponent implements OnInit {
faCalendarAlt=faCalendarAlt;
  

  constructor(public globals:Globals) { }

  ngOnInit(): void {
  }

}
