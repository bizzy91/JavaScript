// 14_Function_Basic_Parameter.js


// 원의 넓이를 구하는 함수
function calculateCircleArea(r) {
  // Math.PI -> 3.14159265358979...
  return Math.PI * r * r;
}
  
let area = calculateCircleArea(4);
console.log(area); // 50.26548245743669

// 파라미터(r 값)를 넣어주지 않았을 때
function calculateCircleArea2(r) {
  return Math.PI * r * r;
}
  
area = calculateCircleArea2();
console.log(area); // NaN

// 파라미터(r 값)를 넣어주지 않았을 때 r = 1 이 되도록 처리, ES5 스타일
function calculateCircleArea3(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}
  
area = calculateCircleArea3();
console.log(area); // 3.141592653589793

// ES6 스타일
function calculateCircleArea4(r = 1) {
  return Math.PI * r * r;
}

area = calculateCircleArea4();
console.log(area); // 3.141592653589793

// 화살표 함수 사용
const calculateCircleArea5 = (r = 1) => Math.PI * r * r;

area = calculateCircleArea5();
console.log(area); // 3.141592653589793