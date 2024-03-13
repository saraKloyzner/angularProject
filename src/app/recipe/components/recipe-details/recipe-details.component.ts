
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { DifficultyLevelPipe } from '../../difficulty-level.pipe';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../categories/category.service';
import { Category } from '../../../category';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'] // שימוש ב-styleUrls
})
export class RecipeDetailsComponent implements OnInit {
  public recipe!: Recipe;
  public recipeId!: number;
  public category!: Category;
  public isVeteranUser: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _recipeServise: RecipeService,
    private router: Router,
    private _categoryService: CategoryService,

  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe((param) => {
  //     this.recipeId = param['id'];

  //     // const entries = Object.entries(sessionStorage)
  //     // console.log("value--------",entries)
  //     // if(entries.length!==0){
  //     this._recipeServise.getRecipeById(this.recipeId).subscribe({
  //       next: (res) => {

  //         this.recipe = res;
  //         this._categoryService.getCategoryById(this.recipe.categoryId).subscribe({
  //           next: (cat) => {
  //             this.category = cat;
  //             console.log(this.category)
  //           },
  //           error: (errCat) => {
  //             console.log(errCat)
  //           }
  //         })
  //         console.log(this.recipe)
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     });

  //     // else{
  //     // this.router.navigate(['/register']);
  //     // const toast = Swal.mixin({
  //     //   toast: true,
  //     //   position: 'top-end',
  //     //   showConfirmButton: false,
  //     //   timer: 3000,
  //     //   timerProgressBar: true,
  //     // });
  //     // toast.fire({
  //     //   icon: 'error',
  //     //   title: 'You are not registered! You are transferred to registration!',
  //     // });
  //     // }
  //   });
  //   if (sessionStorage.getItem(this.recipe.userId.toString()) !== null)
  //     this.IsVeteranUser = true;



  // }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      this._recipeServise.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipe = res;
          this._categoryService.getCategoryById(this.recipe.categoryId).subscribe({
            next: (cat) => {
              this.category = cat;
              console.log(this.category)
            },
            error: (errCat) => {
              console.log(errCat)
            }
          });
          console.log(this.recipe);
  
          // בדיקה והגדרת ערך של IsVeteranUser לפי הנתונים מהשרת
          if (sessionStorage.getItem(this.recipe.userId.toString()) !== null) {
            this.isVeteranUser = true;
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }
  
  editRecipe(){
    this.router.navigate(['/recipe/edit-recipe', this.recipe.recipeId]);
    this.isVeteranUser=false;
  }
  deleteRecipe(){
    this._recipeServise.deleteById(this.recipe.recipeId).subscribe({
      next:(del)=>{
        this.isVeteranUser=false;
        console.log("the recipe delete",del)
      },
      error:(delerr)=>{
        console.log("the recipe no delete",delerr)
      }
    })
  }

}

