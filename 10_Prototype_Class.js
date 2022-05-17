// 10_Prototype_Class.js


// 객체 생성자
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    };
}
  
let dog = new Animal('개', '멍멍이', '멍멍');
let cat = new Animal('고양이', '야옹이', '야옹');

console.log("---객체 생성자---")
dog.say();
cat.say();
/* output
멍멍
야옹
*/

// 프로토타입, class 안의 method(class 안에서 사용하는 함수) 를 다루는 방법
function Animal2(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
  
Animal2.prototype.say = function() {
    console.log(this.sound);
};
Animal2.prototype.sharedValue = 1;
  
dog = new Animal2('개', '멍멍이', '멍멍');
cat = new Animal2('고양이', '야옹이', '야옹');

console.log("---프로토타입---")
dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
/* output
멍멍
야옹
1
1
*/

// 객체 생성자 상속받기
function Animal3(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
  
Animal3.prototype.say = function() {
console.log(this.sound);
};
Animal3.prototype.sharedValue = 1;
  
function Dog(name, sound) {
    Animal3.call(this, '개', name, sound);
}
Dog.prototype = Animal3.prototype;
  
function Cat(name, sound) {
    Animal3.call(this, '고양이', name, sound);
}
Cat.prototype = Animal3.prototype;

console.log("---객체 생성자 상속받기---")
dog = new Dog('멍멍이', '멍멍');
cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
/* output
멍멍
야옹
*/

// 클래스
class Animal4 {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}
  
dog = new Animal4('개', '멍멍이', '멍멍');
cat = new Animal4('고양이', '야옹이', '야옹');

console.log("---클래스---")
dog.say();
cat.say();
/* output
멍멍
야옹
*/

// 클래스 상속
class Dog2 extends Animal4 {
    constructor(name, sound) {
        super('개', name, sound);
    }
}
  
class Cat2 extends Animal4 {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}
  
dog = new Dog2('멍멍이', '멍멍');
cat = new Cat2('야옹이', '야옹');
 
console.log("---클래스 상속---")
dog.say();
cat.say();
/* output
멍멍
야옹
*/