// Generators are functions which can be exited and later re-entered. Their
// context (variable bindings) will be saved across re-entrances

// Generators are a type of function (note the * in the following code sample)
// which act as an iterator

// yield is a special keyword which emits a new item from the generator. We can
// use next() to get values from a generator. Once we reach the end of the
// iterator, the returned object will contain done: true. Any data type can be
// yielded, including functions, numbers, arrays, and objects.

function* HelloGen() {
  let a = yield 100;
  let b = yield a + 100;
  console.log(b);
}

let gen = HelloGen();

console.log(gen.next()); // {value: 100, done: false}
console.log(gen.next(500)); // {value: 400, done: false}
console.log(gen.next(1000)); // {value: undefined, done: true}
