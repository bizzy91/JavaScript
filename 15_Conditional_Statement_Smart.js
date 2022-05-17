// 15_Conditional_Statement_Smart.js


// 특정 값이 여러 값 중 하나인지 확인해야 할 때
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}
  
console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false


// 함수 내부에서 배열을 만들고 includes() 함수를 사용해보자!
function isAnimal2(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal2('개')); // true
console.log(isAnimal2('노트북')); // false

// isAnimal2() 의 화살표 함수 버전
const isAnimal3 = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal3('개')); // true
console.log(isAnimal3('노트북')); // false

// 값에 따라 다른 결과물을 반환 해야 할 때
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

// getSound() 의 switch-case 문 버전
function getSound2(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound2('개')); // 멍멍!
console.log(getSound2('비둘기')); // 구구 구 구

// 함수 내부에서 객체를 만들고 key 값을 활용해 value 를 이용하여 getSound() 함수를 고쳐보자!
function getSound3(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound3('개')); // 멍멍!
console.log(getSound3('비둘기')); // 구구 구 구

// 값에 따라 실행해야 하는 코드가 다를 때
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('야옹');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

makeSound('개'); // 멍멍
makeSound('고양이'); // 야옹
makeSound('비둘기'); // 구구 구 구