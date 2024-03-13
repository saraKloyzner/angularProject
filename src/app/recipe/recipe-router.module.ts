import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { recipeGuard } from './recipe.guard';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
const RECIPE_ROUTES: Route[] = [

 { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: 'all-recipes',  component:AllRecipesComponent },
 //{ path: 'recipe-details/:id', component: SmallRecipeComponent, canActivate: [recipeGuard] },
 // { path: 'add-recipe', loadComponent: () => import('./components/add-recipe/add-recipe.component').then(c => c.AddRecipeComponent) },
 { path: 'edit-recipe/:id', component:EditRecipeComponent },
 { path: 'recipe-details/:id', component:RecipeDetailsComponent },
  { path: 'add-recipe', component:AddRecipeComponent },
 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(RECIPE_ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RecipeRouterModule { }