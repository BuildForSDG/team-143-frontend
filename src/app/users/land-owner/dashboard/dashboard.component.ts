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
  Roles;

  constructor(public globals:Globals) { }

  ngOnInit() {
    this.Roles = this.globals.currentUser.roles.map(role => {
      if(role == "1"){
        return 'Administrator'
      }
      if(role == "2"){
        return  'Land Registrar'
      }
      if(role == "3"){
        return 'Land Revenue Agent'
      }
      if(role == "4"){
        return  'Land Owner'
      }
    });
   
  }

}