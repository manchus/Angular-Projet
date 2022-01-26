import { FriandisesService } from './../friandises.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { friandises } from './../models/modelBD';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friandisesList$:Observable<friandises[]>;

  constructor(private friandisesService:FriandisesService) { }

  ngOnInit(): void {
    this.friandisesList$ = this.friandisesService.Friandises();

    console.log(this.friandisesList$);
  }

}

