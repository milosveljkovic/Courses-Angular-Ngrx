import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {urlEnvironment} from '../constants/url'

const publication_url=urlEnvironment.PUBLICATION_DB_URL

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  constructor(private http:HttpClient) {
    this.http=http;
   }

   public getAllPublications():Observable<Publication[]>{
    return this.http.get<Publication[]>(publication_url);
   }

   public getPublicationById(id:number):Observable<Publication>{
    return this.http.get<Publication>(`${publication_url}/${id}`)
   }

   public postPublication(publication:Publication):Observable<Publication>{
    return this.http.post<Publication>(publication_url,publication)
   }

   public putPublication(publication:Publication):Observable<Publication>{
     return this.http.put<Publication>(`${publication_url}/${publication.id}`,publication,httpOptions)
   }
}
