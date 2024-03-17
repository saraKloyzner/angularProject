import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getCategories(): import("../category").Category[] | undefined {
    throw new Error('Method not implemented.');
  }
  public baseUrl = 'https://localhost:7100/api/Recipe'

  constructor(private http: HttpClient) { }

  getAllRecipesFromServer(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }
  editRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/${id}`, recipe);
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`)
  }
  deleteById(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
