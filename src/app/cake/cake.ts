export class Cake {

  constructor( public size: Number, public kind: CakeKind ) {
  }

  public getImage(): string {
    return `/assets/${this.kind}.jpg`;
  }

  public isFav(): boolean {
    let number = 1.2;
    return this.size > number && this.kind == 'parisbrest';
  }
}

export type CakeKind = 'charlotte' | 'crumble' | 'parisbrest';
