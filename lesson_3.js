// block 1 
function lvl_1_task_1() {
    const user_age = prompt('Укажите ваш возраст:', 0);
    const adult = 18;
    if  (user_age < adult) {
        prompt("Доступ запрещён!");
    } else {
        prompt("Доступ разрешён!");
    }
    // способ выше верен по ТЗ, но бесполезен на практике, т.к. блокирует введеное значение меньше 18, но пропускает ЛЮБЫЕ иные значения
    // на практике, если мы хотим пускать только взрослых пользователей, необходимо делать проверку, являются ли введеные данные числами,
    // но проще развернуть условие: 
    // if  (user_age >= adult) {
    //     prompt("Доступ разрещён!");
    // } else {
    //     prompt("Доступ запрешён!");
    // }
};

function lvl_1_task_1_1() {
    const user_age = prompt('Укажите ваш возраст:', 0);
    const adult = 18; 
    if  (user_age >= adult) {
        prompt("Доступ разрешён!");
    } else {
        prompt("Доступ запрешён!");
    }
};

function lvl_1_task_2() {
    // Перепиши предыдущую задачу с использованием тернарного оператора ? :
    const user_age = prompt('Укажите ваш возраст:', 0);
    const adult = 18;
    (user_age < adult) ? prompt("Доступ запрещён!") : prompt("Доступ разрешён!");
};

function lvl_1_task_3() {
    // Напиши код, который принимает через prompt() день недели (число от 1 до 7) и выводит название дня:
    // 1 — Понедельник, 2 — Вторник, … 7 — Воскресенье.
    // Если введено число вне диапазона — выведи "Ошибка: такого дня нет!"
    let day_of_the_week_number = prompt('Укажите день недели (число от 1 до 7):');
    // prompt() считывает строку! 
    let day_of_the_week_word;
    switch (Number(day_of_the_week_number)){
        case 1: 
            day_of_the_week_word ="Понедельник";
            break;
        case 2: 
            day_of_the_week_word = "Вторник";
            break;
        case 3: 
            day_of_the_week_word = "Среда";
            break;
        case 4: 
            day_of_the_week_word = "Четверг";
            break;
        case 5: 
            day_of_the_week_word = "Пятница";
            break;
        case 6: 
            day_of_the_week_word = "Суббота";
            break;
        case 7: 
            day_of_the_week_word = "Воскресенье";
            break;
        default:
            day_of_the_week_word = "Ошибка: такого дня нет!";
            break;
    }
    prompt(day_of_the_week_word);
};
function lvl_1_task_4() {
    // Напиши цикл, который выводит числа от 1 до 5 включительно.
    let counter = 1;
    while (counter <= 5) {
        console.log(counter++);
    }
};
function lvl_1_task_5() {
    // Напиши цикл for , который выводит квадраты чисел от 1 до 10 (например, 1 4 9 16 … ).
    for (let i = 1; i < 11; i++) {
        console.log(Math.pow(i,2));
    }
};
// block 2
function lvl_2_task_1() {
    const isAdmin = true;
    const hasToken = false;
    let isAdmin_user_answer = prompt('Вы - админ? Введите любое число символов, если да. Иначе введите пустое значение: ');
    let hasToken_user_answer = prompt('У Вас есть токен? Введите любое число символов, если да. Иначе введите пустое значение: ');
    console.log(Boolean(isAdmin_user_answer), Boolean (hasToken_user_answer));
    if (isAdmin_user_answer == isAdmin || hasToken_user_answer != hasToken){
        prompt("Доступ разрешён");
    } else {
        prompt("Нет доступа");
    };
};

function lvl_2_task_2() {
    // // наглядно:
    const min_value = 10;
    const max_value = 20;
    const banned_value = 15;
    for (let i = 9; i <= 21; i++) {
        if (i >= 10 && i != 15 && i <= 20) {console.log(i, ' принадлежит диапозону [10;20] и не равна 15');}
    };
};

function lvl_2_task_2_1() {
    // по тз: 
    let value = 1;
    if (value >= 10 && value != 15 && value <= 20) {return true}
    value = 12;
    if (value >= 10 && value != 15 && value <= 20) {return true}
    value = 15;
    if (value >= 10 && value != 15 && value <= 20) {return true}
    value = 20;
    if (value >= 10 && value != 15 && value <= 20) {return true}
};

function lvl_2_task_3() {
    const user_value = Number(prompt('Введите целое число от 1 до 100:'));
    let user_value_counter = user_value;
    if (user_value_counter >= 1 && user_value_counter <= 100) {
        while (user_value_counter >= 0) {
            console.log(user_value_counter--);
        }
    }
};
function lvl_2_task_4() {
    for (let i = 1; i <= 10; i++) {
    if (i == 7) {continue};
    if (i == 9) {break};
    console.log (i);
    }
    console.log(7, ' ', 9, ' ', 10, 'вне цикла');
};

function lvl_2_task_5() {
    // будем считать, что в тз подрузмевалось, что эти числа находятся на одной прямой и у нас возможны отрицательные числа. 
    // ленивое решение
    const a = 12;
    const b = 0;
    const c = -15;
    let ab = 0;
    let ac = 0;
    let bc = 0;
    if (a >= 0 && b >= 0 || a <= 0 && b <= 0) {
        ab = Math.abs(a - b);
    } else {
        ab = Math.abs(a) + Math.abs(b);
    }
    if (a >= 0 && c >= 0 || a <= 0 && c <= 0) {
        ac = Math.abs(a - c);
    } else {
        ac = Math.abs(a) + Math.abs(c);
    }
    if (b >= 0 && c >= 0 || b <= 0 && c <= 0) {
        bc = Math.abs(b - c);
    } else {
        bc = Math.abs(b) + Math.abs(c);
    }
    console.log(Math.max(ab, bc, ac), ' наибольший из отрезков среди чисел ', a, " ", b, " ", c);
    // в тз не требуется выводить имя наибольшего отрезка, пришлось бы дописывать ответ для случая равных отрезков
};
// block 3
function lvl_3_task_1() {
    // в тз не сказано, но считаем, что важна только точная граница справа (<=)
    let temperature = Number(prompt('Введите температуру в градусах °C:'));
    // через тернарники выходит длиннее, поэтому без них: 
    // (temperature <= -30) ? console.log("Оставайтесь дома!") : (false);
    if (temperature <= -30) {console.log("Оставайтесь дома!")}
    if (temperature > -30 && temperature <= -10) {console.log("Сегодня холодно")}
    if (temperature > -10 && temperature <= +5) {console.log("Не холодно")}
    if (temperature > +5 && temperature <= +15) {console.log("Тепло")}
    if (temperature > +15 && temperature <= +25) {console.log("Очень тепло")}
    if (temperature > +25 && temperature <= +35) {console.log("Жарко")}
    if (temperature > +35) {console.log("Пекло!")}
};
function lvl_3_task_2() {
    const user_role = prompt('Укажите свою роль: admin, manager, user, guest: ');
    let user_flag = 4;
    if (user_role == 'admin') {user_flag = 0};
    if (user_role == 'manager') {user_flag = 1};
    if (user_role == 'user') {user_flag = 2};
    if (user_role == 'guest') {user_flag = 3};
    switch (user_flag) {
        case 0:
            console.log("Добро пожаловать, администратор!");
            break;
        case 1:
            console.log("Привет, менеджер!");
            break;
        case 2:
            console.log("Рады видеть вас снова!");
            break;
        case 3:
            console.log("Пожалуйста, войдите в систему");
            break;
        case 4:
            console.log("Введеной роли не существует");
            break;
    }
};

function lvl_3_task_3() {
    const n = 150; //число автомобилей
    const m = 15; // минимум автомобилей
    const x = 2; // уменьшение автомобилей в X раз. задача не требовала, но для масштабируемости пропишем
    // нет инфы, как считаем, если число автомобилей окажется нечетным, будем округлять без остатка 
    let current_auto = n; 
    let day = 0;
    while (current_auto >= m) {
        current_auto = parseInt(current_auto/x);
        day++;
    }
    // никто не просил, но оставим current_auto в выводе для контроля 
    console.log(`На ${day}-ый день количество машин (${current_auto}) стало меньше ${m}`);
};
function lvl_3_task_4() {
    // из вики:
    // год, номер которого кратен 400, — високосный;
    // остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
    // остальные годы, номер которых кратен 4, — високосные
    // все остальные годы — невисокосные
    const start_year = 1800;
    const finish_year = 2020;
    let space_flight;
    let space_flight_counter = 0;
    for (let year = start_year; year < finish_year; year++) {
        space_flight_counter++;
        if (year === 1961) {
            space_flight = year;
            console.log(`Год первого полёта человека в космос - ${year}. Число итераций с ${start_year} = ${space_flight_counter}`)
            break;
        }
    }
    let leap_year_counter = 0;
    let iteration_counter = 0;
    for (let year = start_year; year <= finish_year; year++) {
        iteration_counter++;
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leap_year_counter++;
        }
    }
    console.log(`Количество високосных лет между ${start_year} и ${finish_year} годами = ${leap_year_counter}. Число итераций: ${iteration_counter}.`);
};