// 07_Array.js


// 숫자 배열
const array = [1, 2, 3, 4, 5];
console.log(array);
/* output
[ 1, 2, 3, 4, 5 ]
*/

// 객체 배열
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
console.log(objects);
// index 로 배열의 n 번 째 원소 출력하기 
console.log(objects[0]);
console.log(objects[1]);
/* output
[ { name: '멍멍이' }, { name: '야옹이' } ]
{ name: '멍멍이' }
{ name: '야옹이' }
*/

// 배열에 새 항목 추가하기
objects.push({
  name: '멍뭉이'
});
/* output
[ { name: '멍멍이' }, { name: '야옹이' }, { name: '멍뭉이' } ]
*/

console.log(objects);
// 배열의 크기 알아내기
console.log(objects.length);
/* output
3
*/
