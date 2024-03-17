// import { Component, OnInit } from '@angular/core';
// import { RecipeService } from '../../recipe.service';
// import { Recipe } from '../../../recipe';
// import { Router } from '@angular/router';
// import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
// @Component({
//   selector: 'app-all-recipes',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './all-recipes.component.html',
//   styleUrl: './all-recipes.component.scss'
// })
// export class AllRecipesComponent implements OnInit {
//   allRecipes!: Recipe[];
//   constructor(private _recipeServise: RecipeService, private _router: Router) { }
//   ngOnInit(): void {
//     this._recipeServise.getAllRecipesFromServer().subscribe({
//       next: (res) => {
//         this.allRecipes = res;
//         console.log(this.allRecipes)
      
       
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     })

//   }
 
// }





import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../../recipe';
import { Router } from '@angular/router';
import { CategoryService } from '../../../categories/category.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  typingTimer: any;
  tmpTime: any;
  numberControl = new FormControl();
  
  allRecipes!: Recipe[];
  filteredRecipes!: Recipe[];
  filterName: string = '';
  filterCategory: any;
  filterPreparationTime: number | null = null;
  selectedCategory: any;

  constructor(private _recipeService: RecipeService, private _router: Router, private _categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.numberControl.valueChanges.pipe(
      debounceTime(1000) // Wait for 1 second after the last value change
    ).subscribe(value => {
      this.prepTimer(value);
    });

    this.getCategories();
    this._recipeService.getAllRecipesFromServer().subscribe({
      next: (res) => {
        this.allRecipes = res;
        this.filteredRecipes = [...this.allRecipes]; // Initialize filteredRecipes with all recipes
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private getCategories(): void {
    this._categoriesService.getCategories().subscribe(categories => {
      this.filterCategory = categories;
    });
  }

  applyFilters(): void {
    this.filteredRecipes = this.allRecipes.filter(recipe => {
      let passName = true;
      let passCategory = true;
      let passPrepTime = true;

      if (this.filterName !== '') {
        passName = recipe.recipeName.toLowerCase().includes(this.filterName.toLowerCase());
      }

      if (this.selectedCategory) {
        passCategory = recipe.categoryId === this.selectedCategory;
      }

      if (this.filterPreparationTime !== null) {
        passPrepTime = recipe.preparationTimeInMinutes === this.filterPreparationTime;
      }

      return passName && passCategory && passPrepTime;
    });
  }

  prepTimer(value: number) {
    this.filterPreparationTime = value;
    console.log('Function X called with value:', value);
    this.applyFilters();
  }

}

