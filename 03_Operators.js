// 03_Operators.js


// 산술 연산자
let a = 7;
let b = 3;
console.log("---산술 연산자---");
console.log(`a = ${a}, b = ${b}`);

console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
/* output
a = 7, b = 3
a + b = 10
a - b = 4
a * b = 21
a / b = 2.3333333333333335
a % b = 1
*/

// 증감 연산자
let c = 5;
console.log("---증감 연산자---");
console.log(`c = ${c}`)

console.log(`console.log(++c); -> ${++c}`);   // c 에 1을 더한 후 출력한다.
c = 5;
console.log(`console.log(c++); -> ${c++}`);   // c 를 먼저 출력하고 1을 더한다.
c = 5;
console.log(`console.log(--c); -> ${--c}`);   // c 에 1을 뺀 후 출력한다.
c = 5;
console.log(`console.log(c--); -> ${c--}`);   // c 를 먼저 출력하고 1을 뺀다.
/* output
c = 5
console.log(++c); -> 6
console.log(c++); -> 5
console.log(--c); -> 4
console.log(c--); -> 5
*/

// 대입 연산자
let d = 10;

console.log("---대입 연산자---");
console.log(`d = ${d}`);

d += 3;
console.log(`d += 3; -> ${d}`);

d = 10;
d -= 3;
console.log(`d -= 3; -> ${d}`);

d = 10;
d *= 3;
console.log(`d *= 3; -> ${d}`);

d = 10;
d /= 3;
console.log(`d /= 3; -> ${d}`);

d = 10;
d %= 3;
console.log(`d %= 3; -> ${d}`);
/* output
d = 10
d += 3; -> 13
d -= 3; -> 7
d *= 3; -> 30
d /= 3; -> 3.3333333333333335
d %= 3; -> 1
*/

// 논리 연산자,    !(NOT), &&(AND), ||(OR)
// 연산 순서
// NOT -> AND -> OR
console.log("---논리 연산자---");
console.log("NOT");
let e = !true;
console.log(`!ture -> ${e}`);
e = !false;
console.log(`!false -> ${e}`);

console.log("AND");
e = true && true;
console.log(`true && true -> ${e}`);
e = true && false;
console.log(`true && false -> ${e}`);
e = false && true;
console.log(`false && true -> ${e}`);
e = false && false;
console.log(`false && false -> ${e}`);

console.log("OR");
e = true || true;
console.log(`true || true -> ${e}`);
e = true || false;
console.log(`true || false -> ${e}`);
e = false || true;
console.log(`false || true -> ${e}`);
e = false || false;
console.log(`false || false -> ${e}`);
/* output
NOT
!ture -> false
!false -> true
AND
true && true -> true
true && false -> false
false && true -> false
false && false -> false
OR
true || true -> true
true || false -> true
false || true -> true
false || false -> false
*/

// 비교 연산자
// ==, 값이 같은지 확인
// !=, 값이 다른지 확인
// ===, 값 그리고 타입도 같은지 확인
// !==, 값 혹은 타입이 다른지 확인
// <, <=, >, >=
console.log('---비교 연산자---');
console.log(`1 == '1' -> ${1 == '1'}`);
console.log(`1 != '1' -> ${1 != '1'}`);
console.log(`1 === '1' -> ${1 === '1'}`);
console.log(`1 !== '1' -> ${1 !== '1'}`);
console.log(`null == undefined -> ${null == undefined}`);
console.log(`null === undefined -> ${null === undefined}`);
/* output
1 == '1' -> true
1 != '1' -> false
1 === '1' -> false
1 !== '1' -> true
null == undefined -> true
null === undefined -> false
*/

// 문자역 붙이기
const f = 'Hello, ';
const g = 'JavaScript!';

console.log('--문자열 붙이기---');
console.log(`const f = ${f}`);
console.log(`const g = ${g}`);
console.log(`console.log(f + g); -> ${f + g}`);
/* output
const f = Hello, 
const g = JavaScript!
console.log(f + g); -> Hello, JavaScript!
*/