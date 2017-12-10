import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private service:LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (this.service.isUserLoggedIn()) {
       return true; 
    }
    this.service.setRedirectUrl(url.substring(1,url.length));
    this.router.navigate([ 'login' ]);
    return false;
  }

}
