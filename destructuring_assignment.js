// let a, b, other;
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

[a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(other); // [3, 4, 5]
