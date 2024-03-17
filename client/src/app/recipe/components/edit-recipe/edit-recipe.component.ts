


// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Recipe } from '../../../recipe'; // Assuming your recipe model interface
// import { RecipeService } from '../../recipe.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MdbCheckboxChange } from 'mdb-angular-ui-kit/checkbox';
// import { MdbCheckboxDirective } from 'mdb-angular-ui-kit/checkbox';

// // import '../../assets/mine.jpg'
// @Component({
//   selector: 'app-edit-recipe',
//   templateUrl: './edit-recipe.component.html',
//   styleUrls: ['./edit-recipe.component.scss']
// })
// export class EditRecipeComponent implements OnInit {
//   clearSelection() {
//     throw new Error('Method not implemented.');
//   }
//   addIngredient() {
//     throw new Error('Method not implemented.');
//   }

//   recipeId!: number;
//   recipeForm!: FormGroup;
//   isLoading = false;
//   submitted = false;

//   constructor(
//     private router: Router,
//     private recipeService: RecipeService,
//     private formBuilder: FormBuilder,
//     private snackBar: MatSnackBar,
//     private route: ActivatedRoute,
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.recipeId = +params['id'];
//       this.getRecipeById();
//     });
//     this.initializeForm();
//   }

//   getRecipeById(): void {
//     this.isLoading = true;
//     this.recipeService.getRecipeById(this.recipeId)
//       .subscribe(
//         recipe => {
//           this.isLoading = false;
//           this.patchFormValues(recipe);
//         },
//         error => {
//           this.isLoading = false;
//           this.handleError(error);
//         }
//       );
//   }

//   initializeForm(): void {
//     this.recipeForm = this.formBuilder.group({
//       recipeName: ['', Validators.required],
//       categoryId: ['', Validators.required],
//       preparationTimeInMinutes: ['', Validators.required],
//       difficultyLevel: ['', Validators.required],
//       // ingredients: this.formBuilder.array([]), // Assuming an array of form controls for ingredients
//       // instructions: this.formBuilder.array([]),  // Assuming an array of form controls for instructions
//       ingredients: ['', Validators.required],
//       instructions: ['', Validators.required],
//       dateAdded: Date,
//       userId: ['1'],
//    //   imagePath: ['', Validators.required],
  
//       // ... other form controls based on your recipe data model
//     });
//   }
//   patchFormValues(recipe: Recipe): void {
//     this.recipeForm.patchValue({
//       recipeName: recipe.recipeName,
//       categoryId: recipe.categoryId,
//       preparationTimeInMinutes: recipe.preparationTimeInMinutes,
//       difficultyLevel: recipe.difficultyLevel,
//       ingredients: recipe.ingredients.join(','),
//       instructions: recipe.instructions.join(','),
//       // Set values for other form controls based on recipe data
//     });
//   }

//   onSubmit(): void {
//     this.submitted = true;

//     // if (this.recipeForm.invalid) {
//     //   return; // Prevent submission if form is invalid
//     // }

//     // Create a copy of the form value to avoid modifying the original
//     const formData = { ...this.recipeForm.value };
//     // Split the instructions string into an array based on comma separators
//     formData.instructions = formData.instructions.split(',');
//     formData.ingredients = formData.ingredients.split(',');
//     // Restrict unnecessary type assertion (if 'Recipe' interface matches form structure)
//     const editedRecipe: Recipe = formData; // Assuming 'Recipe' interface matches form structure
//     console.log(editedRecipe);
//     //const editedRecipe = this.recipeForm.value as Recipe;
//     // editedRecipe.recipeId = this.recipeId;
//     this.isLoading = true;
//     this.recipeService.editRecipe(this.recipeId, editedRecipe)
//       .subscribe(
//         () => {
//           this.isLoading = false;
//           this.handleSuccess();
//         },
//         error => {
//           this.isLoading = false;
//           this.handleError(error);
//         }
//       );
//   }
//   handleSuccess(): void {
//     this.snackBar.open('Recipe edited successfully!', '', {
//       duration: 3000,
//       horizontalPosition: 'center',
//       verticalPosition: 'top'
//     });
//     this.router.navigate(['/recipe']);
//   }

//   handleError(error: any): void {
//     console.error(error);
//     this.snackBar.open('An error occurred. Please try again.', '', {
//       duration: 3000,
//       horizontalPosition: 'center',
//       verticalPosition: 'top'
//     });
//   }

//   onCancel(): void {
//     this.router.navigate(['/recipe']);
//   }
// }






import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recipe } from '../../../recipe'; // Assuming your recipe model interface
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbCheckboxChange } from 'mdb-angular-ui-kit/checkbox';
import { MdbCheckboxDirective } from 'mdb-angular-ui-kit/checkbox';

// import '../../assets/mine.jpg'
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  clearSelection() {
    throw new Error('Method not implemented.');
  }
  addIngredient() {
    throw new Error('Method not implemented.');
  }

  recipeId!: number;
  recipeForm!: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = +params['id'];
      this.getRecipeById();
    });
    this.initializeForm();
  }

  getRecipeById(): void {
    this.isLoading = true;
    this.recipeService.getRecipeById(this.recipeId)
      .subscribe(
        recipe => {
          this.isLoading = false;
          this.patchFormValues(recipe);
        },
        error => {
          this.isLoading = false;
          this.handleError(error);
        }
      );
  }

  initializeForm(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categoryId: ['', Validators.required],
      preparationTimeInMinutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      // ingredients: this.formBuilder.array([]), // Assuming an array of form controls for ingredients
      // instructions: this.formBuilder.array([]),  // Assuming an array of form controls for instructions
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      dateAdded: Date,
      userId: ['1'],
      imagePath:['']
   //   imagePath: ['', Validators.required],
  
      // ... other form controls based on your recipe data model
    });
  }
  patchFormValues(recipe: Recipe): void {
    this.recipeForm.patchValue({
      recipeName: recipe.recipeName,
      categoryId: recipe.categoryId,
      preparationTimeInMinutes: recipe.preparationTimeInMinutes,
      difficultyLevel: recipe.difficultyLevel,
      ingredients: recipe.ingredients.join(','),
      instructions: recipe.instructions.join(','),
      imagePath:recipe.imagePath
      // Set values for other form controls based on recipe data
    });
  }

  onSubmit(): void {
    this.submitted = true;

    // if (this.recipeForm.invalid) {
    //   return; // Prevent submission if form is invalid
    // }

    // Create a copy of the form value to avoid modifying the original
    const formData = { ...this.recipeForm.value };
    // Split the instructions string into an array based on comma separators
    formData.instructions = formData.instructions.split(',');
    formData.ingredients = formData.ingredients.split(',');
    // Restrict unnecessary type assertion (if 'Recipe' interface matches form structure)
    const editedRecipe: Recipe = formData; // Assuming 'Recipe' interface matches form structure
    console.log(editedRecipe);
    //const editedRecipe = this.recipeForm.value as Recipe;
    // editedRecipe.recipeId = this.recipeId;
    this.isLoading = true;
    this.recipeService.editRecipe(this.recipeId, editedRecipe)
      .subscribe(
        () => {
          this.isLoading = false;
          this.handleSuccess();
        },
        error => {
          this.isLoading = false;
          this.handleError(error);
        }
      );
  }
  handleSuccess(): void {
    this.snackBar.open('Recipe edited successfully!', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    this.router.navigate(['/recipe']);
  }

  handleError(error: any): void {
    console.error(error);
    this.snackBar.open('An error occurred. Please try again.', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  onCancel(): void {
    this.router.navigate(['/recipe']);
  }
}

