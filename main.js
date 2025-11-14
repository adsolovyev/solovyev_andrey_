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
// {
//   "departments": {
//     "Engineering": {
//       "employeeCount": 2,
//       "totalSalary": 170000,
//       "skills": [
//         "JavaScript",
//         "React",
//         "Node.js",
//         "Python",
//         "Django",
//         "AWS"
//       ],
//       "projects": {
//         "Project A": {
//           "totalHours": 70,
//           "completed": true
//         },
//         "Project B": {
//           "totalHours": 25,
//           "completed": false
//         },
//         "Project C": {
//           "totalHours": 50,
//           "completed": true
//         }
//       },
//       "avgSalary": 85000
//     },
//     "Design": {
//       "employeeCount": 1,
//       "totalSalary": 70000,
//       "skills": [
//         "Figma",
//         "UI/UX",
//         "Photoshop"
//       ],
//       "projects": {
//         "Project B": {
//           "totalHours": 20,
//           "completed": false
//         },
//         "Project D": {
//           "totalHours": 35,
//           "completed": true
//         }
//       },
//       "avgSalary": 70000
//     }
//   }
// }

// Unit2
/**
 * Дано дерево категорий товаров. Нужно выполнить несколько преобразований:
 * 1. Удалить категории с isActive: false
 * 2. Для категорий с discount > 0 применить скидку к price
 * 3. Преобразовать структуру, добавив вычисляемые поля (структура не задана специально)
 * 4. Отсортировать подкатегории по price (upd: по убыванию и по возрастанию)
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

function unit_2_step_1(categories) {
  // отфильтровываем isActive = false - они не попадают в новый массив 
  const activeCategories = categories.filter(function(category) {
    return category.isActive;
  });
  // новый массив рекурсивно обрабатываем: 
  const result = activeCategories.map(function(category) {
    const newCategory = {... category};
    const subcategories = category.subcategories || [];
    newCategory.subcategories = unit_2_step_1(subcategories);
    return newCategory;
  });
  return result;
}

const activeCategories = unit_2_step_1(categories);
// Проверка 1 шага: 
// console.log(JSON.stringify(activeCategories, null, 2));
// получили: 
// [
//   {
//     "id": 1,
//     "name": "Electronics",
//     "isActive": true,
//     "products": [
//       {
//         "id": 101,
//         "name": "Laptop",
//         "price": 1000,
//         "discount": 10,
//         "inStock": true
//       },
//       {
//         "id": 102,
//         "name": "Phone",
//         "price": 500,
//         "discount": 0,
//         "inStock": false
//       }
//     ],
//     "subcategories": [
//       {
//         "id": 2,
//         "name": "Computers",
//         "isActive": true,
//         "products": [
//           {
//             "id": 201,
//             "name": "Gaming PC",
//             "price": 1500,
//             "discount": 15,
//             "inStock": true
//           },
//           {
//             "id": 202,
//             "name": "Monitor",
//             "price": 300,
//             "discount": 5,
//             "inStock": true
//           }
//         ],
//         "subcategories": []
//       }
//     ]
//   }
// ]

function unit_2_step_2(categories) {
  return categories.map(function(category) {
    const discountedProducts = category.products.map(function(product) {
      if (product.discount > 0) {
        return {
          ...product, price: product.price - (product.price * product.discount / 100)
        };
      }
      return product;
    });
    return {
      ...category, products: discountedProducts, subcategories: unit_2_step_2(category.subcategories)
    };
  });
}
const categoriesWithDiscounts = unit_2_step_2(activeCategories);
// console.log(JSON.stringify(categoriesWithDiscounts, null, 2));
// [
//   {
//     "id": 1,
//     "name": "Electronics",
//     "isActive": true,     
//     "products": [
//       {
//         "id": 101,        
//         "name": "Laptop", 
//         "price": 900,     
//         "discount": 10,   
//         "inStock": true   
//       },
//       {
//         "id": 102,        
//         "name": "Phone",  
//         "price": 500,     
//         "discount": 0,    
//         "inStock": false  
//       }
//     ],
//     "subcategories": [
//       {
//         "id": 2,
//         "name": "Computers",
//         "isActive": true,
//         "products": [
//           {
//             "id": 201,
//             "name": "Gaming PC",
//             "price": 1275,
//             "discount": 15,
//             "inStock": true
//           },
//           {
//             "id": 202,
//             "name": "Monitor",
//             "price": 285,
//             "discount": 5,
//             "inStock": true
//           }
//         ],
//         "subcategories": []
//       }
//     ]
//   }
// ]

function unit2_step_3(categories) {
  return categories.map(function(category) {
    const productsWithFields = category.products.map(function(product) {
      return {
        ...product,
        hasDiscount: product.discount > 0,
        isAvailable: product.inStock
      };
    });
    
    const subcategoriesWithFields = unit2_step_3(category.subcategories);
    
    const currentCategoryProducts = productsWithFields.length;
    const subcategoriesProducts = subcategoriesWithFields.reduce(function(total, subcat) {
      return total + subcat.totalProducts;
    }, 0);
    
    return {
      ...category,
      products: productsWithFields,
      subcategories: subcategoriesWithFields,
      totalProducts: currentCategoryProducts + subcategoriesProducts,
      hasSubcategories: subcategoriesWithFields.length > 0
    };
  });
}

const categoriesWithCalculatedFields = unit2_step_3(categoriesWithDiscounts);
// console.log(JSON.stringify(categoriesWithCalculatedFields, null, 2));
// [
//   {
//     "id": 1,
//     "name": "Electronics",
//     "isActive": true,
//     "products": [
//       {
//         "id": 101,
//         "name": "Laptop",
//         "price": 900,
//         "discount": 10,
//         "inStock": true,
//         "hasDiscount": true,
//         "isAvailable": true
//       },
//       {
//         "id": 102,
//         "name": "Phone",
//         "price": 500,
//         "discount": 0,
//         "inStock": false,
//         "hasDiscount": false,
//         "isAvailable": false
//       }
//     ],
//     "subcategories": [
//       {
//         "id": 2,
//         "name": "Computers",
//         "isActive": true,
//         "products": [
//           {
//             "id": 201,
//             "name": "Gaming PC",
//             "price": 1275,
//             "discount": 15,
//             "inStock": true,
//             "hasDiscount": true,
//             "isAvailable": true
//           },
//           {
//             "id": 202,
//             "name": "Monitor",
//             "price": 285,
//             "discount": 5,
//             "inStock": true,
//             "hasDiscount": true,
//             "isAvailable": true
//           }
//         ],
//         "subcategories": [],
//         "totalProducts": 2,
//         "hasSubcategories": false
//       }
//     ],
//     "totalProducts": 4,
//     "hasSubcategories": true
//   }
// ]

function unit2_step_4_Asc(categories) {
  return categories.map(function(category) {
    const sortedProducts = category.products.slice().sort(function(a, b) {
      return a.price - b.price;
    });
    
    return {
      ...category,
      products: sortedProducts,
      subcategories: unit2_step_4_Asc(category.subcategories)
    };
  });
}

function unit2_step_4_Desc(categories) {
  return categories.map(function(category) {
    const sortedProducts = category.products.slice().sort(function(a, b) {
      return b.price - a.price;
    });
    
    return {
      ...category,
      products: sortedProducts,
      subcategories: unit2_step_4_Desc(category.subcategories)
    };
  });
}

// Использование
const sortedAsc = unit2_step_4_Asc(categoriesWithCalculatedFields);
const sortedDesc = unit2_step_4_Desc(categoriesWithCalculatedFields);
// console.log(JSON.stringify(sortedAsc, null, 2)); // результат для Desc аналогичный
// [
//   {
//     "id": 1,
//     "name": "Electronics",   
//     "isActive": true,        
//     "products": [
//       {
//         "id": 102,
//         "name": "Phone",     
//         "price": 500,        
//         "discount": 0,       
//         "inStock": false,    
//         "hasDiscount": false,
//         "isAvailable": false 
//       },
//       {
//         "id": 101,
//         "name": "Laptop",    
//         "price": 900,        
//         "discount": 10,      
//         "inStock": true,
//         "hasDiscount": true,
//         "isAvailable": true
//       }
//     ],
//     "subcategories": [
//       {
//         "id": 2,
//         "name": "Computers",
//         "isActive": true,
//         "products": [
//           {
//             "id": 202,
//             "name": "Monitor",
//             "price": 285,
//             "discount": 5,
//             "inStock": true,
//             "hasDiscount": true,
//             "isAvailable": true
//           },
//           {
//             "id": 201,
//             "name": "Gaming PC",
//             "price": 1275,
//             "discount": 15,
//             "inStock": true,
//             "hasDiscount": true,
//             "isAvailable": true
//           }
//         ],
//         "subcategories": [],
//         "totalProducts": 2,
//         "hasSubcategories": false
//       }
//     ],
//     "totalProducts": 4,
//     "hasSubcategories": true
//   }
// ]

/** Unit 3
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
// Решение: пункт 1
function groupByMonthAndRegion(data) {
  const grouped = {};
  
  data.forEach(sale => {
    const month = sale.date.substring(0, 7); // "2024-01"
    const region = sale.region;
    
    if (!grouped[month]) {
      grouped[month] = {};
    }
    
    if (!grouped[month][region]) {
      grouped[month][region] = [];
    }
    
    grouped[month][region].push(sale);
  });
  
  return grouped;
}
// пункт 2
function getRevenueByCategory(data) {
  const revenueByCategory = {};
  
  data.forEach(sale => {
    sale.products.forEach(product => {
      const category = product.category;
      const revenue = product.price * product.quantity;
      
      revenueByCategory[category] = (revenueByCategory[category] || 0) + revenue;
    });
  });
  
  return revenueByCategory;
}
// пункт 3
function getTopCategoriesByQuantity(data) {
  const quantityByCategory = {};
  
  data.forEach(sale => {
    sale.products.forEach(product => {
      const category = product.category;
      quantityByCategory[category] = (quantityByCategory[category] || 0) + product.quantity;
    });
  });
  // desc sort
  return Object.entries(quantityByCategory)
    .sort(([, a], [, b]) => b - a)
    .map(([category, quantity]) => ({ category, quantity }));
}
// пункт 4 
function getAverageTicket(data) {
  let totalRevenue = 0;
  let totalTransactions = data.length;
  
  data.forEach(sale => {
    const transactionTotal = sale.products.reduce((sum, product) => {
      return sum + (product.price * product.quantity);
    }, 0);
    
    // Применяем скидку 10%, если discountApplied = true
    const finalAmount = sale.discountApplied ? transactionTotal * 0.9 : transactionTotal;
    totalRevenue += finalAmount;
  });
  
  return totalTransactions > 0 ? totalRevenue / totalTransactions : 0;
}
// пункт 5
function buildRevenueMatrix(data) {
  const matrix = {};
  const regions = [...new Set(data.map(sale => sale.region))];
  const categories = new Set();
  
  // Собираем все категории
  data.forEach(sale => {
    sale.products.forEach(product => {
      categories.add(product.category);
    });
  });
  
  // Инициализируем матрицу
  regions.forEach(region => {
    matrix[region] = {};
    categories.forEach(category => {
      matrix[region][category] = 0;
    });
  });
  
  // Заполняем матрицу данными
  data.forEach(sale => {
    const region = sale.region;
    
    sale.products.forEach(product => {
      const category = product.category;
      const revenue = product.price * product.quantity;
      
      matrix[region][category] += revenue;
    });
  });
  
  return matrix;
}
// тест: 
// console.log("1. Группировка по месяцам и регионам:");
// console.log(groupByMonthAndRegion(salesData));

// console.log("\n2. Выручка по категориям:");
// console.log(getRevenueByCategory(salesData));

// console.log("\n3. Категории по количеству продаж:");
// console.log(getTopCategoriesByQuantity(salesData));

// console.log("\n4. Средний чек:");
// console.log(getAverageTicket(salesData).toFixed(2));

// console.log("\n5. Матрица регионы × категории:");
// console.log(buildRevenueMatrix(salesData));



/** Unit 4
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
function getTopUsersByAmount(dataset) {
  // O(n) - один проход по данным
  const userTotals = new Map();
  
  for (const transaction of dataset) {
    const current = userTotals.get(transaction.userId) || 0;
    userTotals.set(transaction.userId, current + transaction.amount);
  }
  
  // O(m log m) где m - количество уникальных пользователей (обычно m << n)
  return Array.from(userTotals.entries())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([userId, total]) => ({ userId, total }));
}
function getCategoryDistributionLast30Days(dataset) {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const categoryTotals = new Map();
  let count = 0;
  
  // O(n) - фильтрация и агрегация за один проход
  for (const transaction of dataset) {
    if (transaction.timestamp >= thirtyDaysAgo) {
      const current = categoryTotals.get(transaction.category) || 0;
      categoryTotals.set(transaction.category, current + transaction.amount);
      count++;
    }
  }
  
  return {
    distribution: Object.fromEntries(categoryTotals),
    totalTransactions: count
  };
}
function calculateCorrelation(dataset) {
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  let n = 0;
  
  // O(n) - один проход с накоплением сумм
  for (const transaction of dataset) {
    const x = transaction.metadata.sessionDuration;
    const y = transaction.amount;
    
    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumX2 += x * x;
    sumY2 += y * y;
    n++;
  }
  
  if (n === 0) return 0;
  
  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt(
    (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
  );
  
  return denominator === 0 ? 0 : numerator / denominator;
}
function getAverageTicketByLocationDevice(dataset) {
  // O(n) - один проход с использованием составных ключей
  const groups = new Map();
  
  for (const transaction of dataset) {
    const key = `${transaction.metadata.location}|${transaction.metadata.device}`;
    
    if (!groups.has(key)) {
      groups.set(key, {
        location: transaction.metadata.location,
        device: transaction.metadata.device,
        totalAmount: 0,
        count: 0
      });
    }
    
    const group = groups.get(key);
    group.totalAmount += transaction.amount;
    group.count++;
  }
  
  // O(m) - постобработка результатов
  return Array.from(groups.values()).map(group => ({
    ...group,
    averageTicket: group.totalAmount / group.count
  }));
}
class TransactionPaginator {
  constructor(dataset) {
    this.dataset = dataset;
    this.filteredIndexes = null;
  }
  
  // O(n) - предварительная фильтрация индексов
  applyFilters(filters = {}) {
    const indexes = [];
    
    for (let i = 0; i < this.dataset.length; i++) {
      const transaction = this.dataset[i];
      let matches = true;
      
      if (filters.category && transaction.category !== filters.category) {
        matches = false;
      }
      if (filters.minAmount && transaction.amount < filters.minAmount) {
        matches = false;
      }
      if (filters.maxAmount && transaction.amount > filters.maxAmount) {
        matches = false;
      }
      if (filters.device && transaction.metadata.device !== filters.device) {
        matches = false;
      }
      if (filters.startDate && transaction.timestamp < filters.startDate) {
        matches = false;
      }
      if (filters.endDate && transaction.timestamp > filters.endDate) {
        matches = false;
      }
      if (filters.tags && filters.tags.some(tag => 
        !transaction.tags.includes(tag))) {
        matches = false;
      }
      
      if (matches) indexes.push(i);
    }
    
    this.filteredIndexes = indexes;
    return this;
  }
  
  // O(k) где k - размер страницы
  getPage(page = 1, pageSize = 20) {
    if (!this.filteredIndexes) {
      this.filteredIndexes = Array.from({ length: this.dataset.length }, (_, i) => i);
    }
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageIndexes = this.filteredIndexes.slice(startIndex, endIndex);
    
    return {
      data: pageIndexes.map(index => this.dataset[index]),
      currentPage: page,
      pageSize,
      totalItems: this.filteredIndexes.length,
      totalPages: Math.ceil(this.filteredIndexes.length / pageSize)
    };
  }
}

// Использование:
const paginator = new TransactionPaginator(hugeDataset);
const result = paginator
  .applyFilters({
    category: 'food',
    minAmount: 100,
    device: 'mobile'
  })
  .getPage(1, 20);
function benchmark() {
  console.time('Top Users');
  const topUsers = getTopUsersByAmount(hugeDataset);
  console.timeEnd('Top Users');
  
  console.time('Category Distribution');
  const distribution = getCategoryDistributionLast30Days(hugeDataset);
  console.timeEnd('Category Distribution');
  
  console.time('Correlation');
  const correlation = calculateCorrelation(hugeDataset);
  console.timeEnd('Correlation');
  
  console.time('Grouping');
  const grouped = getAverageTicketByLocationDevice(hugeDataset);
  console.timeEnd('Grouping');
  
  console.time('Pagination');
  const paginated = new TransactionPaginator(hugeDataset)
    .applyFilters({ category: 'food', minAmount: 100 })
    .getPage(1, 20);
  console.timeEnd('Pagination');
  
  return { topUsers, distribution, correlation, grouped, paginated };
}

// benchmark();

/** Unit 5
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
function findCyclicDependencies(graph) {
  const cycles = [];
  const visited = new Set();
  const recursionStack = new Set();
  const path = [];

  function dfs(module) {
    if (recursionStack.has(module)) {
      // Нашли цикл
      const cycleStart = path.lastIndexOf(module);
      const cycle = path.slice(cycleStart);
      cycles.push([...cycle, module]);
      return;
    }

    if (visited.has(module)) return;

    visited.add(module);
    recursionStack.add(module);
    path.push(module);

    const dependencies = graph[module]?.dependencies || [];
    for (const dep of dependencies) {
      if (graph[dep]) {
        dfs(dep);
      }
    }

    recursionStack.delete(module);
    path.pop();
  }

  for (const module of Object.keys(graph)) {
    if (!visited.has(module)) {
      dfs(module);
    }
  }

  return cycles;
}
function getLoadOrder(graph) {
  const visited = new Set();
  const temp = new Set();
  const order = [];
  let hasCycle = false;

  function visit(module) {
    if (temp.has(module)) {
      hasCycle = true;
      return;
    }

    if (visited.has(module)) return;

    temp.add(module);
    
    const dependencies = graph[module]?.dependencies || [];
    for (const dep of dependencies) {
      if (graph[dep]) {
        visit(dep);
      }
    }

    temp.delete(module);
    visited.add(module);
    order.push(module);
  }

  for (const module of Object.keys(graph)) {
    if (!visited.has(module)) {
      visit(module);
    }
  }

  return hasCycle ? null : order.reverse();
}

// Альтернатива с Kahn's algorithm (более эффективна для больших графов)
function getLoadOrderKahn(graph) {
  const inDegree = {};
  const queue = [];
  const order = [];

  // Инициализация степеней входа
  for (const module of Object.keys(graph)) {
    inDegree[module] = 0;
  }

  // Вычисление степеней входа
  for (const [module, data] of Object.entries(graph)) {
    for (const dep of data.dependencies) {
      inDegree[dep] = (inDegree[dep] || 0) + 1;
    }
  }

  // Добавляем модули с нулевой степенью входа
  for (const [module, degree] of Object.entries(inDegree)) {
    if (degree === 0) {
      queue.push(module);
    }
  }

  // Обработка очереди
  while (queue.length > 0) {
    const current = queue.shift();
    order.push(current);

    for (const dep of graph[current].dependencies) {
      inDegree[dep]--;
      if (inDegree[dep] === 0) {
        queue.push(dep);
      }
    }
  }

  // Проверка на циклы
  if (order.length !== Object.keys(graph).length) {
    return null; // Есть циклы
  }

  return order;
}
function groupByTeamWithDependencies(graph) {
  const teams = {};

  // Сначала группируем по командам
  for (const [module, data] of Object.entries(graph)) {
    const team = data.metadata.team;
    if (!teams[team]) {
      teams[team] = {
        modules: new Set(),
        internalDeps: new Set(),
        externalDeps: new Set()
      };
    }
    teams[team].modules.add(module);
  }

  // Анализируем зависимости
  for (const [module, data] of Object.entries(graph)) {
    const team = data.metadata.team;
    
    for (const dep of data.dependencies) {
      const depTeam = graph[dep]?.metadata.team;
      
      if (depTeam === team) {
        teams[team].internalDeps.add(`${module} -> ${dep}`);
      } else if (depTeam) {
        teams[team].externalDeps.add(`${module} -> ${dep} (${depTeam})`);
      }
    }
  }

  // Преобразуем Sets в Arrays для вывода
  const result = {};
  for (const [team, data] of Object.entries(teams)) {
    result[team] = {
      modules: Array.from(data.modules),
      internalDependencies: Array.from(data.internalDeps),
      externalDependencies: Array.from(data.externalDeps)
    };
  }

  return result;
}
function findCriticalModules(graph) {
  const critical = [];
  const modules = Object.keys(graph);

  function bfsWithoutModule(skipModule) {
    const visited = new Set();
    const queue = [];
    
    // Начинаем с любого модуля, кроме пропускаемого
    const startModule = modules.find(m => m !== skipModule);
    if (!startModule) return 0;

    queue.push(startModule);
    visited.add(startModule);

    while (queue.length > 0) {
      const current = queue.shift();
      
      for (const dep of graph[current].dependencies) {
        if (dep !== skipModule && !visited.has(dep) && graph[dep]) {
          visited.add(dep);
          queue.push(dep);
        }
      }
    }

    return visited.size;
  }

  const totalReachable = bfsWithoutModule(null);

  for (const module of modules) {
    const reachableWithout = bfsWithoutModule(module);
    
    // Если количество достижимых модулей значительно уменьшилось
    if (reachableWithout < totalReachable - 2) { // -2 потому что пропускаем сам модуль и его прямые зависимости
      critical.push({
        module,
        reachableWithout,
        impact: ((totalReachable - reachableWithout) / totalReachable * 100).toFixed(1) + '%'
      });
    }
  }

  return critical.sort((a, b) => b.impact - a.impact);
}
function generateImpactReport(graph, targetModule, changeType = 'modification') {
  const visited = new Set();
  const affected = new Map(); // module -> {reason, depth}

  function findDependents(module, depth = 0, reason = 'direct') {
    if (visited.has(module)) return;
    visited.add(module);

    // Ищем все модули, которые зависят от текущего
    for (const [otherModule, data] of Object.entries(graph)) {
      if (data.dependencies.includes(module)) {
        if (!affected.has(otherModule)) {
          affected.set(otherModule, {
            reason: depth === 0 ? 'direct' : `through ${module}`,
            depth: depth + 1,
            team: graph[otherModule].metadata.team,
            priority: graph[otherModule].metadata.priority
          });
        }
        findDependents(otherModule, depth + 1, module);
      }
    }
  }

  // Запускаем анализ
  findDependents(targetModule);

  // Группируем результаты
  const byTeam = {};
  const byPriority = {};
  let maxDepth = 0;

  for (const [module, info] of affected) {
    // По командам
    if (!byTeam[info.team]) byTeam[info.team] = [];
    byTeam[info.team].push({ module, ...info });

    // По приоритетам
    if (!byPriority[info.priority]) byPriority[info.priority] = [];
    byPriority[info.priority].push({ module, ...info });

    maxDepth = Math.max(maxDepth, info.depth);
  }

  return {
    targetModule,
    changeType,
    totalAffected: affected.size,
    maxImpactDepth: maxDepth,
    affectedByTeam: byTeam,
    affectedByPriority: byPriority,
    criticalPath: Array.from(affected.entries())
      .filter(([, info]) => info.depth === maxDepth)
      .map(([module]) => module),
    recommendations: generateRecommendations(affected, graph)
  };
}

function generateRecommendations(affected, graph) {
  const recommendations = [];
  const highPriority = Array.from(affected.entries())
    .filter(([, info]) => info.priority === 'critical' || info.priority === 'high');

  if (highPriority.length > 0) {
    recommendations.push(`⚠️  High impact: ${highPriority.length} critical/high priority modules affected`);
  }

  const teams = new Set(Array.from(affected.values()).map(info => info.team));
  if (teams.size > 1) {
    recommendations.push(`👥 Cross-team impact: affects ${teams.size} different teams`);
  }

  return recommendations;
}
function runGraphAnalysis() {
  console.log('1. Циклические зависимости:');
  const cycles = findCyclicDependencies(moduleGraph);
  console.log(cycles);

  console.log('\n2. Порядок загрузки:');
  const loadOrder = getLoadOrderKahn(moduleGraph);
  console.log(loadOrder);

  console.log('\n3. Группировка по командам:');
  const teams = groupByTeamWithDependencies(moduleGraph);
  console.log(teams);

  console.log('\n4. Критические модули:');
  const critical = findCriticalModules(moduleGraph);
  console.log(critical);

  console.log('\n5. Отчет о влиянии изменений в auth-service:');
  const impact = generateImpactReport(moduleGraph, 'auth-service');
  console.log(impact);
}

// runGraphAnalysis();