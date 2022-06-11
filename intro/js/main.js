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
