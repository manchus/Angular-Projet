import { Component, OnInit } from '@angular/core';
import { FriandisesService } from './../friandises.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  statusAdministration: boolean = true;

  titre:String="Les belles friandises";

  constructor() { }

  clickEvent(){
    this.statusAdministration = !this.statusAdministration;

    console.log(this.statusAdministration);
}

  ngOnInit(): void {
  }

}
