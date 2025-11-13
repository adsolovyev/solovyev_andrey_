// Практика из презентации №6 массивы и объекты
// ● Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.
function task_1(arr) {
    return arr.reduce((sum, cur) => {
        if (cur > 0 && cur % 2 === 0) {
            return sum + cur;
        }
    return sum;
    }, 0);
}
// showcase task_1 
// console.log(task_1([2, -5, 5, -10, 10, 8, 6, -7, -16, 18])) //44

// ● Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.
function task_2(arr) {
    return arr.filter((item, index, array) => {
        return array.indexOf(item) === index;
    });
}
// showcase task_2
// console.log(task_2([2, -5, 5, -10, 10, 10, 6, -6, -6, 5])) // (7) [2, -5, 5, -10, 10, 6, -6]

// ● Написать функцию которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.
function task_3(arr1, arr2) {
    return arr1.every((item, index) => item === arr2[index]) && arr1.length === arr2.length;
}

// console.log(task_3([1, 1, 1, 1], [1, 2, 3, 4])); // false
// console.log(task_3([1, 2, 3, 4], [1, 2, 3])); // false
// console.log(task_3([1, 2, 3], [1, 2, 3, 4])); // false - без проверки длины дает true 
// console.log(task_3([1, 2, 3, 4], [1, 2, 3, 4])); // true

// ● Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.
const task_4_Object = {
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: {
        sub_param1: "sub_param1",
        sub_param2: "sub_param2"
    }
}

const copy_object_assign = Object.assign({}, task_4_Object);
const copy_spread = {...task_4_Object};
copy_object_assign.param1 = "new_param1";
copy_spread.param2 = 'new_param2';
// console.log(task_4_Object); // {param1: 'param1', param2: 'param2', param3: 'param3', param4: {…}}
// Примечание: если менять вложенные объекты, исходник тоже изменится, т.к. Object.assign и spread делают поверхностное копирование

// ● Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).
function task_5(...numbers){
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}

// console.log(task_5(-1, -2, -3, 0, 1, 2, 3, 4, 5, 6)); // 10

// ● Написать функцию которая будет принимать два массива, и в качестве результата будет возвращать только те значения которые есть и в первом и во втором массиве.
function task_6(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// console.log(task_6([0, 1, 2, 3], [1, 2, 3, 4])); // (3) [1, 2, 3]

