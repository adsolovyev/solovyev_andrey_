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

// ============================================================================================================================

// Unit 1
/**
 * Дана сложная структура данных - массив объектов пользователей.
 * Нужно преобразовать её в новую структуру, сгруппировав по отделам
 * и вычислив агрегированные данные.
 */
// Задача: Преобразовать в структуру:
// {
//   departments: {
//     Engineering: {
//       employeeCount: 2,
//       totalSalary: 170000,
//       avgSalary: 85000,
//       skills: ["JavaScript", "React", "Node.js", "Python", "Django", "AWS"],
//       projects: {
//         "Project A": { totalHours: 70, completed: true },
//         "Project B": { totalHours: 25, completed: false },
//         "Project C": { totalHours: 50, completed: true }
//       }
//     },
//     // ... другие отделы
//   }
// }
const users = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    skills: ["JavaScript", "React", "Node.js"],
    projects: [
      { name: "Project A", hours: 40, completed: true },
      { name: "Project B", hours: 25, completed: false }
    ],
    salary: 80000
  },
  {
    id: 2,
    name: "Bob",
    department: "Engineering",
    skills: ["Python", "Django", "AWS"],
    projects: [
      { name: "Project A", hours: 30, completed: true },
      { name: "Project C", hours: 50, completed: true }
    ],
    salary: 90000
  },
  {
    id: 3,
    name: "Charlie",
    department: "Design",
    skills: ["Figma", "UI/UX", "Photoshop"],
    projects: [
      { name: "Project B", hours: 20, completed: false },
      { name: "Project D", hours: 35, completed: true }
    ],
    salary: 70000
  }
];
// Решение Unit 1: 
function unit_1(users) {
    // создаем новый пустой массив. для каждого элемента из старого массива проверяем, занесен ли департамент в новый массив
    // если нет - создаем новый элемент массива с нулевыми параметрами, иначе увеличиваем число сотрудников и ЗП
    const reorganized = { departments: {} };
    for (let user of users) {
        const dept = user.department;

        if (!reorganized.departments[dept]) {
            reorganized.departments[dept] = {
                employeeCount: 0,
                totalSalary: 0,
                skills: [],
                projects: {}
            };
        }

        const department = reorganized.departments[dept];

        department.employeeCount++;
        department.totalSalary += user.salary;

        // добавляем скилы: проверяем каждый скил каждого юзера: если он не занесен, пушим 
        user.skills.forEach(skill => {
            if (!department.skills.includes(skill)) {
                department.skills.push(skill);
            }
        });
        // аналогично подсчет данных по проектам: для каждого проекта из users, если его нет в новом массиве - добавить с пустым шаблоном,
        // иначе добавить часы 
        user.projects.forEach(project => {
            const projectName = project.name;

            if (!department.projects[projectName]) {
                department.projects[projectName] = {
                    totalHours: 0,
                    completed: project.completed
                };
            }

            department.projects[projectName].totalHours += project.hours;

            if (!project.completed) {
                department.projects[projectName].completed =  false;
            }
        });
    }

    // подсчет финансов
    for (let dept in reorganized.departments) {
        reorganized.departments[dept].avgSalary = Math.round(reorganized.departments[dept].totalSalary / reorganized.departments[dept].employeeCount);
    }

    return reorganized;
}

// Unit 1 - test: (быстрое решение через JSON из интернета, потому что простой console.log не раскрывает массивы и объекты)
// console.log(JSON.stringify(unit_1(users), null, 2));

// Unit2
/**
 * Дано дерево категорий товаров. Нужно выполнить несколько преобразований:
 * 1. Удалить категории с isActive: false
 * 2. Для категорий с discount > 0 применить скидку к price
 * 3. Преобразовать структуру, добавив вычисляемые поля
 * 4. Отсортировать подкатегории по price (upd: по убыванию и по возрастанию; структура не задана)
 */

const categories = [
  {
    id: 1,
    name: "Electronics",
    isActive: true,
    products: [
      { id: 101, name: "Laptop", price: 1000, discount: 10, inStock: true },
      { id: 102, name: "Phone", price: 500, discount: 0, inStock: false }
    ],
    subcategories: [
      {
        id: 2,
        name: "Computers",
        isActive: true,
        products: [
          { id: 201, name: "Gaming PC", price: 1500, discount: 15, inStock: true },
          { id: 202, name: "Monitor", price: 300, discount: 5, inStock: true }
        ],
        subcategories: [
          {
            id: 3,
            name: "Components",
            isActive: false, // Должна быть удалена
            products: [
              { id: 301, name: "GPU", price: 800, discount: 0, inStock: true }
            ]
          }
        ]
      }
    ]
  }
];


/**
 * Анализ данных о продажах за разные периоды с множественными условиями
 */

const salesData = [
  {
    date: "2024-01-15",
    region: "North",
    products: [
      { category: "Electronics", name: "Laptop", price: 1000, quantity: 2 },
      { category: "Electronics", name: "Phone", price: 500, quantity: 5 },
      { category: "Books", name: "JS Guide", price: 40, quantity: 10 }
    ],
    discountApplied: true
  },
  {
    date: "2024-01-16",
    region: "South",
    products: [
      { category: "Electronics", name: "Tablet", price: 300, quantity: 3 },
      { category: "Clothing", name: "Shirt", price: 25, quantity: 8 }
    ],
    discountApplied: false
  },
  // ... больше данных
];


// Задачи:
// 1. Сгруппировать продажи по месяцам и регионам
// 2. Вычислить общую выручку по каждой категории
// 3. Найти категории с наибольшим количеством проданных товаров
// 4. Рассчитать средний чек с учётом discountApplied
// 5. Построить матрицу: регионы × категории × общая выручка

// Ожидаемый результат - сложная агрегированная структура

/**
 * Работа с очень большими массивами (представьте, что здесь 100,000+ элементов)
 * Нужно найти оптимальные решения без ухудшения производительности
 */

const hugeDataset = Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  userId: Math.floor(Math.random() * 1000) + 1,
  transactionId: `TXN${Date.now()}_${index}`,
  amount: Math.random() * 1000,
  category: ["food", "transport", "entertainment", "shopping"][index % 4],
  timestamp: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
  tags: Array.from({ length: Math.floor(Math.random() * 5) + 1 },
    (_, i) => `tag${(index + i) % 20}`),
  metadata: {
    location: `location_${index % 50}`,
    device: ["mobile", "desktop", "tablet"][index % 3],
    sessionDuration: Math.random() * 3600
  }
}));

// Задачи:
// 1. Найти топ-10 пользователей по общей сумме транзакций
// 2. Построить распределение трат по категориям за последние 30 дней
// 3. Найти корреляцию между sessionDuration и amount
// 4. Сгруппировать по location и device, вычислив средний чек
// 5. Реализовать пагинацию с фильтрацией по multiple criteria

// Требование: избегать O(n²) сложности, использовать оптимальные структуры данных


/**
 * Работа с графом зависимостей модулей системы
 * Нужно решить несколько сложных задач с циклическими зависимостями
 */

const moduleGraph = {
  "auth-service": {
    dependencies: ["database", "logging"],
    version: "1.0.0",
    metadata: { priority: "high", team: "core" }
  },
  "database": {
    dependencies: ["config", "logging"],
    version: "2.1.0",
    metadata: { priority: "critical", team: "infra" }
  },
  "logging": {
    dependencies: ["config"],
    version: "1.2.0",
    metadata: { priority: "medium", team: "infra" }
  },
  "config": {
    dependencies: [],
    version: "1.0.0",
    metadata: { priority: "critical", team: "infra" }
  },
  "user-profile": {
    dependencies: ["auth-service", "database", "image-processing"],
    version: "1.5.0",
    metadata: { priority: "medium", team: "features" }
  },
  "image-processing": {
    dependencies: ["auth-service"], // Циклическая зависимость!
    version: "2.0.0",
    metadata: { priority: "low", team: "features" }
  }
};

// Задачи:
// 1. Найти все циклические зависимости
// 2. Построить оптимальный порядок загрузки модулей
// 3. Сгруппировать модули по командам (team) с их зависимостями
// 4. Найти "мосты" - модули, отказ которых нарушает работу системы
// 5. Сгенерировать отчет о влиянии изменений в одном модуле

// Ожидается использование алгоритмов обхода графов (DFS/BFS)