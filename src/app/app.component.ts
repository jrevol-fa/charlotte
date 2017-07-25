import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake/cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = 'Charlotte';

  initialNbCake = 10;
  list: any[] = [];

  constructor( public cakeService: CakeService ) {
  }


  ngOnInit(): void {
    this.update(this.initialNbCake)
  }

  update( nbCake ) {
    this.list = this.cakeService.getFirstElements(nbCake);
  }


  //TODO corriger le titre de la page et lancer les tests unitaires

  //TODO afficher le gateau en fonction de sa taille

  //TODO afficher le type de gateau

  //TODO rajouter une mention "sélectionné pour vous" en fonction du tye de gateau et de la taille

}
