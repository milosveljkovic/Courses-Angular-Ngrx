import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const url="http://localhost:3000/publications"  //url treba u posebnom envirementu da bude

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
    return this.http.get<Publication[]>(url);
   }

   public getPublicationById(id:number):Observable<Publication>{
    return this.http.get<Publication>(`${url}/${id}`)
   }

   public postPublication(publication:Publication):Observable<Publication>{
    return this.http.post<Publication>(url,publication)
   }

   public putPublication(publication:Publication):Observable<Publication>{
     return this.http.put<Publication>(`${url}/${publication.id}`,publication,httpOptions)
   }
}
