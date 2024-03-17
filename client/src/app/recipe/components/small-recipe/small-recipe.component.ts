
import { Component, OnInit, Input, input } from '@angular/core';
import { Recipe } from '../../../recipe';
import { Router } from '@angular/router';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import Swal from 'sweetalert2';





// import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-small-recipe',
  // standalone: true,
  // imports: [MatCardModule],
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent  {
  @Input() smallRecipe!: Recipe
  constructor(private router: Router) { }
  


  recipeDateail() {
    const keys = Object.keys(sessionStorage);
    if(keys.length>0){
    if (this.smallRecipe) {
      this.router.navigate(["recipe/recipe-details", this.smallRecipe.recipeId]);
    } else {
      
      console.error("הנתונים של smallRecipe חסרים. לא ניתן לנווט לפרטי המתכון.");
    }
  }else{
    this.router.navigate(['/register'])
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    toast.fire({
      icon: 'error',
      title: 'You are taken to register for the site',
    });
  }
    
  }
  
}




