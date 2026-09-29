//Найдите сумму всех четных чисел в диапазоне от 1 до 10 включительно.

const d: number = 1;
const b: number = 10;
let sum = 0;

for (let i: number = d; i <= b; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
}

console.log(sum);
