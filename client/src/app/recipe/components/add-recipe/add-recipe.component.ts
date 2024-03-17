import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../category';
import { CategoryService } from '../../../categories/category.service';
import { Recipe } from '../../../recipe';
import { RecipeService } from '../../recipe.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup | any;
  categories: Category[] = [];
  public userId!:string
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private recipeService: RecipeService,
    private _router: Router
   ) { }

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
     
  }

  initForm(): void {
    this.recipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      preparationTimeInMinutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      dateAdded: ['', Validators.required],
      categoryId: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      imagePath:['']
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  // get ingredients(): FormArray {
  //   return this.recipeForm.get('ingredients') as FormArray;
  // }

  addIngredient(): void {
    this.ingredients.push(this.fb.control(''));
    console.log(this.ingredients)
  }  addInstruction(): void {
    this.instructions.push(this.fb.control(''));
    console.log(this.instructions)
  }


  removeInstructions(index: number): void {
    this.instructions.removeAt(index);
  }
  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }
  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  }


  onSubmit(): void {
     
      // RecipeName: '',
      const userIdFromStorage = sessionStorage.getItem("userId");
  

    const recipe: Recipe = {
      recipeName: this.recipeForm.get('recipeName').value,
      categoryId: 1,
      // preparationTimeInMinutes: this.recipeForm.get('preparationTimeInMinutes').value,
      //  difficultyLevel: this.recipeForm.get('difficultyLevel').value,
      preparationTimeInMinutes: this.recipeForm.get('preparationTimeInMinutes').value,
      difficultyLevel: this.recipeForm.get('difficultyLevel').value,

      dateAdded: new Date(),
      // categoryId: this.recipeForm.get('categoryId').value,//להחזיר את זה!!
      ingredients: this.ingredients.value,
      instructions: this.instructions.value,
      userId : userIdFromStorage ? parseInt(userIdFromStorage) : 0,
      // RecipeName: '',
      imagePath: this.recipeForm.get('imagePath').value,
      recipeId: 0
    };

    this.recipeService.addRecipe(recipe).subscribe(() => {
      let timerInterval!: any;

      function closePopup() {
        clearInterval(timerInterval);
        Swal.close();
      }
      
      Swal.fire({
        title: "Adding your new recipe! Thanks!",
        html: "Saving<b></b> ms",
        timer: 500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timerEl = Swal.getPopup()?.querySelector("b");
      
          if (timerEl) {
            timerInterval = setInterval(() => {
              timerEl.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          } else {
            console.error("לא נמצא אלמנט <b> ב-popup");
            closePopup();
          }
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* קרא עוד על טיפול בביטולים למטה */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("נסגרתי על ידי הטיימר");
        }
      });
      
      // הוסף כפתור לסגירה ידנית
      const closeButton = document.createElement("button");
      closeButton.textContent = "סגור";
      closeButton.classList.add("swal2-button", "swal2-button--cancel");
      closeButton.addEventListener("click", closePopup);
      
      Swal.getPopup()?.appendChild(closeButton);
      this._router.navigate(['/recipe'])
      // this.resetForm();
    })
    
}

// resetForm(): void {
//   // Reset form values
//   this.recipeForm.reset();

//   // Clear ingredient and instruction arrays
//   this.ingredients.clear();
//   this.instructions.clear();
// }
  private getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}

