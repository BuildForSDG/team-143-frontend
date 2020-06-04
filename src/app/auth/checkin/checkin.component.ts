import { Component, OnInit } from "@angular/core";

import { faCogs } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "app-checkin",
  templateUrl: "./checkin.component.html",
  styleUrls:  ["./checkin.component.css"]
})
export class CheckinComponent implements OnInit {
faCogs = faCogs;

  constructor() { }

  ngOnInit(): void {

  }

}