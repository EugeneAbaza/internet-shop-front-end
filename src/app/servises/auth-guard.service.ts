import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private service:LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (url != '/dashboard' && this.service.isUserLoggedIn()) {
       return true; 
    } else if(url == '/dashboard' && this.service.isUserLoggedIn() && this.service.isUserAdmin()) {
      return true;
    }
    this.service.setRedirectUrl(url.substring(1,url.length));
    this.router.navigate([ 'login' ]);
    return false;
  }

}
