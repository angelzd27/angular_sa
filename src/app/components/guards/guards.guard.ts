import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
  private access = true

  constructor(
    private router: Router
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (localStorage.getItem('token') === 'true'){
      console.log('Con access')
      return true
    }

    console.log('redireccionando')
    this.router.navigate(['/login'], {
      queryParams:{
        return: state.url
      }
    })
    return false
  }
}
