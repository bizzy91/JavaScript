// forEach, 배열의 원소를 그대로 사용하기
// 08_반목문.js 에서 사용한 ( for ... of 배열 )을 대체할 수 있다.
console.log('---forEach---');
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

superheroes.forEach(hero => {
  console.log(hero);
});

// map, 배열 안의 각 원소를 변환 할 때 사용되며, 이 과정에서 새로운 배열이 만들어진다.
console.log('---map---');
let array = [1, 2, 3, 4, 5, 6, 7, 8];

let squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(squared);

// let squared = array.map(n => n * n);
let square = n => n * n;
squared = array.map(square);
console.log(squared);

// indexOf, 원하는 항목이 몇번째 원소인지 찾아준다.
console.log('---indexOf---');
const index = superheroes.indexOf('토르');
console.log(index);

// findIndex, 원하는 항목이 몇번째 원소인지 찾아준다. indexOf 의 객체 버전
console.log('---findIndex---');
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);

// find, 찾아낸 값 자체를 반환한다.
console.log('---find---');
const todo = todos.find(todo => todo.id === 3);
console.log(todo);

// filter, 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다.
console.log('---filter---');
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

// splice, 배열에서 특정 할목을 제거할 때 사용한다.
console.log('---splice---');
let numbers = [10, 20, 30, 40];
const index3 = numbers.indexOf(30);
numbers.splice(index3, 1);
console.log(numbers);

// slice, 기존 배열을 건드리지 않고 배열에서 특정 할목을 제거할 때 사용한다.
console.log('---slice---');
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지
console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]

// shift, 첫 번째 원소를 추출한다.
console.log('---shift---');
numbers = [10, 20, 30, 40];
let value = numbers.shift();
console.log(value);
console.log(numbers);

// unshift, 배열의 맨 앞에 새 원소를 추가한다.
console.log('---unshift---');
numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);

// pop, 마지막 원소를 추출한다.
console.log('---pop---');
numbers = [10, 20, 30, 40];
value = numbers.pop();
console.log(value);
console.log(numbers);

// push, 마지막 원소를 추가한다.
console.log('---push---');
numbers = [10, 20, 30, 40];
value = numbers.push(5);
console.log(value);
console.log(numbers);

// concat, 여러개의 배열을 하나의 배열로 합쳐준다.
console.log('---concat---');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);

// join, 배열 안의 값들을 문자열 형태로 합쳐준다.
console.log('---join---');
array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5

// reduce
// 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수
// 두번째 파라미터는 reduce 함수에서 사용할 초기값
console.log('---reduce---');
array = [1, 2, 3, 4, 5];
// reduce 로 합 구하기
let sum = array.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
// reduce 로 평균 구하기
let average = array.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(average);