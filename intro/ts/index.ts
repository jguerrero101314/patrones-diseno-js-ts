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

// interface
interface Product {
  price: number;
  getPrice(): string;
}

// Herencia
class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return 'El precio del alcohol es de: $ ' + this.price;
  }

  info(): string {
    return super.info() + ' ' + this.alcohol;
  }
}

// implementacion de interface
class Snack implements Product {
  price: number;
  name: string;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return 'El precio del snack es de: $ ' + this.price;
  }
}

const beer = new Beer('erdinger ', 8.5, 100);
console.log(beer.info());
const products: Product[] = [
  new Beer('corona', 4.6, 1),
  new Snack('papas', 4.6),
  new Beer('heineken', 5, 1.3),
];

function getPrice(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrice(products);
