"use strict";

// lesson 2 - Task:
// 6️⃣ Создать переменные всех основных типов данных *(можно использовать прошлое ДЗ)*
// 7️⃣ Для каждой переменной вывести в консоль её тип с помощью typeof

let numberVariable = 1 + 0;
console.log(numberVariable);
console.log(typeof(numberVariable));
// 1
// number
let infinityVariable = (1e600);
console.log(infinityVariable);
console.log(typeof(infinityVariable));
// Infinity
// number
let minusInfinityVariable = (-1 / 0);
console.log(minusInfinityVariable);
console.log(typeof(minusInfinityVariable));
// -Infinity
// number
let nanVariable = ("text" / 0);
console.log(nanVariable);
console.log(typeof(nanVariable));
// NaN
// number
let bigIntVariable = 10n;
console.log(bigIntVariable);
console.log(typeof(bigIntVariable));
// 10n
// bigint
let stringVariable = "text";
console.log(stringVariable);
console.log(typeof(stringVariable));
// text
// string
const isBinaryVariable = (1==1);
console.log(isBinaryVariable);
console.log(typeof(isBinaryVariable));
// true
// boolean
let nullVariable = null;
console.log(nullVariable);
console.log(typeof(nullVariable));
// null
// object
// as expected
let objectVariable = {};
console.log(objectVariable);
console.log(typeof(objectVariable));
// {}
// object
let undefinedVariable;
console.log(undefinedVariable);
console.log(typeof(undefinedVariable));
// undefined
// undefined
const symbolVariable = Symbol("id");
console.log(symbolVariable);
console.log(typeof(symbolVariable));
// Symbol(id)
// symbol
// for some reason, there are no quotes here if debugging via Chrome
function emptyFunction(){};
console.log(emptyFunction);
console.log(typeof(emptyFunction));
// ƒ testFunction(){}
// function
// as expected
// ==================================================================================================================================
// 8️⃣ Добавить примеры явного преобразования типов
let string_with_numbers = "12.34";
console.log(`Type of "${string_with_numbers}" is ` + typeof(string_with_numbers));
console.log(`After Applying String() to this, we get the value ` + String(string_with_numbers) + " of type " + typeof(String(string_with_numbers)));
console.log(`After Applying Number() to this, we get the value ` + Number(string_with_numbers) + " of type " + typeof(Number(string_with_numbers)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(string_with_numbers) + " of type " + typeof(Boolean(string_with_numbers)));
// Type of "12.34" is string
// After Applying String() to this, we get the value 12.34 of type string
// After Applying Number() to this, we get the value 12.34 of type number
// After Applying Boolean() to this, we get the value true of type boolean
let string_with_numbers_and_text = "12.34 test";
console.log(`Type of "${string_with_numbers_and_text}" is ` + typeof(string_with_numbers_and_text));
console.log(`After Applying String() to this, we get the value ` + String(string_with_numbers_and_text) + " of type " + typeof(String(string_with_numbers_and_text)));
console.log(`After Applying Number() to this, we get the value ` + Number(string_with_numbers_and_text) + " of type " + typeof(Number(string_with_numbers_and_text)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(string_with_numbers_and_text) + " of type " + typeof(Boolean(string_with_numbers_and_text)));
// Type of "12.34 test" is string
// After Applying String() to this, we get the value 12.34 test of type string
// After Applying Number() to this, we get the value NaN of type number
// After Applying Boolean() to this, we get the value true of type boolean
let number_infinity = Infinity;
console.log(`Type of "${number_infinity}" is ` + typeof(number_infinity));
console.log(`After Applying String() to this, we get the value ` + String(number_infinity) + " of type " + typeof(String(number_infinity)));
console.log(`After Applying Number() to this, we get the value ` + Number(number_infinity) + " of type " + typeof(Number(number_infinity)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(number_infinity) + " of type " + typeof(Boolean(number_infinity)));
// Type of "Infinity" is number
// After Applying String() to this, we get the value Infinity of type string
// After Applying Number() to this, we get the value Infinity of type number
// After Applying Boolean() to this, we get the value true of type boolean
let boolean_true = true;
console.log(`Type of "${boolean_true}" is ` + typeof(boolean_true));
console.log(`After Applying String() to this, we get the value ` + String(boolean_true) + " of type " + typeof(String(boolean_true)));
console.log(`After Applying Number() to this, we get the value ` + Number(boolean_true) + " of type " + typeof(Number(boolean_true)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(boolean_true) + " of type " + typeof(Boolean(boolean_true)));
// Type of "true" is boolean
// After Applying String() to this, we get the value true of type string
// After Applying Number() to this, we get the value 1 of type number
// After Applying Boolean() to this, we get the value true of type boolean
let null_is_null = null;
console.log(`Type of "${null_is_null}" is ` + typeof(null_is_null));
console.log(`After Applying String() to this, we get the value ` + String(null_is_null) + " of type " + typeof(String(null_is_null)));
console.log(`After Applying Number() to this, we get the value ` + Number(null_is_null) + " of type " + typeof(Number(null_is_null)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(null_is_null) + " of type " + typeof(Boolean(null_is_null)));
// Type of "null" is object
// After Applying String() to this, we get the value null of type string
// After Applying Number() to this, we get the value 0 of type number
// After Applying Boolean() to this, we get the value false of type boolean
let undefined_is_undefined = undefined;
console.log(`Type of "${undefined_is_undefined}" is ` + typeof(undefined_is_undefined));
console.log(`After Applying String() to this, we get the value ` + String(undefined_is_undefined) + " of type " + typeof(String(undefined_is_undefined)));
console.log(`After Applying Number() to this, we get the value ` + Number(undefined_is_undefined) + " of type " + typeof(Number(undefined_is_undefined)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(undefined_is_undefined) + " of type " + typeof(Boolean(undefined_is_undefined)));
// Type of "undefined" is undefined
// After Applying String() to this, we get the value undefined of type string
// After Applying Number() to this, we get the value NaN of type number
// After Applying Boolean() to this, we get the value false of type boolean
let string_with_text = "one";
console.log(`Type of "${string_with_text}" is ` + typeof(string_with_text));
console.log(`After Applying String() to this, we get the value ` + String(string_with_text) + " of type " + typeof(String(string_with_text)));
console.log(`After Applying Number() to this, we get the value ` + Number(string_with_text) + " of type " + typeof(Number(string_with_text)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(string_with_text) + " of type " + typeof(Boolean(string_with_text)));
// Type of "one" is string
// After Applying String() to this, we get the value one of type string
// After Applying Number() to this, we get the value NaN of type number
// After Applying Boolean() to this, we get the value true of type boolean
let nan_is_nan = NaN;
console.log(`Type of "${nan_is_nan}" is ` + typeof(nan_is_nan));
console.log(`After Applying String() to this, we get the value ` + String(nan_is_nan) + " of type " + typeof(String(nan_is_nan)));
console.log(`After Applying Number() to this, we get the value ` + Number(nan_is_nan) + " of type " + typeof(Number(nan_is_nan)));
console.log(`After Applying Boolean() to this, we get the value ` + Boolean(nan_is_nan) + " of type " + typeof(Boolean(nan_is_nan)));
// Type of "NaN" is number
// After Applying String() to this, we get the value NaN of type string
// After Applying Number() to this, we get the value NaN of type number
// After Applying Boolean() to this, we get the value false of type boolean
// ==================================================================================================================================
// 9️⃣ Добавить примеры неявного преобразования типов, 🔹 Под каждым примером написать короткий комментарий — почему получился такой результат
let implicit_conversion = 0;
console.log(typeof(implicit_conversion + ""));
// string: прибавление строки (даже пустой) преобразует операнд в строку
console.log(1+3+" text"); // 4 text
console.log(1+(3+" text")); // 13 text
// порядок выполнения бинарных операций влияет на результат 
implicit_conversion = "0"
console.log(typeof(-implicit_conversion));
//number: унарный +- в начале строки преобразует в число
implicit_conversion = "0"
console.log(typeof(implicit_conversion-0));
//number: +-*/% и ** преобразуют строку с числом в число 
console.log(typeof(!!implicit_conversion));
// boolean: оператор !! трансформирует операнд в boolean

// ==================================================================================================================================
// 🔟 Добавить примеры операторов сравнения
console.log("================================================================="); 
console.log(1 > 2); // false
console.log(1 >= 2); // false
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 != 1); // true
console.log(1 == 1n); // true
// сравнение чисел 
console.log("================================================================="); 
console.log('test' == 'Test'); // false регистр важен
console.log('a_test' > 'b_test'); // false сравнение начинается с первого символа
console.log('test_a_test' < 'test_b_test'); // true отличие может быть не в начале 
console.log('test_a' < 'test_bcd'); // true длинная строка больше короткой
console.log('test' != 'test, but longer') // true сравнение заканчивается с одной из строк
// сравнение строк
console.log("================================================================="); 
let [value_left, value_right] = [5,"5"];
console.log(value_left == value_right); // true
console.log(value_left === value_right); // false
[value_left, value_right] = [0,false];
console.log(value_left == value_right); // true
console.log(value_left === value_right); // false
[value_left, value_right] = ["0",false];
console.log(value_left == value_right); // true
console.log(value_left === value_right); // false
[value_left, value_right] = [null,undefined];
console.log(value_left == value_right); // true
console.log(value_left === value_right); // false
// === - "операция строгого равенства" дает false, если операнды принадлежат к разным типам 

