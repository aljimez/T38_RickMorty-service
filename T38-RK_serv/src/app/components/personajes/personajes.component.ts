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

  ngOnInit():void {
   this.http.get("https://rickandmortyapi.com/api/character").subscribe(results =>{this.charac = results; console.log(results)})
  }


  redMre(id:number){
    this.router.navigate(['/personaje',id]);
  }
}
