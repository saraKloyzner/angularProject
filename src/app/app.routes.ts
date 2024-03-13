import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
   { path: 'register', loadComponent: () => import('./user/components/register/register.component').then(c => c.RegisterComponent) },
   { path: 'login', loadComponent: () => import('./user/components/login/login.component').then(c => c.LoginComponent) },
   { path: 'logout', loadComponent: () => import('./logout/logout.component').then(c => c.LogoutComponent) },
   { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(c => c.RecipeModule) },
   // { path: 'all-recipes', loadComponent: () => import('./recipe/components/all-recipes/all-recipes.component').then(c => c.AllRecipesComponent) },
   //{ path: 'add-recipe', loadChildren: () => import('./recipe/components/add-recipe/add-recipe.component').then(c => c.AddRecipeComponent) },
   { path: '**', loadChildren: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) }
];


