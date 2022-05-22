// Callback Hell, 파라미터(n)를 받아와서 5번에 걸쳐 1초마다 1씩 더해서 출력하는 콜백 지옥 예시
// function increaseAndPrint(n, callback) {
//     // setTimeout(function() { Code }, delay);
//     // delay 단위는 ms
//     setTimeout(() => {
//       const increased = n + 1;
//       console.log(increased);
//       // callback 함수가 있다면
//       if (callback) {
//         callback(increased);
//       }
//     }, 1000);
//   }
  
//   increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           increaseAndPrint(n, n => {
//             console.log('끝!');
//           });
//         });
//       });
//     });
//   });


// Promise 구조
// const myPromise = new Promise((resolve, reject) => {
//   // 구현..
// })


// 성공할 때는 resolve 를 호출
// 실패할 때는 reject 를 호출
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  });