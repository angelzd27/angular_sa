import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
  private access = true

  constructor(
    private router: Router
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.access)
      return true

    this.router.navigate(['login'], {
      queryParams:{
        return: state.url
      }
    })
    return false
  }
}
