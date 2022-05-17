// 16_Destructuring_Assignment.js


// 객체 안의 값을 추출해서 변수 혹은 상수로 선언할 수 있다.
const object = { a: 1, b: 2 };
const { a, b } = object;

console.log(a); // 1
console.log(b); // 2
// 당연히 이름이 바뀌면 안된다.(없는 값을 입력한 것과 같다.) -> undefined
const { c, d } = object;

console.log(c); // undefined
console.log(d); // undefined


// 없는 값을 사용하고 싶다면 기본값을 설정해 보자!
function print({ a, b, c=3, d=4 }) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
print(object);
// 1
// 2
// 3
// 4


// 비구조화 할당을 할 때 이름 바꾸기
const animal = {
  name: '멍멍이',
  type: '개'
};
  
const { name: nickname, type }  = animal;
console.log(nickname); // 멍멍이
console.log(type); // 개


// 배열에서도 비구조화 할당을 할 수 있다.
const array = [1, 2];
let [one, two] = array;

console.log(one); // 1
console.log(two); // 2


// 객체 비구조화 할당과 마찬가지로 기본값 지정이 가능하다.
const array2 = [1];
[one, two = 2] = array2;

console.log(one); // 1
console.log(two); // 2


// 깊은 값 비구조화 할당
const deepObject = {
  state: {
    information: {
      name: 'bizzy',
      languages: ['Python', 'JavaScript', 'C']
    }
  },
  value: 5
};

let { name, languages } = deepObject.state.information;
let { value } = deepObject;


let extracted = {
  name: name,
  languages: languages,
  value: value
}
console.log(extracted); // { name: 'bizzy', languages: [ 'Python', 'JavaScript', 'C' ], value: 5 }
// ES6 에서는 이렇게도 가능하다. object-shorthand
extracted = {
  name,
  languages,
  value
};
console.log(extracted); // { name: 'bizzy', languages: [ 'Python', 'JavaScript', 'C' ], value: 5 }
// 이렇게도 가능하다.
// let {
//   state: {
//     information: { name, languages }
//   },
//   value
// } = deepObject;

// extracted = {
//   name,
//   languages,
//   value
// };
// console.log(extracted);
