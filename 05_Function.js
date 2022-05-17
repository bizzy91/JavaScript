// 더하기 함수
function add(a, b) {
    return a + b;
};
console.log(add(3,8));

// 더하기 함수, 화살표 함수 버전
const add_arrow = (a, b) => {
    return a + b;
};
console.log(add_arrow(3,8));
  
// ES6 Template Literal
function hello(name) {
    console.log('Hello, ' + name + '!');
}
hello('bizzy');

// 04_조건문.js 에서 사용한 if 문을 함수로 만들어 보자!
function getGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else {
        return 'F';
    }
    
}
const grade = getGrade(90);
console.log(grade);