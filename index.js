// exercise 1

let x = 40000;
let y = 22000;
console.log(x+y); // 62000

// exercise 2

console.log('Владивосток ' + 2000); // Владивосток 2000

// exercise 3

let t1 = 128;
let t2 = 254;
let t3 = 137;
let t4 = 201;
let sum = t1+t2+t3+t4;
const hour = 60;

console.log(sum / hour + ' часов'); // 12 часов

// exercise 4

console.log(2**5); // 32

// exercise 5

console.log('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!');

// exercise 6

let greetings = 'Привет';
let name1 = 'Кот';

console.log(greetings + ', ' + name1); // Привет, Кот

// exercise 7

let time;
console.log(time); // undefined

time = 34;
console.log(time); // 34
console.log('Старт поездки. Осталось минут: ' + time); // Старт поездки. Осталось минут: 34

time -= 15;
console.log('Немного сторис в соцсетях. Осталось минут: ' + time); // Немного сторис в соцсетях. Осталось минут: 19

time -= 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time); //Немного не новостей, но событий. Осталось минут: 9

time = 0;
console.log('Вы приехали. Добро пожаловать в Москву');

// exercise 8

let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;

console.log(`${fahrenheit} градус по Фаренгейту - это ${celsius} градуса по Цельсию.`);
