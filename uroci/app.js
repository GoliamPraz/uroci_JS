const classes = [
    {
        id: 1,
        name: "Клас 1: Променливи и Условия",
        description: "Основи на променливите, операторите и if/else.",
        completed: false,
        theory: `
            <h2>Променливи и Условия</h2>
            <p>В този клас учиш как да пазиш стойности с <code>let</code> и <code>const</code> и как да взимаш решения с <code>if/else</code>.</p>
            <h3>Какво ще можеш след това</h3>
            <ul>
                <li>Да връщаш резултат с <code>return</code></li>
                <li>Да правиш проверки с <code>===</code></li>
                <li>Да пишеш кратки функции с една задача</li>
            </ul>
        `,
        tasks: [
            {
                id: 1,
                title: "Сума на две числа",
                difficulty: "easy",
                rating: 2.0,
                description: "Направи функция sumTwoNumbers(a, b), която връща сбора.",
                signature: "sumTwoNumbers(a, b) => number",
                hint: "Резултат: число | Най-кратко: return a + b;",
                expectedResults: `sumTwoNumbers(2, 3) => 5\nsumTwoNumbers(-1, 1) => 0`,
                starter: "function sumTwoNumbers(a, b) {\n  // твой код тук\n}",
                solution: `function sumTwoNumbers(a, b) {\n  return a + b;\n}`,
                tests: [
                    { input: [2, 3], expected: 5 },
                    { input: [-1, 1], expected: 0 }
                ]
            },
            {
                id: 2,
                title: "Четно ли е",
                difficulty: "easy",
                rating: 2.0,
                description: "Направи функция isEven(n), която връща true само за четни числа.",
                signature: "isEven(n) => boolean",
                hint: "Резултат: true/false | return n % 2 === 0;",
                expectedResults: `isEven(4) => true\nisEven(5) => false`,
                starter: "function isEven(n) {\n  // твой код тук\n}",
                solution: `function isEven(n) {\n  return n % 2 === 0;\n}`,
                tests: [
                    { input: [4], expected: true },
                    { input: [5], expected: false }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Клас 2: Цикли",
        description: "for/while, натрупване и броене.",
        completed: false,
        theory: `
            <h2>Цикли</h2>
            <p>Цикълът повтаря действие много пъти. Най-често ще ползваш <code>for</code> за известен брой стъпки.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Сума от 1 до N",
                difficulty: "easy",
                rating: 2.5,
                description: "Направи функция sumFromOneToN(n), която връща сумата на числата от 1 до n.",
                signature: "sumFromOneToN(n) => number",
                hint: "Ползвай for и натрупване в променлива sum.",
                expectedResults: `sumFromOneToN(3) => 6\nsumFromOneToN(5) => 15`,
                starter: "function sumFromOneToN(n) {\n  // твой код тук\n}",
                solution: `function sumFromOneToN(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) sum += i;\n  return sum;\n}`,
                tests: [
                    { input: [3], expected: 6 },
                    { input: [5], expected: 15 }
                ]
            },
            {
                id: 2,
                title: "Факториел",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция factorial(n), която връща n!.",
                signature: "factorial(n) => number",
                hint: "Започни от result = 1 и умножавай до n.",
                expectedResults: `factorial(1) => 1\nfactorial(5) => 120`,
                starter: "function factorial(n) {\n  // твой код тук\n}",
                solution: `function factorial(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) result *= i;\n  return result;\n}`,
                tests: [
                    { input: [1], expected: 1 },
                    { input: [5], expected: 120 }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Клас 3: Функции",
        description: "Параметри, return и преизползваем код.",
        completed: false,
        theory: `
            <h2>Функции</h2>
            <p>Функцията приема вход, прави логика и връща резултат.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Лице на правоъгълник",
                difficulty: "easy",
                rating: 2.5,
                description: "Направи функция getRectangleArea(width, height), която връща лицето.",
                signature: "getRectangleArea(width, height) => number",
                hint: "Лице = width * height.",
                expectedResults: `getRectangleArea(3, 4) => 12\ngetRectangleArea(5, 2) => 10`,
                starter: "function getRectangleArea(width, height) {\n  // твой код тук\n}",
                solution: `function getRectangleArea(width, height) {\n  return width * height;\n}`,
                tests: [
                    { input: [3, 4], expected: 12 },
                    { input: [5, 2], expected: 10 }
                ]
            },
            {
                id: 2,
                title: "Главни букви",
                difficulty: "easy",
                rating: 2.5,
                description: "Направи функция toUpperText(text), която връща текста с главни букви.",
                signature: "toUpperText(text) => string",
                hint: "Ползвай text.toUpperCase().",
                expectedResults: `toUpperText("abc") => "ABC"\ntoUpperText("Hi") => "HI"`,
                starter: "function toUpperText(text) {\n  // твой код тук\n}",
                solution: `function toUpperText(text) {\n  return text.toUpperCase();\n}`,
                tests: [
                    { input: ["abc"], expected: "ABC" },
                    { input: ["Hi"], expected: "HI" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Клас 4: Масиви",
        description: "Обхождане и пресмятане с array.",
        completed: false,
        theory: `
            <h2>Масиви</h2>
            <p>Масивът съхранява списък от стойности. Ще учиш обхождане с цикъл.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Сума на масив",
                difficulty: "easy",
                rating: 3.0,
                description: "Направи функция sumArray(arr), която връща сумата на всички елементи.",
                signature: "sumArray(arr) => number",
                hint: "for...of + sum.",
                expectedResults: `sumArray([1,2,3]) => 6\nsumArray([5]) => 5`,
                starter: "function sumArray(arr) {\n  // твой код тук\n}",
                solution: `function sumArray(arr) {\n  let sum = 0;\n  for (const n of arr) sum += n;\n  return sum;\n}`,
                tests: [
                    { input: [[1, 2, 3]], expected: 6 },
                    { input: [[5]], expected: 5 }
                ]
            },
            {
                id: 2,
                title: "Брой над 10",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция countGreaterThanTen(arr), която връща колко числа са > 10.",
                signature: "countGreaterThanTen(arr) => number",
                hint: "Увеличавай count при n > 10.",
                expectedResults: `countGreaterThanTen([1,11,20]) => 2\ncountGreaterThanTen([2,3]) => 0`,
                starter: "function countGreaterThanTen(arr) {\n  // твой код тук\n}",
                solution: `function countGreaterThanTen(arr) {\n  let count = 0;\n  for (const n of arr) if (n > 10) count++;\n  return count;\n}`,
                tests: [
                    { input: [[1, 11, 20]], expected: 2 },
                    { input: [[2, 3]], expected: 0 }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Клас 5: Array Методи",
        description: "map, filter, find, reduce.",
        completed: false,
        theory: `
            <h2>Array Методи</h2>
            <p>Ще решаваш задачи по-кратко с <code>map</code>, <code>filter</code> и <code>find</code>.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Удвояване",
                difficulty: "easy",
                rating: 3.0,
                description: "Направи функция doubleArray(arr), която връща нов масив с удвоени стойности.",
                signature: "doubleArray(arr) => number[]",
                hint: "Ползвай arr.map(...).",
                expectedResults: `doubleArray([1,2,3]) => [2,4,6]`,
                starter: "function doubleArray(arr) {\n  // твой код тук\n}",
                solution: `function doubleArray(arr) {\n  return arr.map(n => n * 2);\n}`,
                tests: [
                    { input: [[1, 2, 3]], expected: [2, 4, 6] },
                    { input: [[0]], expected: [0] }
                ]
            },
            {
                id: 2,
                title: "Първо четно",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция findFirstEven(arr), която връща първото четно число или undefined.",
                signature: "findFirstEven(arr) => number|undefined",
                hint: "Ползвай find.",
                expectedResults: `findFirstEven([1,3,8,10]) => 8\nfindFirstEven([1,3]) => undefined`,
                starter: "function findFirstEven(arr) {\n  // твой код тук\n}",
                solution: `function findFirstEven(arr) {\n  return arr.find(n => n % 2 === 0);\n}`,
                tests: [
                    { input: [[1, 3, 8, 10]], expected: 8 },
                    { input: [[1, 3]], expected: undefined }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Клас 6: Обекти",
        description: "Създаване и достъп до object полета.",
        completed: false,
        theory: `
            <h2>Обекти</h2>
            <p>Обектът пази данни като ключ:стойност. Пример: <code>{ name: \"Ivan\", age: 20 }</code>.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Създай потребител",
                difficulty: "easy",
                rating: 3.0,
                description: "Направи функция createUser(name, age), която връща обект с полета name и age.",
                signature: "createUser(name, age) => object",
                hint: "Върни { name, age }.",
                expectedResults: `createUser("Ani", 18) => {name:"Ani",age:18}`,
                starter: "function createUser(name, age) {\n  // твой код тук\n}",
                solution: `function createUser(name, age) {\n  return { name, age };\n}`,
                tests: [
                    { input: ["Ani", 18], expected: { name: "Ani", age: 18 } },
                    { input: ["Bob", 30], expected: { name: "Bob", age: 30 } }
                ]
            },
            {
                id: 2,
                title: "Брой ключове",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция getObjectKeysCount(obj), която връща броя на ключовете.",
                signature: "getObjectKeysCount(obj) => number",
                hint: "Ползвай Object.keys(obj).length.",
                expectedResults: `getObjectKeysCount({a:1,b:2}) => 2`,
                starter: "function getObjectKeysCount(obj) {\n  // твой код тук\n}",
                solution: `function getObjectKeysCount(obj) {\n  return Object.keys(obj).length;\n}`,
                tests: [
                    { input: [{ a: 1, b: 2 }], expected: 2 },
                    { input: [{}], expected: 0 }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Клас 7: String и Math",
        description: "Практични преобразувания и текст.",
        completed: false,
        theory: `
            <h2>String и Math</h2>
            <p>Ще ползваш често <code>Math</code> и string методи за ежедневни задачи.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Celsius към Fahrenheit",
                difficulty: "easy",
                rating: 2.0,
                description: "Направи функция celsiusToFahrenheit(c) по формулата c * 9 / 5 + 32.",
                signature: "celsiusToFahrenheit(c) => number",
                hint: "Резултат: число | return c * 9 / 5 + 32;",
                expectedResults: `celsiusToFahrenheit(0) => 32\ncelsiusToFahrenheit(100) => 212`,
                starter: "function celsiusToFahrenheit(c) {\n  // твой код тук\n}",
                solution: `function celsiusToFahrenheit(c) {\n  return c * 9 / 5 + 32;\n}`,
                tests: [
                    { input: [0], expected: 32 },
                    { input: [100], expected: 212 }
                ]
            },
            {
                id: 2,
                title: "Обърни текст",
                difficulty: "medium",
                rating: 3.0,
                description: "Направи функция reverseText(text), която връща текста обърнат.",
                signature: "reverseText(text) => string",
                hint: "split, reverse, join.",
                expectedResults: `reverseText("abc") => "cba"`,
                starter: "function reverseText(text) {\n  // твой код тук\n}",
                solution: `function reverseText(text) {\n  return text.split('').reverse().join('');\n}`,
                tests: [
                    { input: ["abc"], expected: "cba" },
                    { input: ["a"], expected: "a" }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Клас 8: Условия в Практика",
        description: "Комбинирани проверки и гранични случаи.",
        completed: false,
        theory: `
            <h2>Практични условия</h2>
            <p>Ще комбинираш проверки за реални правила и валидации.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Минимално от три",
                difficulty: "easy",
                rating: 2.5,
                description: "Направи функция minOfThree(a, b, c), която връща най-малкото число.",
                signature: "minOfThree(a, b, c) => number",
                hint: "Ползвай Math.min(a, b, c).",
                expectedResults: `minOfThree(3,2,7) => 2`,
                starter: "function minOfThree(a, b, c) {\n  // твой код тук\n}",
                solution: `function minOfThree(a, b, c) {\n  return Math.min(a, b, c);\n}`,
                tests: [
                    { input: [3, 2, 7], expected: 2 },
                    { input: [-1, -5, 0], expected: -5 }
                ]
            },
            {
                id: 2,
                title: "В диапазон",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция isInRange(n, min, max), която връща true ако n е между min и max включително.",
                signature: "isInRange(n, min, max) => boolean",
                hint: "n >= min && n <= max",
                expectedResults: `isInRange(5,1,10) => true\nisInRange(0,1,10) => false`,
                starter: "function isInRange(n, min, max) {\n  // твой код тук\n}",
                solution: `function isInRange(n, min, max) {\n  return n >= min && n <= max;\n}`,
                tests: [
                    { input: [5, 1, 10], expected: true },
                    { input: [0, 1, 10], expected: false }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Клас 9: По-Силна Логика",
        description: "Работа с масив от обекти и агрегиране.",
        completed: false,
        theory: `
            <h2>Агрегиране на данни</h2>
            <p>Ще смяташ стойности от по-сложни структури, например списъци от обекти.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Брой завършени",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция countCompleted(tasks), която връща броя елементи с completed === true.",
                signature: "countCompleted(tasks) => number",
                hint: "filter по completed === true.",
                expectedResults: `countCompleted([{completed:true},{completed:false}]) => 1`,
                starter: "function countCompleted(tasks) {\n  // твой код тук\n}",
                solution: `function countCompleted(tasks) {\n  return tasks.filter(t => t.completed === true).length;\n}`,
                tests: [
                    { input: [[{ completed: true }, { completed: false }]], expected: 1 },
                    { input: [[{ completed: true }, { completed: true }]], expected: 2 }
                ]
            },
            {
                id: 2,
                title: "Обща сума",
                difficulty: "hard",
                rating: 4.5,
                description: "Направи функция getTotalAmount(items), която връща сумата на полето amount от всички елементи.",
                signature: "getTotalAmount(items) => number",
                hint: "reduce + нач. стойност 0.",
                expectedResults: `getTotalAmount([{amount:5},{amount:7}]) => 12`,
                starter: "function getTotalAmount(items) {\n  // твой код тук\n}",
                solution: `function getTotalAmount(items) {\n  return items.reduce((sum, x) => sum + x.amount, 0);\n}`,
                tests: [
                    { input: [[{ amount: 5 }, { amount: 7 }]], expected: 12 },
                    { input: [[{ amount: 2 }]], expected: 2 }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Клас 10: Надежден Код",
        description: "Проверки, защита от грешни входове.",
        completed: false,
        theory: `
            <h2>Надеждни функции</h2>
            <p>В реални проекти входът не е винаги перфектен. Тук добавяш защитна логика.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Безопасно деление",
                difficulty: "medium",
                rating: 3.5,
                description: "Направи функция safeDivide(a, b), която връща null ако b е 0, иначе a / b.",
                signature: "safeDivide(a, b) => number|null",
                hint: "if (b === 0) return null;",
                expectedResults: `safeDivide(10,2) => 5\nsafeDivide(5,0) => null`,
                starter: "function safeDivide(a, b) {\n  // твой код тук\n}",
                solution: `function safeDivide(a, b) {\n  if (b === 0) return null;\n  return a / b;\n}`,
                tests: [
                    { input: [10, 2], expected: 5 },
                    { input: [5, 0], expected: null }
                ]
            },
            {
                id: 2,
                title: "Нормализирай оценка",
                difficulty: "hard",
                rating: 4.5,
                description: "Направи функция clampGrade(g), която връща число между 2 и 6.",
                signature: "clampGrade(g) => number",
                hint: "Math.max(2, Math.min(6, g))",
                expectedResults: `clampGrade(1) => 2\nclampGrade(4.5) => 4.5\nclampGrade(7) => 6`,
                starter: "function clampGrade(g) {\n  // твой код тук\n}",
                solution: `function clampGrade(g) {\n  return Math.max(2, Math.min(6, g));\n}`,
                tests: [
                    { input: [1], expected: 2 },
                    { input: [4.5], expected: 4.5 },
                    { input: [7], expected: 6 }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Клас 11: Практика",
        description: "Комбинирани функции и валидация.",
        completed: false,
        theory: `
            <h2>Комбиниране на знания</h2>
            <p>Ще съчетаваш string, условия и масиви в една задача.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Първо име",
                difficulty: "easy",
                rating: 3.0,
                description: "Направи функция extractFirstName(fullName), която връща първата дума от текста.",
                signature: "extractFirstName(fullName) => string",
                hint: "split(' ')[0]",
                expectedResults: `extractFirstName("Ivan Petrov") => "Ivan"`,
                starter: "function extractFirstName(fullName) {\n  // твой код тук\n}",
                solution: `function extractFirstName(fullName) {\n  return fullName.split(' ')[0];\n}`,
                tests: [
                    { input: ["Ivan Petrov"], expected: "Ivan" },
                    { input: ["Mira"] , expected: "Mira" }
                ]
            },
            {
                id: 2,
                title: "Проста email проверка",
                difficulty: "medium",
                rating: 4.0,
                description: "Направи функция isValidEmail(email), която връща true ако има '@' и '.'.",
                signature: "isValidEmail(email) => boolean",
                hint: "includes('@') && includes('.')",
                expectedResults: `isValidEmail("a@b.com") => true\nisValidEmail("ab.com") => false`,
                starter: "function isValidEmail(email) {\n  // твой код тук\n}",
                solution: `function isValidEmail(email) {\n  return email.includes('@') && email.includes('.');\n}`,
                tests: [
                    { input: ["a@b.com"], expected: true },
                    { input: ["ab.com"], expected: false }
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Клас 12: Финален",
        description: "Финални задачи и преминаване.",
        completed: false,
        theory: `
            <h2>Финално ниво</h2>
            <p>Този клас проверява дали можеш да смяташ и взимаш решения уверено.</p>
        `,
        tasks: [
            {
                id: 1,
                title: "Среден успех",
                difficulty: "medium",
                rating: 4.0,
                description: "Направи функция calculateAverage(grades), която връща средната стойност на масив с оценки.",
                signature: "calculateAverage(grades) => number",
                hint: "sum / grades.length",
                expectedResults: `calculateAverage([4,5,6]) => 5`,
                starter: "function calculateAverage(grades) {\n  // твой код тук\n}",
                solution: `function calculateAverage(grades) {\n  const sum = grades.reduce((a, b) => a + b, 0);\n  return sum / grades.length;\n}`,
                tests: [
                    { input: [[4, 5, 6]], expected: 5 },
                    { input: [[2, 2, 2]], expected: 2 }
                ]
            },
            {
                id: 2,
                title: "Преминаване",
                difficulty: "hard",
                rating: 5.0,
                description: "Направи функция canPassClass(avg), която връща true ако avg >= 4.",
                signature: "canPassClass(avg) => boolean",
                hint: "return avg >= 4;",
                expectedResults: `canPassClass(4) => true\ncanPassClass(3.99) => false`,
                starter: "function canPassClass(avg) {\n  // твой код тук\n}",
                solution: `function canPassClass(avg) {\n  return avg >= 4;\n}`,
                tests: [
                    { input: [4], expected: true },
                    { input: [3.99], expected: false }
                ]
            }
        ]
    }
];

let currentClassId = 1;
const STORAGE_TASKS_KEY = "tasks";
const STORAGE_CURRENT_CLASS_KEY = "currentClassId";
const API_URL = '/api';
const DEFAULT_USER_ID = localStorage.getItem('userId') || 'user_' + Math.random().toString(36).substr(2, 9);

// MongoDB API Functions
async function loadProgressFromDB() {
    try {
        const response = await fetch(`${API_URL}/progress/${DEFAULT_USER_ID}`);
        const progress = await response.json();
        return progress.completedLessons || [];
    } catch (err) {
        console.warn('MongoDB unavailable, using localStorage:', err.message);
        return [];
    }
}

async function saveProgressToDB(lessonId, taskId, lessonTitle) {
    try {
        const completedTasks = classes
            .find(c => c.id === lessonId)
            ?.tasks.filter(t => t.completed)
            .map(t => t.id) || [];

        const response = await fetch(`${API_URL}/progress/${DEFAULT_USER_ID}/complete-task`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lessonId,
                taskId,
                lessonTitle
            })
        });
        const result = await response.json();
        console.log('✓ Прогреса запазен в MongoDB:', result);
    } catch (err) {
        console.warn('MongoDB save failed, using localStorage:', err.message);
    }
}

async function resetProgressInDB() {
    try {
        await fetch(`${API_URL}/progress/${DEFAULT_USER_ID}`, { method: 'DELETE' });
        console.log('✓ Прогреса изтрит от MongoDB');
    } catch (err) {
        console.warn('MongoDB delete failed:', err.message);
    }
}

function initApp() {
    localStorage.setItem('userId', DEFAULT_USER_ID);
    restoreProgressState();
    renderClasses();
    renderClass(currentClassId);
    updateProgress();
}

function renderClasses() {
    const classList = document.getElementById("classesList");
    classList.innerHTML = "";
    
    classes.forEach(cls => {
        const item = document.createElement("div");
        item.className = "class-item";
        if (cls.completed) item.classList.add("completed");
        if (cls.id > currentClassId) item.classList.add("locked");
        item.textContent = cls.name;
        item.addEventListener("click", () => {
            if (cls.id <= currentClassId) {
                currentClassId = cls.id;
                saveCurrentClassId();
                renderClass(cls.id);
                renderClasses();
            }
        });
        classList.appendChild(item);
    });
}

function renderClass(classId) {
    const cls = classes.find(c => c.id === classId);
    if (!cls) return;
    
    const content = document.getElementById("classContent");
    content.innerHTML = "";
    
    const theorySection = document.createElement("div");
    theorySection.className = "theory-section";
    theorySection.innerHTML = cls.theory;
    content.appendChild(theorySection);
    
    const tasksSection = document.createElement("div");
    tasksSection.className = "tasks-section";
    
    const title = document.createElement("h2");
    title.textContent = "Задачи";
    tasksSection.appendChild(title);
    
    const groups = { easy: [], medium: [], hard: [] };
    cls.tasks.forEach(t => groups[t.difficulty].push(t));
    
    ["easy", "medium", "hard"].forEach(difficulty => {
        if (groups[difficulty].length === 0) return;
        
        const group = document.createElement("div");
        group.className = "difficulty-group";
        
        const label = document.createElement("div");
        label.className = `difficulty-label ${difficulty}`;
        label.textContent = difficulty === "easy" ? "Лесни" : difficulty === "medium" ? "Средни" : "Завършващи";
        group.appendChild(label);
        
        groups[difficulty].forEach(task => {
            group.appendChild(renderTask(task, cls));
        });
        
        tasksSection.appendChild(group);
    });
    
    content.appendChild(tasksSection);
    content.appendChild(renderGradeSection(cls));
}

function renderTask(task, cls) {
    const card = document.createElement("div");
    card.className = "task-card";
    card.id = "task-" + task.id;
    
    const saved = getSaved(cls.id, task.id);
    if (saved && saved.passed) card.classList.add("completed");
    
    const savedCode = saved && saved.code ? saved.code : task.starter;

    card.innerHTML = `
        <div class="task-header">
            <div class="task-title">${task.title}</div>
            <div class="task-rating">Оц: ${task.rating.toFixed(2)}</div>
        </div>
        <div class="task-description">${task.description}</div>
        <div class="task-signature">${task.signature}</div>
        <div class="code-editor">
            <label>Код:</label>
            <textarea id="code-${task.id}" class="task-code">${savedCode}</textarea>
        </div>
        <div class="task-buttons">
            <button class="btn btn-check" onclick="checkTask(${cls.id}, ${task.id})">Провери</button>
            <button class="btn btn-reset-code" onclick="resetCode(${task.id}, ${cls.id})">Нулирай</button>
            <button class="btn btn-solution" onclick="toggleSolution(${task.id})">Решение</button>
        </div>
        <div class="result-message" id="result-${task.id}"></div>
        <div class="test-results" id="tests-${task.id}"></div>
        <div class="solution-box" id="solution-${task.id}">
            <h4>Решение:</h4>
            <div class="solution-code">${task.solution}</div>
        </div>
    `;
    return card;
}

function renderGradeSection(cls) {
    const section = document.createElement("div");
    section.className = "grade-section";
    
    const grades = getClassGrades(cls.id);
    const avg = grades.length > 0 ? grades.reduce((a, b) => a + b) / grades.length : 0;
    const allSolved = cls.tasks.every(t => {
        const s = getSaved(cls.id, t.id);
        return s && s.passed;
    });
    
    section.innerHTML = `
        <div class="grade-info">Среден успех</div>
        <div class="grade-value">${avg.toFixed(2)}</div>
        <div class="grade-message">${allSolved ? "Отлично!" : "Решавай още задачи..."}</div>
        <button class="next-class-btn" onclick="nextClass()" ${!allSolved || avg < 4 ? "disabled" : ""}>
            ${cls.id < classes.length ? "Напред" : "Край"}
        </button>
    `;
    return section;
}

function checkTask(classId, taskId) {
    const cls = classes.find(c => c.id === classId);
    const task = cls.tasks.find(t => t.id === taskId);
    const code = document.getElementById("code-" + taskId).value;
    
    const res = document.getElementById("result-" + taskId);
    const tests = document.getElementById("tests-" + taskId);
    
    res.classList.remove("show", "success", "error");
    tests.classList.remove("show");
    
    try {
        const fn = eval("(" + code + ")");
        
        let pass = 0;
        const results = [];
        
        task.tests.forEach(t => {
            try {
                const out = fn(...t.input);
                const ok = valuesEqual(out, t.expected);
                if (ok) pass++;
                results.push({
                    ok,
                    inp: formatValue(t.input),
                    exp: formatValue(t.expected),
                    got: formatValue(out)
                });
            } catch (e) {
                results.push({ ok: false, inp: formatValue(t.input), exp: formatValue(t.expected), got: "Error" });
            }
        });
        
        const grade = (pass / task.tests.length) * 6;
        const isPassed = pass === task.tests.length;
        
        saveSolved(classId, taskId, grade, isPassed, code);
        saveCurrentClassId();
        
        if (isPassed) {
            res.innerHTML = "✓ Всички тестове преминаха! Оценка: " + grade.toFixed(2);
            res.classList.add("success", "show");
            document.getElementById("task-" + taskId).classList.add("completed");
        } else {
            res.innerHTML = "✗ " + pass + "/" + task.tests.length + " тестове. Оценка: " + grade.toFixed(2);
            res.classList.add("error", "show");
        }
        
        tests.innerHTML = results.map(r => `
            <div class="test-result-item ${r.ok ? "pass" : "fail"}">
                <strong>Вход:</strong> ${r.inp}<br>
                <strong>Очаквано:</strong> ${r.exp}<br>
                <strong>Получено:</strong> ${r.got}
            </div>
        `).join("");
        tests.classList.add("show");
        
        updateProgress();
    } catch (e) {
        res.innerHTML = "✗ Грешка: " + e.message;
        res.classList.add("error", "show");
    }
}

function valuesEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    if (typeof a === "object" && a !== null || Array.isArray(a)) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    if (typeof b === "object" && b !== null || Array.isArray(b)) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a === b;
}

function formatValue(value) {
    if (typeof value === "string") return `"${value}"`;
    if (typeof value === "undefined") return "undefined";
    if (value === null) return "null";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
}

function resetCode(taskId, classId) {
    const cls = classes.find(c => c.id === classId);
    const task = cls.tasks.find(t => t.id === taskId);
    document.getElementById("code-" + taskId).value = task.starter;
}

function toggleSolution(taskId) {
    const box = document.getElementById("solution-" + taskId);
    box.classList.toggle("show");
}

function nextClass() {
    if (currentClassId < classes.length) {
        classes[currentClassId - 1].completed = true;
        currentClassId++;
        saveCurrentClassId();
        renderClasses();
        renderClass(currentClassId);
    }
}

function getSaved(classId, taskId) {
    const saved = JSON.parse(localStorage.getItem(STORAGE_TASKS_KEY) || "{}");
    return saved[classId + "-" + taskId];
}

function saveSolved(classId, taskId, grade, passed, code) {
    const saved = JSON.parse(localStorage.getItem(STORAGE_TASKS_KEY) || "{}");
    saved[classId + "-" + taskId] = { grade, passed, code };
    localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(saved));
}

function getClassGrades(classId) {
    const cls = classes.find(c => c.id === classId);
    const saved = JSON.parse(localStorage.getItem(STORAGE_TASKS_KEY) || "{}");
    return cls.tasks
        .map(t => saved[classId + "-" + t.id]?.grade || 0)
        .filter(g => g > 0);
}

function updateProgress() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_TASKS_KEY) || "{}");
    const total = classes.reduce((s, c) => s + c.tasks.length, 0);
    const solved = Object.values(saved).filter(t => t.passed).length;
    const pct = Math.round((solved / total) * 100);
    document.getElementById("userProgress").textContent = "Прогрес: " + pct + "%";
}

function saveCurrentClassId() {
    localStorage.setItem(STORAGE_CURRENT_CLASS_KEY, String(currentClassId));
}

function getUnlockedMaxClassId() {
    let unlocked = 1;
    for (let i = 0; i < classes.length; i++) {
        const cls = classes[i];
        const grades = getClassGrades(cls.id);
        const avg = grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
        const allSolved = cls.tasks.every(t => {
            const s = getSaved(cls.id, t.id);
            return s && s.passed;
        });

        if (allSolved && avg >= 4) {
            classes[i].completed = true;
            unlocked = Math.min(classes.length, cls.id + 1);
        } else {
            classes[i].completed = false;
            break;
        }
    }
    return unlocked;
}

function restoreProgressState() {
    const unlockedMax = getUnlockedMaxClassId();
    const savedCurrent = Number(localStorage.getItem(STORAGE_CURRENT_CLASS_KEY) || "1");
    const clamped = Math.max(1, Math.min(savedCurrent, unlockedMax));
    currentClassId = clamped;
}

document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("Нулирай целия прогрес?")) {
        localStorage.removeItem(STORAGE_TASKS_KEY);
        localStorage.removeItem(STORAGE_CURRENT_CLASS_KEY);
        currentClassId = 1;
        classes.forEach(c => c.completed = false);
        renderClasses();
        renderClass(1);
        updateProgress();
    }
});

initApp();
