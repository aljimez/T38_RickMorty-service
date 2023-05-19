import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCharService } from 'src/app/service/list-char.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  charac: any = null;
  charintercambion: any = null;

  constructor(private listcharService:ListCharService,private router:Router ) {}

  ngOnInit():void {
    this.listcharService
      .retValu()
      .subscribe(data => {
        this.charac = data;
        this.charintercambion = this.charac(this.charac.recurso);
      });
  }

  charintercambio(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const element = Math.floor(Math.random() * (i + 1));
      [array[i], array[element]] = [array[element], array[i]];
    }
    return array;
  }
  redMre(id:number){
    this.router.navigate(['/personaje',id]);
  }
}
