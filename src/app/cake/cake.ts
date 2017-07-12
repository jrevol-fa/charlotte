export class Cake {

  constructor( public size: Number, public kind: CakeKind ) {
  }
}

export type CakeKind = 'charlotte' | 'crumble' | 'parisbrest';
