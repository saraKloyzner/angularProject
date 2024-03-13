// import { CanActivateFn } from '@angular/router';

// export const recipeGuard: CanActivateFn = (route, state) => {
  
  
  
//   return true;
// };
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class recipeGuard implements CanActivate {

  constructor(private router: Router,private _recipe:RecipeService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = route.params['id'];
    // בדוק אם המוצר קיים
    if (!this._recipe.getRecipeById(id)) {
      // אם לא, הפנה חזרה לעמוד "כל המתכונים"
      this.router.navigate(['/all-recipes']);
      return false;
    }
    return true;
  }
}
