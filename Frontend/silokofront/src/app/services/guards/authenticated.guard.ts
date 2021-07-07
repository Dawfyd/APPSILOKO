import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(`Accediendo a la ruta ${state.url}`);
    return this.auth.isAuthenticated()
      .pipe(
        tap((isAuthenticated) => {
          if (!isAuthenticated) {
            console.log(`Ruta ${state.url} denegada, redireccionando a login ...`);
            return this.router.navigateByUrl('/login');
          }
          console.log(`Ruta ${state.url} accesible`);
        })
      );
  }
}