// symbol
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

console.log(typeof sym1); // symbol
console.log(sym1.toString()); // Symbol(foo)
console.log(sym1 === sym2); // false
