export class Cake {

  constructor( public size: number, public kind?: KindOfCake ) {
  }

  getUrl(): string {
    return `/assets/${this.kind}.jpg`;
  }
}

export type KindOfCake = 'charlotte' | 'crumble' | 'parisbrest';
