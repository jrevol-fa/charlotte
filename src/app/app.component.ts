import { Component } from '@angular/core';
import { CakeService } from './cake/cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Charlotte';

  list: any[] = [];


  constructor( public cakeService: CakeService ) {
  }

  update( nbCake ) {
    this.list = this.cakeService.getFirstElements(nbCake);
  }


  //TODO  faire un système de répétition d'image avec un nombre en input

  //TODO on passer par un service qui récupère des charlotte (du serveur) ayant une taille fixe

  //TODO ajouter un system de taille de charlotte style.width.px

  //TODO ajouter des types de gateaux charlotte => gateau  (générique)

}
