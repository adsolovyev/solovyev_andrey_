// Task 1

function task_1() {
    const n = prompt('Введите n, где n > 0 ', 1)
    console.log('Task 1, Sum = ',sumTo(n));
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Task 2

function task_2() {
    const base = prompt('Укажите число, которое хотите возвести в степень: ', 0);
    const exponent = prompt('Укажите степень, в которую возводите число: ', 0);
    console.log('Task 2 ',pow(base,exponent));
}

function pow(base, exponent) {
    let counter = exponent;
    let result = 1;
    while (counter > 0) {
        result *= base;
        counter--;
    }
    return result;
}

// task 3

function task_3() {
    const n = prompt('Укажите n, чтобы узнать количество четных чисел [1, n]: ', 0);
    console.log('Task 3 ',countEven(n));
}

function countEven(n) {
    let counter = n;
    result = 0;
    while (counter >= 2) {
        result++;
        counter -= 2;
    }
    return result;
}

// task 4 

function task_4() {
    const n = prompt('Укажите целое n >= 0, чтобы подсчитать его n!: ', 0);
    console.log('Task 4 ',factorial(n));
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// task 5  

function task_5() {
    const text = prompt('Укажите строку, которую хотите повторить: ', 'Hi');
    const count = Number(prompt('Укажите, сколько раз повторить строку: ', 0));
    console.log('Task 5', repeatText(text, count));
}

function repeatText(text, count) {
    result = "";
    for (let i = 1; i <= count; i++ ) {
        result += text;
    }
    return result;
}

// task 6 

function task_6() {
    const start = Number(prompt('Укажите левую границу: ', 0));
    const finish = Number(prompt('Укажите правую границу: ', 0));
    console.log('Task 6 ',printRange(start, finish));
}


function printRange(start, finish) {
    let counter = start; 
    let result = "";
    while (counter <= finish) {
        result += counter + " "; 
        counter++; 
    }
    return result;
}

// task 7 
// стрелочная функция + использование свойств prompt() вместо проверки на число с переводом в строку или вместо циклов с делением
function task_7_arrow() { 
    const num = prompt('Укажите число для подсчета цифр в нем: ', 12345);
    let countDigitsArrow = (num) => num.length;
    console.log('Task 7 ',countDigitsArrow(num)); 
}

// task 8 
// ок, теперь придется использовать % и Math.floor
function task_8() {
    const num = prompt('Укажите число, чтобы найти его сумму цифр: ', 12345);
    console.log('Task 8 ',sumDigits(num));
}

function sumDigits(num) {
    let result = 0;
    length = num.length;
    value = Number(num);
    for (let i = 0; i < length; i++) {
        result += value%10;
        value = Math.floor(value/10);
    }
    return result;
}

// turn 9 

function task_9() {
    const n = Number(prompt('Укажите число, чтобы увидеть таблицу умножения для него: ', 1));
    console.log('Task 9 ');
    printTable(n);
}

function printTable (n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} × ${i} = `, n * i);
    }
    return;
}

// task 10 

function task_10() {
    const from = Number(prompt('Укажите число для обратного отсчета: ', 5));
    console.log('Task 10 ');
    countdown(from);
}

function countdown(from) {
    for (let i = from; i > 0; i--) {
        console.log(i);
    }
    return;
}

// task 11 
function task_11() {
    const n = Number(prompt('Укажите n > 2, чтобы увидеть n-ое число Фибоначчи ', 6));
    console.log(`Task 11: ${n} item of fibonacci:`, fibonacci(n));
}

function fibonacci(n) {
    let first = 0;
    let second = 1;
    if (n === 0) return first;
    if (n === 1) return second;
    result = 0;
    for (let i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return second; 
}

// task 12 
function task_12() {
    const n = prompt('Ввеедите число N для реверса: ', 123);
    console.log(`Task 12: Reverse for number ${n} is `, reverseNumber(n));
}

function reverseNumber(n) {
    let result = 0; 
    const length = n.length;
    n_copy = Number(n);
    for (i = 0; i < length; i++) {
        result = result*10 + n_copy%10;
        n_copy = Math.floor(n_copy/10);
    }
    return result;
}

// task 13 
function task_13() {
    const num = prompt('Ввеедите число N для проверки на палиндром: ', 12321);
    console.log('Task 13');
    console.log(isPalindrome(num));
}

function isPalindrome(num) {
    let result = 0; 
    const length = num.length;
    n_copy = Number(num);
    for (i = 0; i < length; i++) {
        result = result*10 + n_copy%10;
        n_copy = Math.floor(n_copy/10);
    }
    if (Number(num) === Number(result)) return true;
    if (Number(num) !== Number(result)) return false;
}

// task 14 
function task_14() {
    const n = prompt('Ввеедите число N, чтобы узнать его делители: ', 12);
    console.log(`Task 14: divisors for ${n}:`);
    divisors(n);
}

function divisors(n) {
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) { console.log(i)}
    }
    return;
}

// task 15 
function task_15() {
    const n = prompt('Ввеедите число N, чтобы проверить, является ли оно простым: ', 7);
    console.log(`Task 15: ${n} ? isPrime:`, isPrime(n));
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) { 
            console.log('failed on divisor:', i);
            return false;}
    }
    return true;
}

// task 16
function task_16() {
    result = 0;
    for (let i = 1; i < 100; i++){
        if (i % 2 == 1) {
            result += i;
        }
    }
    console.log(`Sum for 1-99 is `, result);
}

// task 17 
function task_17() {
    const n = prompt('Ввеедите число N, для подсчета 0 в нем: ', 10020);
    console.log(`Task 17: ${n} contains `, countZeros(n), ' 0 symbols');
}

function countZeros(n) {
    result = 0;
    let length = n.length;
    let n_copy = Number(n);
    for (let i = 0; i < length; i++) {
        if (n_copy % 10 == 0) { result++;}
        n_copy = Math.floor(n_copy/10);
    }
    return result;
}

// task 18 
function task_18() {
    const n = prompt('Ввеедите число N, чтобы найти его первую цифру: ', 9876);
    console.log(`Task 18:`, firstDigit(n));
}

function firstDigit(n) {
    let length = n.length;
    let n_copy = Number(n);
    for (let i = 0; i < length-1; i++) {
        n_copy = Math.floor(n_copy/10);
    }
    return n_copy;
}

// task 19
function task_19() {
    const n = Number(prompt('Ввеедите число N, чтобы узнать, сколько раз оно разделится на 2, прежде чем станет нечетным: ', 40));
    console.log(`Task 19:`, countDivisions(n));
}

function countDivisions(n) {
    let counter = 0;
    let n_copy = Number(n);
    while (n_copy % 2 == 0) {
        n_copy /= 2;
        counter++;
    }
    return counter;
}

// task 20 
function createCounter(key) {
    let count = 0;
    return function(key) {
        if (key === 'reset') {
            count = 0;
            console.log('Reset counter:', count);
        } else if (key === 'get') {
            console.log('Current counter: ', count);
            return count;
        }
        else {
            count++;
            console.log(`Вызов №${count}`);
        }
    }
}

const counter = createCounter();


