// 12_Truthy_Falsy.js


function print(person) {
    console.log(person.name);
  }
  
let person = {
  name: 'John'
};
/* output
John
*/

print(person);

// print() 함수의 파라미터가 없거나(undefined 로 인식) null 일 때는 오류가 발생한다.
// undefined 와 null 은 falsy 한 값이다. -> false 는 아니지만 조건문에서 false 로 인식한다.
function print(person) {
  if (person === undefined || person === null) {
    console.log('파라미터가 없습니다.');
    return;
  }
  console.log(person.name);
}

person = null;
print(person);
/* output
파라미터가 없습니다.
*/

// Falsy 한 값들, 그 외에는 모두 Truthy 한 값이다
// Truthy 는 Falsy 와 마찬가지로 true 는 아니지만 조건문에서 true 로인식한다.
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
/* output
true
true
true
true
true
*/

const num = parseInt('15', 10);  // 10진수 15를 숫자로 변환한다.
console.log(num); 
const notnum = parseInt('야호~', 10);
console.log(notnum);  // NaN, Not a Number
/* output
15
NaN
*/

// Truthy
const value = { a: 1 };
if (value) {
  console.log('value is Truthy.');
}
/* output
value is Truthy.
*/

// 예제
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1