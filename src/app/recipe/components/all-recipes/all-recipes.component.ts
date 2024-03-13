import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../../recipe';
import { Router } from '@angular/router';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
@Component({
  selector: 'app-all-recipes',
  // standalone: true,
  // imports: [],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent implements OnInit {
  allRecipes!: Recipe[];
  constructor(private _recipeServise: RecipeService, private _router: Router) { }
  ngOnInit(): void {
    this._recipeServise.getAllRecipesFromServer().subscribe({
      next: (res) => {
        this.allRecipes = res;
        console.log(this.allRecipes)
      
       
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
 
}
