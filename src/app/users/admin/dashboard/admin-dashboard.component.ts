import { Component, OnInit } from '@angular/core';

import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

import { Globals } from "../../../../globals";


@Component({
  selector: 'lms-admin',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 faCalendarAlt = faCalendarAlt;

  constructor(public globals:Globals ) {}

  ngOnInit(): void {
  }

}