import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {myComment} from '../models/MyComment'


const url="http://localhost:3001/comments"  //url treba u posebnom envirementu da bude

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllComments():Observable<myComment[]>{
    return this.http.get<myComment[]>(url);
   }

    postComment(comment:myComment):Observable<myComment>{
      console.log(comment);
     return this.http.post<myComment>(url,comment)
   }

}
