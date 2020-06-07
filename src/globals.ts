import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
	currentUser: any = {};
	currentYear: any;
    constructor() {
    	this.currentUser = JSON.parse(localStorage.getItem('user'));
		this.currentYear = new Date();
    }

    //This is a duplicate of the constructor above.
    //It fixes issues where a component is loaded without refreshing a page.
    reset() {
    	this.currentUser = JSON.parse(localStorage.getItem('user'));
		this.currentYear = new Date();
    }
}
