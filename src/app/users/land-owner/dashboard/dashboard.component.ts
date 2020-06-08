import { Component, OnInit } from '@angular/core';

import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

import { Globals } from 'src/globals';



@Component({
  selector: 'app-lr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class LandOwnerDashboardComponent implements OnInit {
  faCalendarAlt=faCalendarAlt;

  constructor(public globals:Globals) { }

  ngOnInit(): void {
  }

}