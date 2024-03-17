import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public baseUrl = 'https://localhost:7100/api/Category'

  constructor(private http:HttpClient) { }
  getCategories():Observable<Category[]>
{
  return this.http.get<Category[]>(this.baseUrl);
}
getCategoryById(id:number):Observable<Category>{
  return this.http.get<Category>(`${this.baseUrl}/${id}`)
}
}
