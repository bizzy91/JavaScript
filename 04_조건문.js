/* if 문
if (조건 1) {
    (코드 1);
} else if (조건 2) {
    (코드 2);
} else {
    (코드 3);
}
*/
const score = 75;

if (score > 90) {
    console.log('Your grade is A!');
} else if (score > 80) {
    console.log('Your grade is B!');
} else if (score > 70) {
    console.log('Your grade is C!');
} else if (score > 60) {
    console.log('Your grade is D!');
} else {
    console.log('Your grade is F!');
}
/* switch 문
let 변수;

switch (변수) {
    case 상수1:
        (코드 1)
        break;

    case 상수2:
        (코드 2)
        break;

    ...

    default:
        (default 코드)
}
*/
let device = 'iMac';

switch (device) {
    case 'iMac':
        console.log('iMac!');
        break;
    case 'Mac Book':
        console.log('Mac Book');
        break;
    case 'iPhone':
        console.log('iPhone!');
        break;
    default:
        console.log('Anythong else...')
}