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

// 문자역 붙이기
const f = 'Hello, ';
const g = 'JavaScript!';

console.log('--문자열 붙이기---');
console.log(`const f = ${f}`);
console.log(`const g = ${g}`);
console.log(`console.log(f + g); -> ${f + g}`);