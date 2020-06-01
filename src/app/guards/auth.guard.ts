// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute,NavigationEnd } from '@angular/router';
// import {filter} from 'rxjs/operators';
import { AuthService } from "../services";
import {Observable, Observer} from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private route:ActivatedRoute, private authService: AuthService) { }
    canActivate(): boolean  {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if(currentUser){
            this.router.navigate(["checkin"]);
            return false;
        }else{
            return true;
        }
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class RevenueAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class LandRegistryAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class LandOwnerAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }
    //add check role
    canActivate(): Observable<boolean>  {
        return Observable.create((observer: Observer<boolean>) => {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if(currentUser){
                var canAccess = false;
                this.authService.getUserByAccessToken(currentUser._id, currentUser.accessToken)
                  .subscribe(
                    response => {
                      if(response){
                        observer.next(true)
                        observer.complete()
                      }else{
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        observer.next(false)
                        observer.complete()
                      }
                    },
                    error => {
                        localStorage.removeItem('user');
                        this.router.navigate(["login"]);
                        canAccess =  false;
                        observer.next(false)
                    },

                  );
            }else{
                localStorage.removeItem('user');
                this.router.navigate(["login"]);
                observer.next(false)
                observer.complete()
            }
        })
    }
}

