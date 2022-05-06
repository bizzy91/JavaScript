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

// 함수에서 객체를 파라미터로 받기
function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}
console.log('---함수에서 객체를 파라미터로 받기---');    
print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당, Destructuring Assignment
function print2(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}
console.log('---객체 비구조화 할당---');      
print2(ironMan);
print2(captainAmerica);

// 객체 안에 함수 넣기
dog = {
    name: '멍멍이',
    sound: '멍멍!',
    // 함수 이름이 없어도 된다. say: function() {}
    say: function say() {
        console.log(this.name, this.sound);
    }
};
console.log('---객체 안에 함수 넣기---');  
dog.say();

// Getter, Setter, 객체 내부의 값 보호, 은닉 등에 사용되는 듯(?)
// get 함수이름() { 코드 } –> 인자가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set 함수이름(인자) { 코드 } –> 인자가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
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
console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);