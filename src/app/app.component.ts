import { Component, OnInit } from '@angular/core';
import { Cake } from './cake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Charlotte';

  cakeList: any[] = [];


  private catalog: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 50; i++) {
      this.catalog.push(new Cake(1 + Math.random(),'charlotte'));
      this.catalog.push(new Cake(1 + Math.random(),'crumble'));
      this.catalog.push(new Cake(1 + Math.random(),'parisbrest'));
    }
    console.log(this.catalog)
  }


  update( nbCake: number ) {
    this.cakeList = [];
    this.cakeList = this.catalog.slice(0, nbCake)
  }

  //TODO ajouter des types de gateaux charlotte => gateau  (générique)

}
