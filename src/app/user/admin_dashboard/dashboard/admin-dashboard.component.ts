import { Component, OnInit } from '@angular/core';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
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

