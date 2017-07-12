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


  //TODO corriger le titre de la page

  //TODO afficher le gateau en fonction de sa taille

  //TODO afficher le type de gateau

  //TODO rajouter une mention "sélectionné pour vous" en fonction du tye de gateau et de la taille

}
