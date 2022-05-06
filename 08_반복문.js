/* for
for (초기 구문; 조건 구문; 변화 구문;) {
    코드
}
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 배열과 for, index 를 이용하여 출력하기
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/* while
while (조건) {
    코드
}
*/
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// for ... of 배열, 배열의 원소를 그대로 사용하기
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

// for ... in 배열, 객체의 원소를 그대로 사용하기
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};
// Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
console.log(Object.entries(doggy));
// Object.keys: [키, 키, 키] 형태의 배열로 변환
console.log(Object.keys(doggy));
// Object.values: [값, 값, 값] 형태의 배열로 변환
console.log(Object.values(doggy));

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

// break, continue
for (let i = 0; i < 10; i++) {
    if (i === 2) continue;    // 다음 루프를 실행
    console.log(i);
    if (i === 5) break;    // 반복문을 끝내기
}