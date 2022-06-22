// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(2, 3));

// TODO: funciones de primer orden
function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// TODO: funciones de orden superior

function operation(fn, a, b) {
  console.log('se hace algo');
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// TODO: arrow function

let fA1 = function () {
  console.log('algo 1');
};

let fA2 = () => {
  console.log('algo 2');
};

let fA3 = () => console.log('algo 3');
fA1();
operation((a, b) => a * b, 1, 20);
operation(
  (a, b) => {
    const c = a + b;
    return c * 2;
  },
  1,
  2
);

//Array, mutabilidad e inmutabilidad
const names = ['Joel', 'Juan', 'Jose', 'Ana'];
names.forEach((name) => console.log(name)); // inmutable
names.forEach((name) => console.log(name.toUpperCase())); // inmutable
console.log('names: ', names);

names.sort(); // Mutable
console.log('names: ', names);

// map imprime un objeto nuevo
const namesUpper = names.map((name) => name.toUpperCase());
console.log('namesUpper MAP: ', namesUpper);
console.log('names Original: ', names);

// reduce retorna acumulados
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((ac, number) => ac + number, 10);
console.log('total: ', total);
