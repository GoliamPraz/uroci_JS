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

const TARGET_TASKS_PER_CLASS = 10;

function cloneDeep(value) {
    return JSON.parse(JSON.stringify(value));
}

function getFunctionName(signature) {
    if (!signature || typeof signature !== 'string') return 'fn';
    return signature.split('(')[0].trim() || 'fn';
}

function formatPreviewValue(value) {
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'undefined') return 'undefined';
    if (Number.isNaN(value)) return 'NaN';
    if (typeof value === 'number' || typeof value === 'boolean' || value === null) return String(value);
    return JSON.stringify(value);
}

function buildExpectedResultsPreview(task) {
    const fnName = getFunctionName(task.signature);
    return task.tests.slice(0, 3)
        .map((test) => {
            const args = test.input.map((arg) => formatPreviewValue(arg)).join(', ');
            return `${fnName}(${args}) => ${formatPreviewValue(test.expected)}`;
        })
        .join('\n');
}

function getDifficultyByPosition(position, total) {
    const easyLimit = Math.ceil(total * 0.4);
    const mediumLimit = Math.ceil(total * 0.7);

    if (position <= easyLimit) return 'easy';
    if (position <= mediumLimit) return 'medium';
    return 'hard';
}

function expandTasksToTen(tasks, classId, allClassesSnapshot) {
    const ownTasks = tasks.map(task => cloneDeep(task));
    const globalPool = [];

    allClassesSnapshot.forEach((cls) => {
        cls.tasks.forEach((task) => {
            globalPool.push({
                sourceClassName: cls.name,
                task: cloneDeep(task)
            });
        });
    });

    const expanded = [];
    const usedSignatures = new Set();
    let cursor = ((classId - 1) * 7) % globalPool.length;
    let guard = 0;

    while (expanded.length < TARGET_TASKS_PER_CLASS && guard < globalPool.length * 3) {
        const candidate = globalPool[cursor % globalPool.length];
        const signatureKey = candidate.task.signature || candidate.task.title;

        if (!usedSignatures.has(signatureKey)) {
            usedSignatures.add(signatureKey);
            expanded.push({
                sourceClassName: candidate.sourceClassName,
                task: cloneDeep(candidate.task)
            });
        }

        cursor++;
        guard++;
    }

    while (expanded.length < TARGET_TASKS_PER_CLASS) {
        const base = ownTasks[expanded.length % ownTasks.length] || ownTasks[0];
        expanded.push({ sourceClassName: null, task: cloneDeep(base) });
    }

    return expanded.map((item, index) => {
        const position = index + 1;
        const task = item.task;

        task.id = position;
        task.difficulty = getDifficultyByPosition(position, TARGET_TASKS_PER_CLASS);
        task.rating = Number((2 + ((position - 1) * (3.5 / (TARGET_TASKS_PER_CLASS - 1)))).toFixed(2));
        task.title = `${task.title} - Задача ${position}`;

        if (item.sourceClassName && item.sourceClassName !== undefined) {
            task.description = `${task.description} (Практика ${position}/${TARGET_TASKS_PER_CLASS})`;
        }

        task.expectedResults = buildExpectedResultsPreview(task);
        return task;
    });
}

const baseClassSnapshot = cloneDeep(classes);
classes.forEach((cls) => {
    cls.tasks = expandTasksToTen(cls.tasks, cls.id, baseClassSnapshot);
});

const baseClassesForTranslation = JSON.parse(JSON.stringify(classes));

let currentClassId = 1;
const API_URL = (window.location.port === '5500' || window.location.port === '5501')
    ? 'http://localhost:5000/api'
    : '/api';
let currentUserId = localStorage.getItem('userId') || '';
let currentUsername = localStorage.getItem('username') || '';
const taskHelpUsage = {};
let currentLanguage = localStorage.getItem('lang') || 'bg';

const uiTranslations = {
    bg: {
        authTitle: 'Вход / Регистрация',
        authSubtitle: 'Влизане само с никнейм и парола. Данните и прогресът се записват в MongoDB Atlas.',
        usernamePlaceholder: 'Потребителско име',
        passwordPlaceholder: 'Парола (мин. 3 символа)',
        registerBtn: 'Регистрация',
        loginBtn: 'Вход',
        switchUserBtn: 'Смени потребител',
        resetBtn: 'Нулиране на прогреса',
        progress: 'Прогрес',
        user: 'Потребител',
        tasksTitle: 'Задачи',
        easy: 'Лесни',
        medium: 'Средни',
        hard: 'Завършващи',
        codeLabel: 'Код',
        checkBtn: 'Провери',
        resetCodeBtn: 'Нулирай',
        solution1: 'Решение 1',
        solution2: 'Решение 2',
        solution3: 'Решение 3',
        usedHelp: 'Използвана помощ',
        noHelp: 'без помощ',
        willUse: 'Ще ползваш',
        avgGrade: 'Среден успех',
        canAdvance: 'Имаш нужния бал. Може да продължиш.',
        needMore: 'Трябва средно над 4.00 и всички задачи да са решени.',
        nextClass: 'Напред към следващ клас',
        finish: 'Край',
        repeatClass: 'Повтори класа',
        repeatConfirm: 'Сигурен ли си, че искаш да повториш класа? Това ще изчисти резултатите за този клас.',
        resetConfirm: 'Нулирай целия прогрес?',
        perfect: '✓ Всички тестове преминаха! Оценка',
        testsFail: 'тестове',
        accuracy: 'Точност',
        grade: 'Оценка',
        max: 'макс',
        input: 'Вход',
        expected: 'Очаквано',
        got: 'Получено',
        similarity: 'Близост',
        helpApplied: 'Подадено е Решение',
        helpMaxGrade: 'Оценката за тази задача ще е с максимум',
        loginPrompt: 'Регистрирай нов потребител, за да продължиш.',
        learnForClass: 'Подробно преподаване за',
        beforeTasks: 'Преди задачите мини през следните стъпки:',
        lessonStep1: 'Разбиране: Прочети теорията и преформулирай с твои думи какво прави функцията.',
        lessonStep2: 'План: Запиши на хартия вход, обработка и резултат (input -> logic -> return).',
        lessonStep3: 'Имплементация: Започни от най-простия тест и после добавяй още проверки.',
        lessonStep4: 'Проверка: Сравни полученото с очакваното и редактирай само проблемната част.',
        keywordsForClass: 'Кодове и конструкции в този клас:'
    },
    en: {
        authTitle: 'Login / Register', authSubtitle: 'Login only with username and password. Data and progress are saved in MongoDB Atlas.', usernamePlaceholder: 'Username', passwordPlaceholder: 'Password (min. 3 chars)', registerBtn: 'Register', loginBtn: 'Login', switchUserBtn: 'Switch user', resetBtn: 'Reset progress', progress: 'Progress', user: 'User', tasksTitle: 'Tasks', easy: 'Easy', medium: 'Medium', hard: 'Advanced', codeLabel: 'Code', checkBtn: 'Check', resetCodeBtn: 'Reset', solution1: 'Solution 1', solution2: 'Solution 2', solution3: 'Solution 3', usedHelp: 'Help used', noHelp: 'no help', willUse: 'You will use', avgGrade: 'Average grade', canAdvance: 'You have enough score. You can continue.', needMore: 'You need average above 4.00 and all tasks solved.', nextClass: 'Next class', finish: 'Finish', repeatClass: 'Repeat class', repeatConfirm: 'Are you sure you want to repeat this class? This will clear results for this class.', resetConfirm: 'Reset all progress?', perfect: '✓ All tests passed! Grade', testsFail: 'tests', accuracy: 'Accuracy', grade: 'Grade', max: 'max', input: 'Input', expected: 'Expected', got: 'Got', similarity: 'Similarity', helpApplied: 'Applied Solution', helpMaxGrade: 'Max grade for this task is', loginPrompt: 'Register a new user to continue.', learnForClass: 'Detailed lesson for', beforeTasks: 'Before tasks, follow these steps:', lessonStep1: 'Understand: Read the theory and restate what the function does.', lessonStep2: 'Plan: Write input, logic, and output (input -> logic -> return).', lessonStep3: 'Implement: Start with easiest test, then add checks.', lessonStep4: 'Review: Compare actual vs expected and edit only the failing part.', keywordsForClass: 'Code patterns and constructs in this class:'
    },
    ru: {
        authTitle: 'Вход / Регистрация', authSubtitle: 'Вход только с никнеймом и паролем. Данные и прогресс сохраняются в MongoDB Atlas.', usernamePlaceholder: 'Никнейм', passwordPlaceholder: 'Пароль (мин. 3 символа)', registerBtn: 'Регистрация', loginBtn: 'Вход', switchUserBtn: 'Сменить пользователя', resetBtn: 'Сброс прогресса', progress: 'Прогресс', user: 'Пользователь', tasksTitle: 'Задания', easy: 'Легкие', medium: 'Средние', hard: 'Сложные', codeLabel: 'Код', checkBtn: 'Проверить', resetCodeBtn: 'Сбросить', solution1: 'Решение 1', solution2: 'Решение 2', solution3: 'Решение 3', usedHelp: 'Использована помощь', noHelp: 'без помощи', willUse: 'Будешь использовать', avgGrade: 'Средняя оценка', canAdvance: 'Балла достаточно. Можно перейти дальше.', needMore: 'Нужен средний балл выше 4.00 и все задания решены.', nextClass: 'Следующий класс', finish: 'Конец', repeatClass: 'Повторить класс', repeatConfirm: 'Повторить класс? Результаты этого класса будут очищены.', resetConfirm: 'Сбросить весь прогресс?', perfect: '✓ Все тесты пройдены! Оценка', testsFail: 'тестов', accuracy: 'Точность', grade: 'Оценка', max: 'макс', input: 'Ввод', expected: 'Ожидалось', got: 'Получено', similarity: 'Близость', helpApplied: 'Применено Решение', helpMaxGrade: 'Максимальная оценка для задания', loginPrompt: 'Зарегистрируй нового пользователя, чтобы продолжить.', learnForClass: 'Подробное обучение для', beforeTasks: 'Перед заданиями пройди шаги:', lessonStep1: 'Понимание: Прочитай теорию и объясни функцию своими словами.', lessonStep2: 'План: Запиши вход, логику и результат (input -> logic -> return).', lessonStep3: 'Реализация: Начни с простого теста, затем добавляй проверки.', lessonStep4: 'Проверка: Сравни результат с ожидаемым и исправь только проблемную часть.', keywordsForClass: 'Ключевые конструкции в этом классе:'
    },
    de: {
        authTitle: 'Login / Registrierung', authSubtitle: 'Login nur mit Benutzername und Passwort. Daten und Fortschritt werden in MongoDB Atlas gespeichert.', usernamePlaceholder: 'Benutzername', passwordPlaceholder: 'Passwort (mind. 3 Zeichen)', registerBtn: 'Registrieren', loginBtn: 'Login', switchUserBtn: 'Benutzer wechseln', resetBtn: 'Fortschritt zurücksetzen', progress: 'Fortschritt', user: 'Benutzer', tasksTitle: 'Aufgaben', easy: 'Leicht', medium: 'Mittel', hard: 'Schwer', codeLabel: 'Code', checkBtn: 'Prüfen', resetCodeBtn: 'Zurücksetzen', solution1: 'Lösung 1', solution2: 'Lösung 2', solution3: 'Lösung 3', usedHelp: 'Genutzte Hilfe', noHelp: 'keine Hilfe', willUse: 'Du verwendest', avgGrade: 'Durchschnittsnote', canAdvance: 'Du hast genug Punkte. Du kannst weitergehen.', needMore: 'Du brauchst einen Schnitt über 4.00 und alle Aufgaben gelöst.', nextClass: 'Nächste Klasse', finish: 'Ende', repeatClass: 'Klasse wiederholen', repeatConfirm: 'Klasse wiederholen? Die Ergebnisse dieser Klasse werden gelöscht.', resetConfirm: 'Gesamten Fortschritt zurücksetzen?', perfect: '✓ Alle Tests bestanden! Note', testsFail: 'Tests', accuracy: 'Genauigkeit', grade: 'Note', max: 'max', input: 'Eingabe', expected: 'Erwartet', got: 'Erhalten', similarity: 'Ähnlichkeit', helpApplied: 'Lösung angewendet', helpMaxGrade: 'Maximale Note für diese Aufgabe', loginPrompt: 'Registriere einen neuen Benutzer, um fortzufahren.', learnForClass: 'Detaillierte Lektion für', beforeTasks: 'Vor den Aufgaben, folge diesen Schritten:', lessonStep1: 'Verstehen: Lies die Theorie und formuliere die Funktion in eigenen Worten.', lessonStep2: 'Plan: Notiere Input, Logik und Output (input -> logic -> return).', lessonStep3: 'Umsetzung: Starte mit dem einfachsten Test und erweitere schrittweise.', lessonStep4: 'Prüfen: Vergleiche Ergebnis und Erwartung und ändere nur den fehlerhaften Teil.', keywordsForClass: 'Wichtige Konstrukte in dieser Klasse:'
    },
    es: {
        authTitle: 'Inicio / Registro', authSubtitle: 'Inicio solo con usuario y contrasena. Los datos y el progreso se guardan en MongoDB Atlas.', usernamePlaceholder: 'Usuario', passwordPlaceholder: 'Contrasena (min. 3 caracteres)', registerBtn: 'Registro', loginBtn: 'Entrar', switchUserBtn: 'Cambiar usuario', resetBtn: 'Reiniciar progreso', progress: 'Progreso', user: 'Usuario', tasksTitle: 'Tareas', easy: 'Faciles', medium: 'Medias', hard: 'Avanzadas', codeLabel: 'Codigo', checkBtn: 'Comprobar', resetCodeBtn: 'Reiniciar', solution1: 'Solucion 1', solution2: 'Solucion 2', solution3: 'Solucion 3', usedHelp: 'Ayuda usada', noHelp: 'sin ayuda', willUse: 'Vas a usar', avgGrade: 'Nota media', canAdvance: 'Tienes la puntuacion necesaria. Puedes continuar.', needMore: 'Necesitas promedio superior a 4.00 y todas las tareas resueltas.', nextClass: 'Siguiente clase', finish: 'Final', repeatClass: 'Repetir clase', repeatConfirm: 'Quieres repetir la clase? Se borraran los resultados de esta clase.', resetConfirm: 'Reiniciar todo el progreso?', perfect: '✓ Todos los tests pasaron! Nota', testsFail: 'tests', accuracy: 'Precision', grade: 'Nota', max: 'max', input: 'Entrada', expected: 'Esperado', got: 'Obtenido', similarity: 'Cercania', helpApplied: 'Se aplico Solucion', helpMaxGrade: 'La nota maxima para esta tarea es', loginPrompt: 'Registra un nuevo usuario para continuar.', learnForClass: 'Leccion detallada para', beforeTasks: 'Antes de las tareas, sigue estos pasos:', lessonStep1: 'Comprende: Lee la teoria y explica con tus palabras la funcion.', lessonStep2: 'Plan: Escribe entrada, logica y salida (input -> logic -> return).', lessonStep3: 'Implementa: Empieza con el test mas facil y agrega validaciones.', lessonStep4: 'Revisa: Compara resultado con esperado y corrige solo la parte con error.', keywordsForClass: 'Patrones y construcciones de este tema:'
    }
};

const translationCache = JSON.parse(localStorage.getItem('translationCache') || '{}');

function getTasksStorageKey() {
    return `tasks_${currentUserId}`;
}

function getCurrentClassStorageKey() {
    return `currentClassId_${currentUserId}`;
}

function t(key) {
    return (uiTranslations[currentLanguage] && uiTranslations[currentLanguage][key]) || uiTranslations.bg[key] || key;
}

function saveTranslationCache() {
    localStorage.setItem('translationCache', JSON.stringify(translationCache));
}

async function safeReadJson(response) {
    try {
        const text = await response.text();
        if (!text || !text.trim()) return null;
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}

async function translateText(text, targetLanguage) {
    if (!text || targetLanguage === 'bg') return text;

    const langCache = translationCache[targetLanguage] || {};
    if (langCache[text]) return langCache[text];

    try {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=bg&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`);
        if (!response.ok) return text;
        const data = await safeReadJson(response);
        if (!data) return text;
        const translated = Array.isArray(data?.[0]) ? data[0].map(part => part[0]).join('') : text;
        translationCache[targetLanguage] = translationCache[targetLanguage] || {};
        translationCache[targetLanguage][text] = translated;
        saveTranslationCache();
        return translated;
    } catch (error) {
        return text;
    }
}

async function translateHtmlPreservingTags(html, targetLanguage) {
    if (targetLanguage === 'bg') return html;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
    const nodes = [];

    let currentNode = walker.nextNode();
    while (currentNode) {
        const value = currentNode.nodeValue;
        if (value && value.trim()) {
            nodes.push(currentNode);
        }
        currentNode = walker.nextNode();
    }

    for (const node of nodes) {
        node.nodeValue = await translateText(node.nodeValue, targetLanguage);
    }

    return doc.body.innerHTML;
}

async function localizeClasses(targetLanguage) {
    for (let c = 0; c < classes.length; c++) {
        const cls = classes[c];
        const baseCls = baseClassesForTranslation[c];

        cls.name = await translateText(baseCls.name, targetLanguage);
        cls.description = await translateText(baseCls.description, targetLanguage);
        cls.theory = await translateHtmlPreservingTags(baseCls.theory, targetLanguage);

        for (let i = 0; i < cls.tasks.length; i++) {
            const task = cls.tasks[i];
            const baseTask = baseCls.tasks[i];
            task.title = await translateText(baseTask.title, targetLanguage);
            task.description = await translateText(baseTask.description, targetLanguage);
            task.signature = await translateText(baseTask.signature, targetLanguage);
            task.hint = await translateText(baseTask.hint, targetLanguage);
            task.expectedResults = await translateText(baseTask.expectedResults, targetLanguage);
        }
    }
}

function updateStaticTexts() {
    document.getElementById('authTitle').textContent = t('authTitle');
    document.getElementById('authSubtitle').textContent = t('authSubtitle');
    document.getElementById('usernameInput').placeholder = t('usernamePlaceholder');
    document.getElementById('passwordInput').placeholder = t('passwordPlaceholder');
    document.getElementById('registerBtn').textContent = t('registerBtn');
    document.getElementById('loginBtn').textContent = t('loginBtn');
    document.getElementById('switchUserBtn').textContent = t('switchUserBtn');
    document.getElementById('resetBtn').textContent = t('resetBtn');
    document.getElementById('userProgress').textContent = `${t('progress')}: 0%`;
    const activeUser = document.getElementById('activeUser');
    if (currentUsername) {
        activeUser.textContent = `${t('user')}: ${currentUsername}`;
    }
}

async function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('lang', currentLanguage);
    updateStaticTexts();
    await localizeClasses(currentLanguage);

    if (!document.getElementById('appMain').classList.contains('hidden')) {
        renderClasses();
        renderClass(currentClassId);
        updateProgress();
    }
}

// MongoDB API Functions
async function loadProgressFromDB() {
    if (!currentUserId) return [];

    try {
        const response = await fetch(`${API_URL}/progress/${currentUserId}`);
        const progress = await safeReadJson(response);
        if (!progress) return [];
        return progress.completedLessons || [];
    } catch (err) {
        console.warn('MongoDB unavailable, using localStorage:', err.message);
        return [];
    }
}

async function saveProgressToDB(lessonId, taskId, lessonTitle) {
    if (!currentUserId) return;

    try {
        const response = await fetch(`${API_URL}/progress/${currentUserId}/complete-task`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lessonId,
                taskId,
                lessonTitle
            })
        });
        const result = await safeReadJson(response);
        console.log('✓ Прогреса запазен в MongoDB:', result);
    } catch (err) {
        console.warn('MongoDB save failed, using localStorage:', err.message);
    }
}

async function resetProgressInDB() {
    if (!currentUserId) return;

    try {
        await fetch(`${API_URL}/progress/${currentUserId}`, { method: 'DELETE' });
        console.log('✓ Прогреса изтрит от MongoDB');
    } catch (err) {
        console.warn('MongoDB delete failed:', err.message);
    }
}

async function registerUser(username, password) {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const payload = await safeReadJson(response) || {};
    if (!response.ok) {
        throw new Error(payload.error || 'Registration failed');
    }

    return payload;
}

async function loginUser(username, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const payload = await safeReadJson(response) || {};
    if (!response.ok) {
        throw new Error(payload.error || 'Login failed');
    }

    return payload;
}

function setActiveUser(user) {
    currentUserId = user.userId;
    currentUsername = user.username;
    localStorage.setItem('userId', currentUserId);
    localStorage.setItem('username', currentUsername);
    const activeUserEl = document.getElementById('activeUser');
    activeUserEl.textContent = `${t('user')}: ${currentUsername}`;
}

function showApp() {
    document.getElementById('authSection').classList.add('hidden');
    document.getElementById('appMain').classList.remove('hidden');
}

function showRegisterForm(message = '') {
    document.getElementById('authSection').classList.remove('hidden');
    document.getElementById('appMain').classList.add('hidden');
    document.getElementById('authMessage').textContent = message;
}

async function initApp() {
    document.getElementById('languageSelect').value = currentLanguage;
    await setLanguage(currentLanguage);

    if (!currentUserId) {
        showRegisterForm();
        return;
    }

    setActiveUser({ userId: currentUserId, username: currentUsername || 'User' });
    showApp();

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

    const deepLessonSection = document.createElement("div");
    deepLessonSection.className = "deep-lesson";
    deepLessonSection.innerHTML = renderDetailedLesson(cls);
    content.appendChild(deepLessonSection);
    
    const tasksSection = document.createElement("div");
    tasksSection.className = "tasks-section";
    
    const title = document.createElement("h2");
    title.textContent = t('tasksTitle');
    tasksSection.appendChild(title);
    
    const groups = { easy: [], medium: [], hard: [] };
    cls.tasks.forEach(t => groups[t.difficulty].push(t));
    
    ["easy", "medium", "hard"].forEach(difficulty => {
        if (groups[difficulty].length === 0) return;
        
        const group = document.createElement("div");
        group.className = "difficulty-group";
        
        const label = document.createElement("div");
        label.className = `difficulty-label ${difficulty}`;
        label.textContent = difficulty === "easy" ? t('easy') : difficulty === "medium" ? t('medium') : t('hard');
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
    const codeUsageHint = getCodeUsageHint(task);
    const taskKey = getTaskKey(cls.id, task.id);
    const usedHelpLevel = taskHelpUsage[taskKey] || (saved?.helpLevel || 0);

    card.innerHTML = `
        <div class="task-header">
            <div class="task-title">${task.title}</div>
            <div class="task-rating">Оц: ${task.rating.toFixed(2)}</div>
        </div>
        <div class="task-description">${task.description}</div>
        <div class="task-code-usage"><strong>${t('willUse')}:</strong> ${codeUsageHint}</div>
        <div class="task-signature">${task.signature}</div>
        <div class="code-editor">
            <label>${t('codeLabel')}:</label>
            <textarea id="code-${task.id}" class="task-code">${savedCode}</textarea>
        </div>
        <div class="task-buttons">
            <button class="btn btn-check" onclick="checkTask(${cls.id}, ${task.id})">${t('checkBtn')}</button>
            <button class="btn btn-reset-code" onclick="resetCode(${task.id}, ${cls.id})">${t('resetCodeBtn')}</button>
            <button class="btn btn-solution btn-solution-l1" onclick="applySolutionLevel(${cls.id}, ${task.id}, 1)">${t('solution1')}</button>
            <button class="btn btn-solution btn-solution-l2" onclick="applySolutionLevel(${cls.id}, ${task.id}, 2)">${t('solution2')}</button>
            <button class="btn btn-solution btn-solution-l3" onclick="applySolutionLevel(${cls.id}, ${task.id}, 3)">${t('solution3')}</button>
        </div>
        <div class="help-level-info">${t('usedHelp')}: ${usedHelpLevel === 0 ? t('noHelp') : `${t('solution1').split(' ')[0]} ${usedHelpLevel}`}</div>
        <div class="result-message" id="result-${task.id}"></div>
        <div class="test-results" id="tests-${task.id}"></div>
    `;
    return card;
}

function renderDetailedLesson(cls) {
    const keyPatterns = [...new Set(
        cls.tasks
            .map(task => getCodeUsageHint(task))
            .filter(Boolean)
    )];

    return `
        <h3>${t('learnForClass')} ${cls.name}</h3>
        <p>${t('beforeTasks')}</p>
        <ol>
            <li><strong>1)</strong> ${t('lessonStep1')}</li>
            <li><strong>2)</strong> ${t('lessonStep2')}</li>
            <li><strong>3)</strong> ${t('lessonStep3')}</li>
            <li><strong>4)</strong> ${t('lessonStep4')}</li>
        </ol>
        <div class="lesson-keywords">
            <strong>${t('keywordsForClass')}</strong>
            <ul>
                ${keyPatterns.map(pattern => `<li>${pattern}</li>`).join('')}
            </ul>
        </div>
    `;
}

function getCodeUsageHint(task) {
    if (!task || !task.hint) return 'основна функция, return и променливи';
    const normalized = String(task.hint).split('|')[0].trim();
    return normalized || 'основна функция, return и променливи';
}

function getTaskKey(classId, taskId) {
    return `${classId}-${taskId}`;
}

function getTaskCoreTokens(task) {
    const tokens = new Set();
    const source = `${task.hint || ''} ${task.signature || ''} ${task.solution || ''}`;
    const functionName = String(task.signature || '').split('(')[0].trim();

    const matches = source.match(/[A-Za-z_][A-Za-z0-9_]*/g) || [];
    const ignore = new Set([
        'function', 'return', 'if', 'else', 'for', 'while', 'const', 'let', 'var',
        'true', 'false', 'null', 'undefined'
    ]);

    matches.forEach((token) => {
        if (ignore.has(token)) return;
        if (token === functionName) return;
        if (token.length < 2) return;
        tokens.add(token);
    });

    return [...tokens];
}

function makeFillInSolution(task, level) {
    const solution = String(task.solution || '');
    if (!solution) return '';

    const lines = solution.split('\n');
    const coreTokens = getTaskCoreTokens(task);
    const declarationPattern = /^\s*function\s+[A-Za-z_][A-Za-z0-9_]*\s*\(/;

    return lines.map((line, lineIndex) => {
        if (lineIndex === 0 && declarationPattern.test(line)) {
            return line;
        }

        let masked = line;

        coreTokens.forEach((token, index) => {
            const shouldMask =
                (level === 1) ||
                (level === 2 && index % 1 === 0) ||
                (level === 3 && index % 2 === 0);

            if (shouldMask) {
                const rx = new RegExp(`\\b${token}\\b`, 'g');
                masked = masked.replace(rx, '...');
            }
        });

        if (level === 1) {
            masked = masked
                .replace(/(\+|\-|\*|\/|===|==|>=|<=|>|<|&&|\|\|)/g, '...')
                .replace(/\b\d+\b/g, '...');
        }

        if (level === 2) {
            masked = masked.replace(/\b\d+\b/g, '...');
        }

        return masked;
    }).join('\n');
}

function applySolutionLevel(classId, taskId, level) {
    const cls = classes.find(c => c.id === classId);
    const task = cls.tasks.find(t => t.id === taskId);
    const editor = document.getElementById(`code-${taskId}`);
    const res = document.getElementById(`result-${taskId}`);

    const taskKey = getTaskKey(classId, taskId);
    taskHelpUsage[taskKey] = Math.max(taskHelpUsage[taskKey] || 0, level);

    editor.value = makeFillInSolution(task, level);
    res.innerHTML = `${t('helpApplied')} ${level}. ${t('helpMaxGrade')} ${getMaxGradeByHelp(taskHelpUsage[taskKey]).toFixed(2)}.`;
    res.classList.remove('success', 'error');
    res.classList.add('show');
}

function getMaxGradeByHelp(helpLevel) {
    if (helpLevel === 1) return 5;
    if (helpLevel === 2) return 4;
    if (helpLevel >= 3) return 3;
    return 6;
}

function renderGradeSection(cls) {
    const section = document.createElement("div");
    section.className = "grade-section";
    section.id = `grade-section-${cls.id}`;
    
    const grades = getClassGrades(cls.id);
    const avg = grades.length > 0 ? grades.reduce((a, b) => a + b) / grades.length : 0;
    const allSolved = cls.tasks.every(t => {
        const s = getSaved(cls.id, t.id);
        return s && s.passed;
    });
    const minAvgToPass = 4;
    const canAdvance = allSolved && avg > minAvgToPass;
    
    section.innerHTML = `
        <div class="grade-info">${t('avgGrade')}</div>
        <div class="grade-value">${avg.toFixed(2)}</div>
        <div class="grade-message">${canAdvance ? t('canAdvance') : t('needMore')}</div>
        ${canAdvance
            ? `<button class="next-class-btn" onclick="nextClass()">${cls.id < classes.length ? t('nextClass') : t('finish')}</button>`
            : `<button class="repeat-class-btn" onclick="repeatClass(${cls.id})">${t('repeatClass')}</button>`}
    `;
    return section;
}

function repeatClass(classId) {
    const shouldRepeat = confirm(t('repeatConfirm'));
    if (!shouldRepeat) return;

    const cls = classes.find(c => c.id === classId);
    if (!cls) return;

    const saved = JSON.parse(localStorage.getItem(getTasksStorageKey()) || "{}");

    cls.tasks.forEach(task => {
        const key = `${classId}-${task.id}`;
        delete saved[key];
        delete taskHelpUsage[key];
    });

    localStorage.setItem(getTasksStorageKey(), JSON.stringify(saved));

    classes[classId - 1].completed = false;
    currentClassId = classId;
    saveCurrentClassId();
    renderClasses();
    renderClass(classId);
    updateProgress();
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
        
        let totalSimilarity = 0;

        task.tests.forEach(t => {
            try {
                const out = fn(...t.input);
                const ok = valuesEqual(out, t.expected);
                if (ok) pass++;
                const similarity = getSimilarityScore(out, t.expected);
                totalSimilarity += similarity;
                results.push({
                    ok,
                    inp: formatValue(t.input),
                    exp: formatValue(t.expected),
                    got: formatValue(out),
                    similarity
                });
            } catch (e) {
                results.push({ ok: false, inp: formatValue(t.input), exp: formatValue(t.expected), got: "Error", similarity: 0 });
            }
        });

        const taskKey = getTaskKey(classId, taskId);
        const helpLevel = taskHelpUsage[taskKey] || 0;
        const maxGrade = getMaxGradeByHelp(helpLevel);
        const avgSimilarity = totalSimilarity / task.tests.length;
        const grade = Math.max(2, avgSimilarity * maxGrade);
        const isPassed = pass === task.tests.length;
        
        saveSolved(classId, taskId, grade, isPassed, code, helpLevel);
        saveCurrentClassId();
        
        if (isPassed) {
            res.innerHTML = `${t('perfect')}: ${grade.toFixed(2)} (${t('usedHelp')}: ${helpLevel === 0 ? t('noHelp') : `${t('solution1').split(' ')[0]} ${helpLevel}`})`;
            res.classList.add("success", "show");
            document.getElementById("task-" + taskId).classList.add("completed");
            saveProgressToDB(classId, taskId, cls.name);
        } else {
            res.innerHTML = `✗ ${pass}/${task.tests.length} ${t('testsFail')}. ${t('accuracy')}: ${(avgSimilarity * 100).toFixed(0)}%. ${t('grade')}: ${grade.toFixed(2)} (${t('max')}: ${maxGrade.toFixed(2)})`;
            res.classList.add("error", "show");
        }
        
        tests.innerHTML = results.map(r => `
            <div class="test-result-item ${r.ok ? "pass" : "fail"}">
                <strong>${t('input')}:</strong> ${r.inp}<br>
                <strong>${t('expected')}:</strong> ${r.exp}<br>
                <strong>${t('got')}:</strong> ${r.got}<br>
                <strong>${t('similarity')}:</strong> ${(r.similarity * 100).toFixed(0)}%
            </div>
        `).join("");
        tests.classList.add("show");

        refreshCurrentClassProgress(classId);
        updateProgress();
    } catch (e) {
        res.innerHTML = "✗ Грешка: " + e.message;
        res.classList.add("error", "show");
    }
}

function refreshCurrentClassProgress(classId) {
    getUnlockedMaxClassId();
    renderClasses();

    const cls = classes.find(c => c.id === classId);
    const currentGradeSection = document.querySelector('.grade-section');

    if (cls && currentGradeSection) {
        currentGradeSection.replaceWith(renderGradeSection(cls));
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

function getSimilarityScore(actual, expected) {
    if (valuesEqual(actual, expected)) return 1;

    if (typeof actual === 'number' && typeof expected === 'number') {
        const diff = Math.abs(actual - expected);
        const scale = Math.max(1, Math.abs(expected));
        return Math.max(0, 1 - diff / scale);
    }

    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);

    if (!actualStr || !expectedStr) return 0;

    return stringSimilarity(actualStr, expectedStr);
}

function stringSimilarity(a, b) {
    if (a === b) return 1;
    const m = a.length;
    const n = b.length;
    if (!m || !n) return 0;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }

    const maxLen = Math.max(m, n);
    return Math.max(0, 1 - dp[m][n] / maxLen);
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
    const saved = JSON.parse(localStorage.getItem(getTasksStorageKey()) || "{}");
    return saved[classId + "-" + taskId];
}

function saveSolved(classId, taskId, grade, passed, code, helpLevel) {
    const saved = JSON.parse(localStorage.getItem(getTasksStorageKey()) || "{}");
    saved[classId + "-" + taskId] = { grade, passed, code, helpLevel };
    localStorage.setItem(getTasksStorageKey(), JSON.stringify(saved));
}

function getClassGrades(classId) {
    const cls = classes.find(c => c.id === classId);
    const saved = JSON.parse(localStorage.getItem(getTasksStorageKey()) || "{}");
    return cls.tasks
        .map(t => saved[classId + "-" + t.id]?.grade || 0)
        .filter(g => g > 0);
}

function updateProgress() {
    const saved = JSON.parse(localStorage.getItem(getTasksStorageKey()) || "{}");
    const total = classes.reduce((s, c) => s + c.tasks.length, 0);
    const solved = Object.values(saved).filter(t => t.passed).length;
    const pct = Math.round((solved / total) * 100);
    document.getElementById("userProgress").textContent = `${t('progress')}: ${pct}%`;
}

function saveCurrentClassId() {
    localStorage.setItem(getCurrentClassStorageKey(), String(currentClassId));
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
    const savedCurrent = Number(localStorage.getItem(getCurrentClassStorageKey()) || "1");
    const clamped = Math.max(1, Math.min(savedCurrent, unlockedMax));
    currentClassId = clamped;
}

document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value;
    const authMessage = document.getElementById("authMessage");

    authMessage.textContent = "";

    try {
        const user = await registerUser(username, password);
        setActiveUser(user);
        showApp();
        restoreProgressState();
        renderClasses();
        renderClass(currentClassId);
        updateProgress();
        authMessage.textContent = '';
    } catch (err) {
        authMessage.textContent = err.message;
    }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value;
    const authMessage = document.getElementById("authMessage");

    authMessage.textContent = "";

    try {
        const user = await loginUser(username, password);
        setActiveUser(user);
        showApp();
        restoreProgressState();
        renderClasses();
        renderClass(currentClassId);
        updateProgress();
    } catch (err) {
        authMessage.textContent = err.message;
    }
});

document.getElementById("switchUserBtn").addEventListener("click", () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    currentUserId = '';
    currentUsername = '';
    showRegisterForm(t('loginPrompt'));
});

document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm(t('resetConfirm'))) {
        localStorage.removeItem(getTasksStorageKey());
        localStorage.removeItem(getCurrentClassStorageKey());
        resetProgressInDB();
        currentClassId = 1;
        classes.forEach(c => c.completed = false);
        renderClasses();
        renderClass(1);
        updateProgress();
    }
});

document.getElementById('languageSelect').addEventListener('change', async (event) => {
    await setLanguage(event.target.value);
});

initApp();
