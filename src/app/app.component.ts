import { Component, OnInit } from '@angular/core';
import { Cake } from './cake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Charlotte';

  list: any[] = [];


  private catalog: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.catalog.push(new Cake( 1+Math.random(),'charlotte'));
      this.catalog.push(new Cake( 1+Math.random(),'crumble'));
      this.catalog.push(new Cake( 1+Math.random(),'parisbrest'));
    }
  }


  update( nbCake ) {
    this.list = [];
    this.list = this.catalog.slice(0, nbCake)
  }

  //TODO ajouter des types de gateaux charlotte => gateau  (générique)

}
