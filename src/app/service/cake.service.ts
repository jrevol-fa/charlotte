import { Injectable } from '@angular/core';
import { Cake } from './cake';

@Injectable()
export class CakeService {


  private catalog: Cake[] = [];

  constructor() {
    //backEnd simulation
    for (let i = 0; i < 2000; i++) {
      this.catalog.push(new Cake(1 + Math.random()));
    }
  }


  getFirstElements( nbCake ): Cake[] {
    return this.catalog.slice(0, nbCake);
  }

}
