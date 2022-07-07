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
console.log('***************************************************');

class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays('en');
const weekDays2 = new WeekDays();

console.log('weekDays: ', weekDays.getDays());
console.log('weekDays2: ', weekDays2.getDays());
console.log('***************************************************');
