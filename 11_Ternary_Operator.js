// 11_Ternary_Operator.js


/* 삼항 연산자
(사용법) (조건) ? true일때 : false일때
ES6 문법이 아니며 될 수 있으면 if 문으로 대체하도록 한다.
*/

// if 문을 사용하여 배열이 비어있는지 비어있지 않은지 판단하기
const array = [];
let text = '';
if (array.length === 0) {
  text = '배열이 비어있습니다.';
} else {
  text = '배열이 비어있지 않습니다.';
}
console.log(text);
/* output
배열이 비어있습니다.
*/

// 삼항 연산자를 사용하여 배열이 비어있는지 비어있지 않은지 판단하기
text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

console.log(text);

// 이렇게도 사용할 수 있다.
/*
let [변수이름] = (조건)
  ? true 일 때
  : false 일 때
*/
text = array.length === 0 
  ? '배열이 비어있습니다' 
  : '배열이 비어있지 않습니다.';

console.log(text);
/* output
배열이 비어있습니다.
배열이 비어있습니다.
*/

// 중첩하여 사용할 수 있다.
const condition1 = false;
const condition2 = false;

const value = condition1 
  ? '와우!' 
  : condition2 
    ? 'blabla' 
    : 'foo';

console.log(value);
/* output
foo
*/
