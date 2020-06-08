import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Globals } from "../../../../globals";
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-lr-dashboard',
  templateUrl: './lr-dashboard.component.html',
  styleUrls: ['./lr-dashboard.component.css']
})
export class LrDashboardComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  
  role;
 

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    this.getRoles();
  
  }

  getRoles(){
    let roles = this.globals.currentUser.roles;
    
    roles.forEach( (value,index,array) => {
      if(array[value] === "1"){
        return 'Administrator'
        
      }
      if(array[value] === "2"){
        return 'Land Registrar'
      }
      if(array[value] === "3"){
        return 'Land Revenue Agent'
      }
      if(array[value] === "4"){
        return 'Land Owner'
      }
    });

  }

}
