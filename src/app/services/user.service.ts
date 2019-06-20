import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {urlEnvironment} from '../constants/url'

const user_url=urlEnvironment.DB_URL;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public GetUserWithEmailAndPassword(email:string,password:string):Observable<User>{
    return this.http.get<User>(`${user_url}/users?email=${email}&password=${password}`);
   }

   public userRegistration(user:User):Observable<User>{
     return this.http.post<User>(`${user_url}/users`,user);
   }

}
