import { Component } from '@angular/core';
import { CakeService } from './cake/cake.service';
import { Cake } from './cake/cake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Johanna';

  cakeList: Cake[] = [];

  constructor( public cakeService: CakeService ) {
  }

  update( nbCake ) {
    this.cakeList = this.cakeService.getFirstElements(nbCake);
  }


  //TODO corriger le titre de la page et lancer les tests unitaires

  //TODO afficher le gateau en fonction de sa taille

  //TODO afficher le type de gateau

  //TODO rajouter une mention "sélectionné pour vous" en fonction du tye de gateau et de la taille

}
