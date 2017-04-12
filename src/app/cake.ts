export class Cake {

  constructor( public size: number, public type: CakeKind ) {
  }
}

export type CakeKind = 'charlotte'|'crumble'|'parisbrest';
