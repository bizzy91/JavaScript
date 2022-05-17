// 18_Scope.js


// Global Scope -> 코드의 모든 범위에서 사용이 가능하다.
// Function Scope -> 함수 안에서만 사용이 가능하다.
// Block Scope -> if, for, switch 등 특정 블록 내부에서만 사용이 가능하다.


// Scope 이해하기 (const, let)
// Global Scope
const value = 'hello!';

function myFunction() {
  // Function Scope
  const value = 'bye!';
  if (true) {
    // Block Scope
    const value = 'world';
    console.log(`block scope: ${value}`); // block scope: world
  }
  console.log(`function scope: ${value}`); // function scope: bye!
}
myFunction();
console.log(`global scope: ${value}`); // global scope: hello!


// var 는 Function 과 Block 의 Scope 구분이 없어 if 문 안에서 재선언 했을 때 밖에서 선언한 변수에 영향을 준다.
function myFunction2() {
  // Function Scope
  var value = 'bye!';
  if (true) {
    // Block Scope
    var value = 'world';
    console.log(`block scope: ${value}`); // block scope: world
  }
  console.log(`function scope: ${value}`); // function scope: world
}
myFunction2();
console.log(`global scope: ${value}`); // global scope: hello!


// Hoisting, 끌어올리기 -> 선언되지 않은 함수/변수가 있다면 아래 코드에서 있는지 확인하여 끌어올려 사용하는 Javascript 엔진의 성질.
myFunction3();

function myFunction3() {
  console.log('hello world!');
}

console.log(number);
var number = 2;
// 위 코드를 아래와 같이 해석한다.
// var number;
// console.log(number);
// number = 2;

// const 와 let 은 Hoisting 이 발생하지 않고 에러가 발생한다.
// 함수와 변수는 꼭 선언한 뒤에 사용하고 var 는 쓰지 말자!