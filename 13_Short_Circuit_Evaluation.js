// 13_Short_Circuit_Evaluation.js


// 단축 평가 논리 계산법 1
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal.name;
}

let dog_name = getName(dog);
console.log(dog_name); // 멍멍이
/* output
멍멍이
*/

// getName()의 파라미터가 주어지지 않았을 때 undefined 를 반환하도록 한다.
function getName2(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

dog_name = getName2(dog);
console.log(dog_name);
dog_name = getName2();
console.log(dog_name);
/* output
멍멍이
undefined
*/

// && 연산자로 getName2() 단축시키기
function getName3(animal) {
  return animal && animal.name;
}

dog_name = getName3(dog);
console.log(dog_name);
dog_name = getName3();
console.log(dog_name);/* output
멍멍이
undefined
*/

// 단축 평가 논리 계산법 2
const namelessDog = {
  name: ''
};

function getName4(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다,';
  }
  return name;
}
/* output
이름이 없는 동물입니다.
*/

let dog_nameless = getName4(namelessDog);
console.log(dog_nameless);

// || 연산자로 getName4() 단축시키기
function getName5(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

dog_nameless = getName5(namelessDog);
console.log(dog_nameless);
/* output
이름이 없는 동물입니다.
*/
