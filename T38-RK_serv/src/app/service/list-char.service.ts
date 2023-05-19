import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCharService {

  constructor(private http:HttpClient) { }

  retValu(){
    return this.http.get("https://rickandmortyapi.com/api/character/");
  }
}
