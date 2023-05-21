import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCharByIdService } from 'src/app/service/list-char-by-id.service';
@Component({
  selector: 'app-charac-by-id',
  templateUrl: './charac-by-id.component.html',
  styleUrls: ['./charac-by-id.component.css']
})
export class CharacByIdComponent implements OnInit{
id: number =0;
character: any = null;

constructor(private route: ActivatedRoute, private charById:ListCharByIdService,private router: Router){}
//Launches while program starts
  ngOnInit():void {
    this.route.params
      .subscribe(params => {
        console.log(this.id);

        this.charById.retrValu(this.id).subscribe(params => {
          this.character = params;
        });
      });
  }

  goBack(){
    this.router.navigate(['/personajes']);
  }
}
