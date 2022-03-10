import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.hasUser()){
      return true;
    }
    //Redirect Login
    alert('You don`t have permissions')
    return false;
  }
  
  hasUser(): boolean{
    return false;
  }
}
