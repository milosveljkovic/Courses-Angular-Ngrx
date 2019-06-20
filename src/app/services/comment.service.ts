import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {myComment} from '../models/MyComment'
import { urlEnvironment } from '../constants/url'

const comments_url=urlEnvironment.COMMENTS_DB_URL;

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllComments():Observable<myComment[]>{
    return this.http.get<myComment[]>(comments_url);
   }

    postComment(comment:myComment):Observable<myComment>{
      console.log(comment);
     return this.http.post<myComment>(comments_url,comment)
   }

}
