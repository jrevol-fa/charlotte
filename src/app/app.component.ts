import { Component, OnInit } from '@angular/core';

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
    for (let i = 0; i < 50; i++) {
      this.catalog.push({size:1+Math.random()});
    }
  }


  update( nbCake ) {
    this.list = [];
    this.list= this.catalog.slice(0,nbCake)
  }

  //TODO ajouter des types de gateaux charlotte => gateau  (générique)

}
