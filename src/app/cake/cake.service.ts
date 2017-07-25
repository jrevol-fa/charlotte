import { Injectable } from '@angular/core';
import { Cake } from './cake';

@Injectable()
export class CakeService {


  private catalog: Cake[] = [];

  constructor() {
    //backEnd simulation
    for (let i = 0; i < 2000; i++) {
      let randomValue = Math.random();
      const third = 0.33;
      const twoThird = 0.66;
      if (randomValue < third) {
        this.catalog.push(new Cake(1 + randomValue, 'charlotte'));
      } else if (randomValue < twoThird) {
        this.catalog.push(new Cake(1 + randomValue, 'crumble'));
      } else {
        this.catalog.push(new Cake(1 + randomValue, 'parisbrest'));
      }

    }
  }


  getFirstElements( nbCake ): Cake[] {
    return this.catalog.slice(0, nbCake);
  }

}
