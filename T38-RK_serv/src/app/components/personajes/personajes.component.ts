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
  @Input() character:any;
  charac: any = null;
  personajes: any = null;

  constructor(private http:HttpClient,private router:Router, private CharById:ListCharByIdService ) {}
//Get data while program starts
  ngOnInit():void {

    this.http.get("https://rickandmortyapi.com/api/character").subscribe(results =>{this.charac = results; console.log(results)});
  }

  redMre(id:any){  this.charac = this.CharById.detlChar(id); console.log(id);
  }


}
