// 17_Spread_Rest.js


// spread 연산자, let/const x = 블라블라 -> ...x 이렇게 사용할 수 있다.
let slime = {
  name: '슬라임'
};
let cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};
let purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};
console.log(slime); // { name: '슬라임' }
console.log(cuteSlime); // { name: '슬라임', attribute: 'cute' }
console.log(purpleCuteSlime); // { name: '슬라임', attribute: 'cute', color: 'purple' }


let slime2 = {
  name: '슬라임'
};
let cuteSlime2 = {
  ...slime,
  attribute: 'cute'
};
let purpleCuteSlime2 = {
  ...cuteSlime,
  color: 'purple'
};
console.log(slime2); // { name: '슬라임' }
console.log(cuteSlime2); // { name: '슬라임', attribute: 'cute' }
console.log(purpleCuteSlime2); // { name: '슬라임', attribute: 'cute', color: 'purple' }


// 배열에서 spread 연산자(...) 사용하기
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals); // [ '개', '고양이', '참새' ]
console.log(anotherAnimals); // [ '개', '고양이', '참새', '비둘기' ]


// 객체에서의 rest
const { color, ...rest1 } = purpleCuteSlime;
console.log(color); // purple
console.log(rest1); // { name: '슬라임', attribute: 'cute' }

const { attribute, ...rest2 } = cuteSlime;
console.log(attribute); // cute
console.log(rest2); // { name: '슬라임' }


// 배열에서의 rest
const numbers = [1, 2, 3, 4, 5, 6];
const [one, ...rest3] = numbers;

console.log(one); // 1
console.log(rest3); // [ 2, 3, 4, 5, 6 ]


// 함수에서의 rest
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21
// 함수의 파마리터 개수를 정하지 않고 rest 함수를 사용할 수 있다.
function sum2(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const result2 = sum2(1, 2, 3, 4, 5, 6);
console.log(result2); // 21
// 이렇게도 사용이 가능하다.
function sum3(...rest4) {
  return rest4.reduce((acc, current) => acc + current, 0);
}
const numbers2 = [1, 2, 3, 4, 5, 6];
const result4 = sum3(...numbers2);
console.log(result4);