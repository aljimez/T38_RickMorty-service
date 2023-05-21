import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  charac: any = null;
  personajes: any = null;

  constructor(private http:HttpClient,private router:Router ) {}
//Get data while program starts
  ngOnInit():void {
   this.http.get("https://rickandmortyapi.com/api/character").subscribe(results =>{this.charac = results;});
  }

//Show data by id
  redMre(id:number){
    this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
