class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    // console.log('entrando a constructor');

    this.random = Math.random();

    if (Singleton.instance) {
      // console.log('ya existe');
      return Singleton.instance;
    }

    // console.log('no existe y se crea');
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
console.log(singleton.random);
const singleton2 = new Singleton();
console.log(singleton2.random);
console.log(singleton === singleton2);
const singleton3 = Singleton.getInstance();
console.log(singleton3.random);
console.log(singleton3 === singleton2);
