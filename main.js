// Сделать всю практику из лекции про Объекты.

// Слайд 11 
// ● Создайте объект myFavoriteFilm, описывающий ваш любимый фильм.
// Объект должен содержать свойства с названием фильма, с датой
// выпуска, именем режиссера и страной выпуска.
// ● Добавить свойство содержащее значение выручки фильма в прокате.
// ● Добавить метод, который который будет выводить название фильма в
// консоль.
// ● Удалить свойство содержащее год выпуска.
// ● Вывести в консоль объект myFavoriteFilm и проанализировать его
// структуру.
function task_1() {
    const myFavoriteFilm = {
        title: 'Title',
        release_date: '01.01.01',
        director: 'Director',
        country: 'Country',
    }

    myFavoriteFilm.bank = 1231231223;
    myFavoriteFilm.getFilmTitle = function getFilmTitle() {
        return myFavoriteFilm.title
    };
    console.log('=====================  Практика, слайд 11:');
    console.log('Проверка функции, выводящей имя: \n', myFavoriteFilm.getFilmTitle());


    delete myFavoriteFilm.release_date;
    console.log('Вывод объекта после всех манипуляций: \n', myFavoriteFilm);
}
// task_1();

// Слайд 35
//  ● Реализовать функцию которая будет принимать числовой диапазон в
// качестве параметров [min, max] и будет возвращать случайное целое
// число из данного диапазона.
// ● Реализовать функцию которая будет определять, в каком регистре
// записан n элемент переданной строки, если в верхнем то вернуть true, в
// противном случае вернуть false.
// ● Реализовать функцию которая заменяет в строке str, все вхождения
// подстроки find, на подстроку replace.

function random_value() {
    // непосредственно функция для расчета рандомного целого из диапозона:
    // округляем меньшее до большего и большее до меньшего, чтобы не выпасть из диапозона
    // random генерит значение [0,1), 
    // макс-мин+1 - длина диапозона, 
    // +мин - сдвиг, 
    // а т.к. хотим целое, снова округляем до меньшего
    function getRandom(min_value, max_value) {
        const min = Math.ceil(min_value);
        const max = Math.floor(max_value);
        return Math.floor(Math.random()*(max - min + 1)) + min; 
    }

    // могли использовать parseInt на ввод, тогда без округления в формуле, но для этого лучше подойдет вторая задача из блока
    const min_value = Number(prompt('Введите min: '));
    const max_value = Number(prompt('Введите max: '));
    
    console.log('Задача 1: поиск случайного целого числа из диапозона пользователя')
    if (isNaN(min_value) || isNaN(max_value)) {
        console.log(`По крайней мере одно из значений [${min_value}] [${max_value}] не является числом.`);
        return;
    } else if (Math.floor(min_value) == Math.floor(max_value)) {
        console.log(`В указанном диапозоне [${min_value}, ${max_value}] нет целого числа.`);
        return;
    } else if (min_value > max_value) {
        console.log(`Введены некорректные данные: ${min_value} > ${max_value} ...`);
        console.log(`Поменяем местами: [${max_value}, ${min_value}]: `, getRandom(max_value, min_value));
        return;
    } else {
        console.log(`Ваше случайное значение из диапозона [${min_value}, ${max_value}]: `, getRandom(min_value, max_value));
        return;
    }
}

random_value();

// Реализовать функцию которая будет определять, в каком регистре
// записан n элемент переданной строки, если в верхнем то вернуть true, в
// противном случае вернуть false.

function n_symbol_registry() {

    function isUpperSymbol(text, index) {
        if (isNaN(index)) {
            console.log(`Введённый индекс [${index}] не является числом.`);
            return false;
        }
        if (index < 0 || index >= text.length) {
            console.log(`Указанный индекс ${index} вне диапазона указанной строки[${text}]`);
            return false;
        }
        const index_symbol = text[index];
        if (index_symbol.toLowerCase() !== index_symbol.toUpperCase()) {
            if (index_symbol === index_symbol.toUpperCase()) {
                console.log(`В указанной строке [${text}] символ под номером [${index}] существует, равен [${index_symbol}] и находится в верхнем регистре`);
                return true;
            } else {
                console.log(`В указанной строке [${text}] символ под номером [${index}] существует, равен [${index_symbol}] и находится в нижнем регистре`);
                return false;
            }
        } else {
            console.log(`В указанной строке [${text}] символ под номером [${index}] существует, равен [${index_symbol}] и не является символом, обладающим регистром`);
            return false;
        }
    }

    const text = prompt('Введите строку: ');
    const index = parseInt(prompt('Введите номер символа, у которого хотите проверить регистр, начиная с 0: '));

    console.log('Задача 2: Вернуть true/false, если n-символ строки пользователя в верхнем регистре');
    console.log(isUpperSymbol(text, index));
    return;
}

// n_symbol_registry();

// Реализовать функцию которая заменяет в строке str, все вхождения
// подстроки find, на подстроку replace.

function text_replacement() {

    function replacement(str, find, replace) {

        if (str.length === 0) {
            console.log(`Cтрока str - пустая.`);
            return false;
        }
        if (find.length === 0) {
            console.log(`Cтрока find - пустая.`);
            return false;
        }
        if (str.includes(find) === false) {
            console.log(`Cтрока [${str}] не содержит [${find}].`);
            return false;
        }
        // это проще сделать через find+replace, но это уже массивы, в презентации их не было
        // создаем пустую строку, слайсим в нее все, что не подлежит замене, иначе добавляем replace и двигаем индекс на длину find, чтобы не попасть в бесконечный цикл при замене какого-нибудь q на qq 
        let result = '';
        let pos = 0;
        let index;
        let find_length = find.length;
        while((index = str.indexOf(find, pos)) > -1) {
            result += str.slice(pos, index);
            result += replace;
            pos = index + find_length;
        }
        console.log(`Для строки [${str}] запросили замену всех [${find}] на [${replace}]. Результат:\n`, result);
        return true;
    }

    const str = prompt('Введите str - начальную строку:');
    const find = prompt('Введите find - подстроку, которую хотите заменить:');
    const replace = prompt('Введите replace - подстроку на которую хотите заменить:');

    console.log('Задача 3: Произвести замену подстроки на подстроку в строке пользователя.');

    console.log(replacement(str, find, replace));
}

// text_replacement();