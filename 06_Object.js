// 06_Object.js


/*
키에 해당하는 부분은 공백이 없어야 한다. 
공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주어야 한다.
{
    key: value
}
*/
let dog = {
    name: '멍멍이',
    age: 2
};
console.log('---객체 출력하기 1---');  
console.log(dog.name);
console.log(dog.age);
/* output
멍멍이
2
*/

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};
const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};
console.log('---객체 출력하기 2---');    
console.log(ironMan);
console.log(captainAmerica);
/* output
{ name: '토니 스타크', actor: '로버트 다우니 주니어', alias: '아이언맨' }
{ name: '스티븐 로저스', actor: '크리스 에반스', alias: '캡틴 아메리카' }
*/

// 함수에서 객체를 파라미터로 받기
function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
console.log('---함수에서 객체를 파라미터로 받기---');    
print(ironMan);
print(captainAmerica);
/* output
아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.
*/

// 객체 비구조화 할당, Destructuring Assignment
function print2(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
console.log('---객체 비구조화 할당---');      
print2(ironMan);
print2(captainAmerica);
/* output
아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.
*/

// 객체 안에 함수 넣기
dog = {
    name: '멍멍이',
    sound: '멍멍!',
    // 객체 안에서 함수를 선언하는 방법. 함수 이름이 없어도 된다. -> say() {}
    say: function say() {
        console.log(this.name, this.sound);
    }
};
console.log('---객체 안에 함수 넣기---');  
dog.say();
/* output
멍멍이 멍멍!
*/

// Getter, Setter, 객체 내부의 값 보호, 은닉 등에 사용되는 듯(?)
// get 함수이름() { 코드 } –> 인자가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set 함수이름(인자) { 코드 } –> 인자가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    // 객체 안에서 함수를 선언할 때는 function 키워드가 없어도 된다. 위의 dog.say() 함수와 비교해 볼 것!
    // this 는 객체 자체를 의미한다.
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};
console.log('---Getter, Setter---');
// Getter 함수, 객체 안의 값을 얻는데 사용된다.
console.log(`numbers._a = ${numbers._a}`);
console.log(`numbers.a = ${numbers.a}`);
console.log(`numbers._b = ${numbers._b}`);
console.log(`numbers.b = ${numbers.b}`);
/* output
numbers._a = 1
numbers.a = 1
numbers._b = 2
numbers.b = 2
*/
// Setter 함수, 객체 안의 값을 바꾸는데 사용된다.
console.log('-Setter 함수 사용-');
numbers.a = 7;
numbers.b = 8;
console.log(`numbers.a = 7; -> a = ${numbers.a}`);
console.log(`numbers.b = 8; -> b = ${numbers.b}`);
console.log(numbers.sum);
/* output
a가 바뀝니다.
calculate
b가 바뀝니다.
calculate
numbers.a = 7; -> a = 7
numbers.b = 8; -> b = 8
15
*/
