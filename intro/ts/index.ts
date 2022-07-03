console.log('Hola Mundo');

class Drink {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drink = new Drink('agua');
console.log(drink.info());

// Herencia

class Beer extends Drink {
  private alcohol: number;

  constructor(name: string, alcohol: number) {
    super(name);
    this.alcohol = alcohol;
  }

  info(): string {
    return super.info() + ' ' + this.alcohol;
  }
}

const beer = new Beer('erdinger ', 8.5);
console.log(beer.info());
