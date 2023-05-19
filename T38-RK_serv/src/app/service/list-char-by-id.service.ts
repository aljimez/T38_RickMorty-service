import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCharByIdService {
id: number =0;
  constructor(private http:HttpClient) { }
  retrValu(){
    return this.http.get("https://rickandmortyapi.com/api/character/"+this.id)
  }
}
