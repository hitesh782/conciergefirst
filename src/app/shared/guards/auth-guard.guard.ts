import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.authService.isAuthenticated()) {
    //   console.log('user is authenticaed in authguard');
    //   this.authService.handleAuthentication();
    //   return true;
    // } else {
    //   console.log('inside else condition in authguard');
    //   this.authService.login();
    //   this.authService.handleAuthentication();
    //   // this.router.navigate(['/login']);
    //   return false;
    // }

    console.log(route, state);

    return true;
  }

}
