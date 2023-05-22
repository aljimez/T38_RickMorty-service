import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCharByIdService } from 'src/app/service/list-char-by-id.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {

  characters: any = null;
  personajes: any = null;

  constructor(private http:HttpClient, private CharById:ListCharByIdService ) {}
//Get data while program starts
  ngOnInit():void {

    this.http.get("https://rickandmortyapi.com/api/character").subscribe(results =>{this.characters = results; console.log(results)});
  }

  redMre(id:any){
    this.characters = this.CharById.detlChar(id); console.log(id);
  }


}
