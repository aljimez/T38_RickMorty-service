import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCharByIdService {
//Add HttpClientModule to access the api
  constructor(private http:HttpClient) { }

  retrValu(id:any){
    return this.http.get("https://rickandmortyapi.com/api/character/"+id)
  }
}
