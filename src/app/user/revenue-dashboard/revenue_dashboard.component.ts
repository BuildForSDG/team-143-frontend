import { Component, OnInit } from '@angular/core';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-revenue-dashboard',
  templateUrl: './revenue_dashboard.component.html',
  styleUrls: ['./revenue_dashboard.component.css']
})
export class RevenueDashboardComponent implements OnInit {
  faPlus = faPlus;
  faExchangeAlt = faExchangeAlt;
  faTimes = faTimes;
  faCogs = faCogs;
  faCheck = faCheck;
  faEllipsisH = faEllipsisH;
  faEdit = faEdit;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faFileAlt = faFileAlt;
  

  constructor() { }

  ngOnInit(): void {
  }

}
