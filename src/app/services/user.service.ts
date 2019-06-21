import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {urlEnvironment} from '../constants/url'

const users_url=urlEnvironment.USERS_URL;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public GetUserWithEmailAndPassword(email:string,password:string):Observable<User>{
    return this.http.get<User>(`${users_url}?email=${email}&password=${password}`);
   }

   public userRegistration(user:User):Observable<User>{
     return this.http.post<User>(`${users_url}`,user);
   }

   public GetUserById(id:number):Observable<User>{
    return this.http.get<User>(`${users_url}?id=${id}`);
   }

   public updateUser(user:User):Observable<User>{
   return this.http.put<User>(`${users_url}/${user.id}`,user,httpOptions);
  }
}
