import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const url="http://localhost:3000/publications"  //url treba u posebnom envirementu da bude

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

}
