import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RecipeRouterModule } from './recipe-router.module';

import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { DifficultyLevelPipe } from './difficulty-level.pipe';
@NgModule({
  declarations: [
    SmallRecipeComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
    AllRecipesComponent,
    DifficultyLevelPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    RecipeRouterModule,
    SmallRecipeComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
    AllRecipesComponent,DifficultyLevelPipe
  ]
})
export class RecipeModule { }
