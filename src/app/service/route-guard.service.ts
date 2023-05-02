import { Injectable, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterConfigurationFeature, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private router:Router) { }

   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

   if(this.hardcodedAuthenticationService.isUserLoggedIn())
    return true;

    this.router.navigate(['login']);
    return false;
}
}
