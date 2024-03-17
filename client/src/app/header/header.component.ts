import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AllRecipesComponent } from '../recipe/components/all-recipes/all-recipes.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  allRecipes() {
    this.router.navigate(['recipe/all-recipes']);
  }
  home(){
    this.router.navigate(['/home'])
  }
  Logout(){
    this.router.navigate(['/logout'])
  }
  Login(){
    this.router.navigate(['/login'])
  }
  Register(){
    this.router.navigate(['/register'])
  }
  AddRecipe(){
    this.router.navigate(['/recipe/add-recipe'])
  }
}
