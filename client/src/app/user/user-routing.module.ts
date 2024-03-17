
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


const USER_ROUTES: Route[] = [
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  {path : 'all-recipes',loadComponent:()=>import('../recipe/components/all-recipes/all-recipes.component').then(c=>c.AllRecipesComponent)}


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(USER_ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
