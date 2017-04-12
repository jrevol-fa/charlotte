import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charlotte';

  list: any[] = [];



  update(nbCake){
    this.list=[];
    for (let i = 0; i < nbCake; i++) {
      this.list.push({});
    }

  }

  //TODO  faire un système de répétition d'image avec un nombre en input

  //TODO on passer par un service qui récupère des charlotte (du serveur) ayant une taille fixe

  //TODO ajouter un system de taille de charlotte style.width.px

  //TODO ajouter des types de gateaux charlotte => gateau  (générique)

}
