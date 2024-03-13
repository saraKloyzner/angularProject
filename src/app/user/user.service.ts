import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://localhost:7100/api/User'

  constructor(private http: HttpClient) { }

  getUserByName(name:string):Observable<User>{

    return this.http.get<User>(`${this.baseUrl}/${name}`)
  
  }

  // addUser(user: User): Observable<User> {  // שינוי להחזר User יחיד
  //    return this.http.post<User>(this.baseUrl, user);
  //   // return this.http.post<User>(`${this.baseUrl}`)
  // }
  addUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.baseUrl, JSON.stringify(user), { headers });
  }
  
}
