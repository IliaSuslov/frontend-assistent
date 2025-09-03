import { Subject, SubjectKey } from "./types";
import anu from "@/assests/anyneverunknown.png";
import httpversions from "@/assests/httpversions.png";

export const SUBJECT_ORDER: SubjectKey[] = [
  "html",
  "css",
  "js",
  "ts",
  "react",
  "vue",
  "nextjs",
  "nuxtjs",
  "http",
  "git",
  "cicd",
  "browser",
  "render",
  "algorithms",
  "api",
  "security",
  "architecture",
];

export const LABELS: Record<string, string> = {
  html: "HTML",
  css: "CSS",
  js: "JS",
  ts: "TS",
  react: "React",
  vue: "Vue",
  nextjs: "NextJS",
  nuxtjs: "NuxtJS",
  http: "HTTP",
  git: "Git",
  cicd: "CI/CD",
  browser: "Browser",
  render: "Render",
  algorithms: "Algorithms",
  api: "API",
  security: "Security",
  architecture: "Architecture",
};

export const SUBJECTS: Record<SubjectKey, Subject> = {
  html: {
    key: "html",
    title: "HTML",
    rules: [
      {
        id: "semantic-structure",
        label: "Семантика",
        description:
          "Семантическая HTML-разметка — это использование тегов, которые отражают смысловую структуру страницы. Для SEO это важно, потому что поисковые системы лучше понимают содержание сайта: где основной текст, где меню, где заголовки. Это повышает релевантность страницы и помогает в ранжировании».",
        code: [
          {
            content: `<header> — шапка сайта/раздела
<nav> — блок навигации
<main> — основное содержимое страницы
<article> — независимый контент (например, пост в блоге)
<section> — тематический раздел
<aside> — боковая информация (сайдбар)`,
          },
        ],
      },
      {
        id: "alt-text",
        label: "Добавляйте информативный alt",
        description:
          'Все информативные изображения должны иметь описательный alt. Декоративным изображениям задавайте пустой alt (alt="").',
      },
      {
        id: "no-nested-forms",
        label: "Не вкладывайте формы",
        description:
          "Избегайте размещения <form> внутри другой <form>. Используйте отдельные формы или пересоберите разметку.",
      },
      {
        id: "dialogs",
        label: "Используйте <dialog> для модалок",
        description:
          "Предпочитайте нативный <dialog> для модальных окон; обеспечьте управление фокусом и корректное закрытие.",
      },
      {
        id: "utf8",
        label: "UTF-8",
        description:
          "UTF-8 - стандартная кодировка символов, которая может хранить любой текст в виде байтов, экономя место для латиницы и поддерживая все языки.",
      },
    ],
  },
  css: {
    key: "css",
    title: "CSS",
    rules: [
      {
        id: "cascade-control",
        label: "Контролируйте специфичность",
        description:
          "Отдавайте предпочтение селекторам с низкой специфичностью и утилитарным классам. Избегайте !important без крайней необходимости.",
      },
      {
        id: "normalize/reset",
        label: "Normalize.css/Reset.css",
        description:
          "Normalize.css — это библиотека CSS, которая помогает нормализовать стили для разных браузеров. Reset.css — это библиотека CSS, которая помогает сбросить стили для разных браузеров.",
        code: [
          {
            content: `
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/reset.css/20110307/reset.css');
          `,
          },
        ],
      },
      {
        id: "responsive-first",
        label: "Проектируйте по принципу mobile-first",
        description:
          "Начинайте с базовых стилей для маленьких экранов, затем добавляйте улучшения через медиазапросы.",
      },
      {
        id: "box-sizing",
        label: "Предпочитайте border-box",
        code: [
          {
            content: `
1. content-box (по умолчанию)
-width и height задаются только для содержимого (content).
-padding и border добавляются сверху.

2. border-box
-width и height включают в себя content + padding + border.
-То есть элемент не "раздувается" при добавлении внутренних отступов и рамки.

3. inherit
-Наследует значение от родителя.
          `,
          },
        ],
      },
      {
        id: "positioning-overview",
        label: "Позиционировании",
        code: [
          {
            content: `
Sticky
-Элемент как обычный (relative), пока не доскроллим до его координаты.
-Потом он "прилипает" и ведёт себя как fixed.

Absolute
-Элемент выпадает из потока, место под него не резервируется.
-Координаты (top, left, right, bottom) считаются от ближайшего предка с position: relative | absolute | fixed | sticky.
-Если такого предка нет → считается от <html> (всей страницы).

Relative
-Элемент остаётся в потоке, но может сдвигаться относительно своего обычного места.
-top, left, right, bottom смещают его, но сохраняется место под ним.

Static(по умолчанию)
-Элемент расположен в потоке документа (как обычный блок).
-Не реагирует на top, left, right, bottom.

Fixed
-Элемент всегда привязан к экрану (viewport).
-Не зависит от прокрутки, всегда остаётся на месте.
          `,
          },
        ],
      },
      {
        id: "selector-specificity",
        label: "Вес специфичности селекторов",
        code: [
          {
            content: `
Тип селектора		      Описание селектора		    Вес (число)

*			              универсальный селектор		0
div			              тег				            1
::first-letter		     псевдоэлемент			        1
.class			          класс				            10
:hover			          псевдокласс			        10
[атрибут="значение"]	  селектор атрибута		        10
#content		          селектор по id			    100
style="color:red;"	      стили в атрибуте style		1000
!important		          суффикс увеличения веса		10000
        `,
          },
        ],
      },
      {
        id: "pseudo-class-element",
        label: "Псевдоклассы/Псевдоэлементы",
        code: [
          {
            lang: "css",
            content: `
Псевдоклассы — это ключевые слова, которые начинаются с двоеточия:

:first-child
:last-child
:only-child
:invalid
:hover
:focus
Etc.

Псевдоэлементы ведут себя сходным образом, однако они действуют так,
как если бы вы добавили в разметку целый новый HTML-элемент,
а не применили класс к существующим элементам.

Псевдоэлементы начинаются с двойного двоеточия ::.

::first-line
::first-letter
::marker
::selection
Etc.

Существует пара специальных псевдоэлементов,
которые используются вместе со свойством content для вставки
содержимого в документ с помощью CSS.

::before
::after
          `,
          },
        ],
      },
      {
        id: "scroll-lock",
        label: "Блокировка скролла для модалок",
        description:
          "Пока модалка открыта, установите html, body { overflow: hidden; scrollbar-gutter: stable; }, чтобы избежать дёрганий макета.",
      },
    ],
  },
  js: {
    key: "ts",
    title: "JavaScript",
    rules: [
      {
        id: "variables",
        label: "Переменные var, let, const",
        code: [
          {
            content: `
| Характеристика                     | var                                                  | let                                                    | const                                                  |
| ---------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Область видимости                  | Функция (function scope)                             | Блок {} (block scope)                                  | Блок {} (block scope)                                  |
| Поднятие (hoisting)                | Поднимается вверх и инициализируется как undefined   | Поднимается, но доступна только после объявления (TDZ) | Поднимается, но доступна только после объявления (TDZ) |
| Повторное объявление               | ✅ Можно в одной области                             | ❌ Ошибка                                              | ❌ Ошибка                                              |
| Изменение значения                 | ✅ Можно                                             | ✅ Можно                                               | ❌ Нельзя                                              |
| Инициализация при объявлении       | ❌ Не обязательна                                    | ❌ Не обязательна                                      | ✅ Обязательна                                         |
| Привязка к window (в браузере)     | ✅ Да (window.varName)                               | ❌ Нет                                                 | ❌ Нет                                                 |
`,
          },
        ],
      },
      {
        id: "data-types",
        label: "Типы данных и мутабельность; Boxing/Unboxing",
        code: [
          {
            lang: "js",
            content: `String - немутабельный
Number - немутабельный
BigInt - немутабельный
Boolean - немутабельный
Null - немутабельный
Undefined - немутабельный
Object - мутабельный
Symbol - немутабельный

все примитивы немутабельны, а объекты мутабельны. 
================
Boxing/Unboxing

В JS происходит автоматически для примитивов при вызове методов или операторов.

Boxing - это процесс преобразования примитивного типа в объект.
Unboxing - это процесс преобразования объекта в примитивный тип.

let a = 1;
let b = new Number(1);

console.log(a == b); // true
console.log(a === b); // false
console.log(b.valueOf()); // 1 - Unboxing
console.log(a + b); // 2

let c = "1";
let d = new String("1");

console.log(c == d); // true
console.log(c === d); // false
console.log(d.valueOf()); // "1" - Unboxing
console.log(c + d); // "11"
console.log(c + d); // "11"`,
          },
        ],
      },
      {
        id: "functions",
        label: "Функции",
        code: [
          {
            lang: "js",
            content: `
| Характеристика                    | Function Declaration                                        | Function Expression                                | Arrow Function                                                       |
| --------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| **Синтаксис**                     | function foo() { ... }                                      | const foo = function () { ... }                    | const foo = () => { ... }                                            |
| **Hoisting (поднятие)**           | Можно вызвать до объявления                                 | Нет — только после определения                     | Нет — только после определения                                       |
| **this**                          | Значение зависит от контекста вызова                        | Значение зависит от контекста вызова               | Лексическое: берется из внешнего окружения                           |
| **arguments**                     | Доступен объект arguments                                   | Доступен объект arguments                          | Нет объекта arguments (надо использовать rest-параметры ...args)     |
| **Использование как конструктор** | Можно использовать с new                                    | Можно использовать с new                           | Нельзя использовать с new                                            |
| **Особенности**                   | Хорошо подходит для глобальных/функций, которые нужны везде | Гибкость: можно передавать как значение            | Компактно, удобно для колбеков, но нет this и arguments              |
| **Пример**                        | function sum(a, b) { return a + b; }                        | const sum = function (a, b) { return a + b; }      | const sum = (a, b) => a + b;                                         |
          `,
          },
        ],
      },
      {
        id: "capturing-bubbling",
        label: "Capturing & Bubbling",
        description:
          "Погружение (capturing) — событие идёт сверху вниз: от window → document → body → … → к самому вложенному элементу. Всплытие (bubbling) — после этого событие идёт снизу вверх: от целевого элемента → родителя → … → до document.",
        code: [
          {
            lang: "js",
            content: `// Пример: обработка событий с capturing и bubbling

document.querySelector("#outer").addEventListener(
  "click",
  () => console.log("outer (capturing)"),
  true // capturing
);

document.querySelector("#inner").addEventListener(
  "click",
  () => console.log("inner (bubbling)"),
  false // bubbling (по умолчанию)
);

// HTML:
// <div id="outer">
//   <button id="inner">Кликни меня</button>
// </div>

// При клике на кнопку:
// 1. outer (capturing)
// 2. inner (bubbling)

🔹 Управление фазами

Метод addEventListener имеет третий аргумент:

element.addEventListener(type, listener, useCapture);
useCapture = true → обработчик сработает на фазе погружения.
useCapture = false (по умолчанию) → обработчик сработает на фазе всплытия.

| Метод                                    | Что делает                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| useCapture                               | Выбирает фазу обработки (capturing или bubbling).                                           |
| e.stopPropagation()                      | Останавливает всплытие/погружение, но не мешает другим обработчикам на том же элементе.     |
| e.stopImmediatePropagation()             | Останавливает всплытие/погружение и отменяет остальные обработчики на текущем элементе.     |
| e.nativeEvent.stopImmediatePropagation() | То же, но на уровне нативного DOM-события, вне системы SyntheticEvent React.                |

`,
          },
        ],
      },
      {
        id: "garbage-collection",
        label: "Сборка мусора",
        code: [
          {
            lang: "js",
            content: `1️⃣ Как делать сборку мусора на практике

Убирать ссылки на объекты, когда они больше не нужны

let user = { name: "Alice" };
user = null; // объект становится недостижимым → GC может его удалить

Закрывать таймеры и слушатели событий

let interval = setInterval(() => console.log("tick"), 1000);
clearInterval(interval); // удаляем ссылку на функцию → GC может удалить

Удалять DOM-узлы, которые больше не нужны

let div = document.getElementById("myDiv");
div.remove(); 
div = null; // разрываем ссылку, чтобы GC мог удалить узел

Очищать большие массивы или объекты

let cache = [obj1, obj2, obj3];
// когда больше не нужны
cache.length = 0; // или cache = null;

2️⃣ Где сборка мусора “само собой” происходит

Переменные локальные внутри функций автоматически становятся
недостижимыми, когда функция завершает выполнение.
Объекты, на которые нет ссылок в коде, будут удалены движком автоматически.

Пример:

function createUser() {
  let user = { name: "Bob" };
  return user;
}
let u = createUser(); // user доступен через u
u = null; // теперь объект недостижим → GC удалит

3️⃣ Где нужно быть осторожным (могут быть утечки)

Глобальные переменные — ссылки на объекты живут всю жизнь приложения.
Замыкания, которые держат ссылки на большие объекты.
Таймеры и слушатели событий, которые не удалены.
Кэш и массивы, где объекты остаются “висящими”.

4️⃣ Основное правило

Сборка мусора происходит автоматически, но чтобы она сработала
— нужно не держать ссылки на объекты, которые больше не нужны.

💡 На практике это значит:

Разрывать ссылки (obj = null) для больших объектов, которые больше не нужны.
Удалять слушатели, таймеры и DOM-узлы, когда они не нужны.
Не хранить в памяти ненужные кэши и большие массивы.
            `,
          },
        ],
      },
      {
        id: "ternary-expresions",
        label: "Тернарные операторы",
        code: [
          {
            lang: "js",
            content: `
| Оператор                  | Что проверяет                         | Результат                                                                                    | Примеры                                             
| ------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------| ---------------------------------------------------------
| || (OR)                   | Любое **falsy** значение              | Возвращает первое значение, которое считается truthy, или последнее значение, если все falsy.| let a = 0/false/null/undefined/NaN/-0/""; let b = 1; let c = a || b; // c = 1
| && (AND)                  | Любое **falsy** значение              | Возвращает **первое falsy** значение или последнее truthy                                    | let a = 0; let b = 5; let c = a && b; // c = 0   
| ?? (nullish coalescing)   | Только **null или undefined**         | Возвращает **первое не null/undefined** значение                                             | let a = 0; let b = 5; let c = a ?? b; // c = 0  
| ?: (тернарный)            | Любое выражение, приводимое к Boolean | Возвращает **значение после ? если true, после : если false**                                | let a = 0; let c = a ? "yes" : "no"; // c = "no"
`,
          },
        ],
      },
      {
        id: "optional-chaining",
        label: "Optional chanining(?.)",
        code: [
          {
            lang: "js",
            content: `1️⃣ Синтаксис object?.value

Проверяет, существует ли объект (object) и не равен ли он null или undefined.

Если object есть → вернёт object.value.
Если object null или undefined → вернёт undefined без ошибки.

2️⃣ Примеры
const obj1 = { value: 42 };
const obj2 = null;

console.log(obj1?.value); // 42
console.log(obj2?.value); // undefined (не выбрасывает ошибку)
console.log(obj1?.missing); // undefined (ключа нет, но ошибка не выбрасывается)

3️⃣ Ключевые моменты

Не проверяет наличие самого свойства напрямую — просто безопасно пытается его получить.
Если нужно проверить наличие ключа:

if ('value' in obj1) { ... }

Можно использовать для вызова функций безопасно:

obj?.method?.(); // вызов только если obj и method существуют

✅ Вывод:
object?.value безопасно возвращает value, если объект существует, иначе undefined.
Не кидает ошибку, даже если объекта нет.
Не гарантирует, что свойство существует — просто проверяет доступ к нему безопасно.
          `,
          },
        ],
      },
      {
        id: "cycle",
        label: "while/for циклы",
        description:
          "Избегайте мутаций входных данных. Используйте spread и немутирующие методы (map/filter/reduce).",
        code: [
          {
            lang: "js",
            content: `1️⃣ Цикл while
Синтаксис:

while (условие) {
  // код выполняется, пока условие истинно
}

Особенности:
Проверяет условие перед каждой итерацией.
Если условие изначально false, тело цикла не выполнится ни разу.
Используется, когда неизвестно количество итераций заранее.

Пример:

let i = 0;
while (i < 5) {
  console.log(i);
  i++; // важно не забывать увеличивать счетчик!
}

Вывод: 0 1 2 3 4

2️⃣ Цикл for

Синтаксис:

for (инициализация; условие; шаг) {
  // код
}

инициализация — создаём/обнуляем счетчик (let i = 0)
условие — проверяется перед каждой итерацией (i < 5)
шаг — выполняется после каждой итерации (i++)

Пример:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

Вывод: 0 1 2 3 4

Особенности:
Используется, когда известно количество итераций.
Можно использовать несколько переменных в инициализации, например:

for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(i, j);
}`,
          },
        ],
      },
      {
        id: "immutability",
        label: "Отдавайте предпочтение неизменяемости",
        description:
          "Избегайте мутаций входных данных. Используйте spread и немутирующие методы (map/filter/reduce).",
      },
      {
        id: "error-handling",
        label: "Явно обрабатывайте ошибки",
        description:
          "Используйте try/catch вокруг асинхронных границ и возвращайте осмысленные сообщения об ошибках.",
      },
      {
        id: "array-methods",
        label: "Методы массива",
        description:
          "Используйте toSorted, toReversed, toSpliced, для немутирующих операций; по возможности предпочитайте map/concat/slice.",
        code: [
          {
            lang: "js",
            content: `
| Метод     | Описание                                                          | Синтаксис                                    | Пример                                                                       |
| --------- | ----------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| push      | Добавляет элемент(ы) в конец массива                              | arr.push(elem1, elem2, ...)                  |  let arr = [1,2]; arr.push(3); // [1,2,3]                                    |
| pop       | Удаляет последний элемент и возвращает его                        | arr.pop()                                    |  let arr = [1,2,3]; arr.pop(); // 3, arr = [1,2]                             |
| shift     | Удаляет первый элемент и возвращает его                           | arr.shift()                                  |  let arr = [1,2,3]; arr.shift(); // 1, arr = [2,3]                           |
| unshift   | Добавляет элемент(ы) в начало массива                             | arr.unshift(elem1, elem2, ...)               |  let arr = [2,3]; arr.unshift(1); // [1,2,3]                                 |
| concat    | Объединяет массивы                                                | arr1.concat(arr2, ...)                       |  [1,2].concat([3,4]); // [1,2,3,4]                                           |
| slice     | Возвращает копию части массива                                    | arr.slice(start, end)                        |  [1,2,3,4].slice(1,3); // [2,3]                                              |
| splice    | Добавляет/удаляет элементы на месте                               | arr.splice(start, deleteCount, ...items)     |  let arr=[1,2,3]; arr.splice(1,1,9); // arr=[1,9,3]                          |
| forEach   | Проходит по всем элементам, выполняя функцию                      | arr.forEach(callback)                        |  [1,2,3].forEach(x => console.log(x));                                       |
| map       | Создаёт новый массив, применяя функцию к каждому элементу         | arr.map(callback)                            |  [1,2,3].map(x => x*2); // [2,4,6]                                           |
| filter    | Создаёт новый массив с элементами, которые проходят условие       | arr.filter(callback)                         |  [1,2,3,4].filter(x=>x%2===0); // [2,4]                                      |
| reduce    | Сворачивает массив к одному значению                              | arr.reduce((acc, curr) => ..., initialValue) |  [1,2,3].reduce((a,b)=>a+b,0); // 6                                          |
| find      | Возвращает первый элемент, который удовлетворяет условию          | arr.find(callback)                           |  [1,2,3].find(x=>x>1); // 2                                                  |
| findIndex | Возвращает индекс первого элемента, который удовлетворяет условию | arr.findIndex(callback)                      |  [1,2,3].findIndex(x=>x>1); // 1                                             |
| includes  | Проверяет наличие элемента                                        | arr.includes(value)                          |  [1,2,3].includes(2); // true                                                |
| indexOf   | Возвращает индекс первого вхождения                               | arr.indexOf(value)                           |  [1,2,3,2].indexOf(2); // 1                                                  |
| reverse   | Разворачивает массив на месте                                     | arr.reverse()                                |  [1,2,3].reverse(); // [3,2,1]                                               |
| sort      | Сортирует массив на месте                                         | arr.sort([compareFn])                        |  [3,1,2].sort(); // [1,2,3]                                                  |
| join      | Соединяет элементы массива в строку                               | arr.join(separator)                          |  [1,2,3].join('-'); // "1-2-3"                                               |
| some      | Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию  | arr.some(callback)                           |  [1,2,3].some(x=>x>2); // true                                               |
| every     | Проверяет, удовлетворяют ли все элементы условию                  | arr.every(callback)                          |  [1,2,3].every(x=>x>0); // true                                              |
| toSorted  | Создаёт отсортированную копию массива, не меняя исходный          | arr.toSorted([compareFn])                    |  const arr=[3,1,2]; const sorted=arr.toSorted(); // sorted=[1,2,3]           |
| toReversed| Создаёт обратную копию массива                                    | arr.toReversed()                             |  const arr=[1,2,3]; const rev=arr.toReversed(); // rev=[3,2,1]               |
| toSpliced | Создаёт копию массива с изменениями, не мутируя исходный          | arr.toSpliced(start, deleteCount, ...items)  |  const arr=[1,2,3]; const sp=arr.toSpliced(1,1,9); // sp=[1,9,3]             |
            `,
          },
        ],
      },
      {
        id: "collections",
        label: "Map, WeakMap, WeakSet, Set",
        code: [
          {
            content: `Map: ключ→значение (любой ключ).методы(set(value), get(value), delete(value), has(value), clear, size); работает(for...of, forEach, [...map])

WeakMap: только объектные ключи (дружит со сборщиком мусора). Хранит ключи слабо → если на объект-ключ больше нет ссылок,
он удаляется сборщиком мусора вместе со значением.
Нет свойства size, нет перебора (невозможно обойти все пары). Методы (set(key, value); get(key); has(key); delete(key))

Set: уникальные значения — [...new Set(arr)] для дедупликации. хранит все примитивы; значения уникальны;
методы(add(value), delete(value), has(value), size); работает(for...of, forEach)

WeakSet хранит только объекты; Хранит ключи слабо → собрка мусора, если нет ссылок на объект; нет свойств size; нельзя перебрать(-forEach).
          `,
          },
        ],
      },
      {
        id: "promises",
        label: "Promise",
        description:
          "Promise — это объект, который представляет результат асинхронной операции, которая может завершиться успешно или с ошибкой в будущем.",
        code: [
          {
            lang: "js",
            content: `Состояния Promise:

Pending – ожидание (не завершён)
Fulfilled – успешно завершён, есть результат
Rejected – завершён с ошибкой"

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Done!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))  // "Done!"
  .catch(err => console.error(err));


Методы Promise

| Метод / Свойство     | Описание                                                                       | Синтаксис                               | Пример                                                                                             |
|----------------------|--------------------------------------------------------------------------------|-----------------------------------------|----------------------------------------------------------------------------------------------------|
| Promise              | Конструктор для создания нового промиса                                        | new Promise((resolve, reject) => {...}) | const p = new Promise((resolve, reject) => { if(success) resolve("OK"); else reject("Error"); });  |
| .then()              | Обрабатывает успешное выполнение промиса                                       | promise.then(onFulfilled, onRejected)   | p.then(result => console.log(result), error => console.log(error));                                |
| .catch()             | Обрабатывает ошибку промиса                                                    | promise.catch(onRejected)               | p.catch(error => console.log(error));                                                              |
| .finally()           | Выполняется всегда после завершения промиса (успех или ошибка)                 | promise.finally(callback)               | p.finally(() => console.log("Done"));                                                              |
| Promise.all()        | Ждет выполнения всех промисов, возвращает массив результатов, если все успешны | Promise.all([p1, p2, ...])              | Promise.all([p1, p2]).then(results => console.log(results));                                       |
| Promise.allSettled() | Ждет завершения всех промисов, возвращает их статусы и значения                | Promise.allSettled([p1, p2, ...])       | Promise.allSettled([p1, p2]).then(results => console.log(results));                                |
| Promise.race()       | Возвращает результат первого выполненного промиса                              | Promise.race([p1, p2, ...])             | Promise.race([p1, p2]).then(result => console.log(result));                                        |
| Promise.any()        | Возвращает результат первого успешного промиса, игнорируя ошибки               | Promise.any([p1, p2, ...])              | Promise.any([p1, p2]).then(result => console.log(result));                                         |
| Promise.resolve()    | Создает промис, который сразу выполнен успешно                                 | Promise.resolve(value)                  | Promise.resolve(42).then(console.log); // 42                                                       |
| Promise.reject()     | Создает промис, который сразу завершен с ошибкой                               | Promise.reject(error)                   | Promise.reject("Error").catch(console.log); // Error                                               |
`,
          },
        ],
      },
      {
        id: "event-loop",
        label: "Event loop и планирование",
        description:
          "WebAPI (console.log) => Микрозадачи (Promises.resolve()/reject(), queueMicroTask, mutationObserver) => Макрозадачи (SetTimeout, setInterval, Events, Browser Events). \n requestAnimationFrame — для анимаций; requestIdleCallback — для фоновых задач.",
        code: [
          {
            lang: "js",
            content: `
requestAnimationFrame(callback) - Для сложных анимаций с помощью JS, когда CSS
не достаточно.

Это встроенный метод браузера, который планирует выполнение функции перед
следующей перерисовкой экрана.

Используется для плавных анимаций, потому что синхронизируется
с частотой обновления дисплея (обычно 60 FPS ≈ 16.6ms).

👉 Пример:

function animateBox(time) {
  box.style.transform = translateX({Math.sin(time / 200) * 100}px);
  requestAnimationFrame(animateBox);
}

requestAnimationFrame(animateBox);

📌 Здесь браузер вызывает animateBox каждые ~16 мс и анимация 

requestIdleCallback(callback)

Это другой API, который вызывает колбэк, когда у браузера есть свободное время (например, когда он не занят рендерингом или обработкой событий).

Идеален для фона: логирование, аналитика, предзагрузка данных, "ленивая" работа.

У колбэка есть аргумент deadline, который показывает, сколько ещё миллисекунд свободно до следующей задачи.

👉 Пример:

requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    performTask(tasks.shift());
  }
});
        `,
          },
        ],
      },
      {
        id: "multithreading-workers",
        label: "Многопоточность (Workers)",
        description:
          "В браузере параллельность реализуется через Web Workers (и Service Workers). Выполняют код в отдельных потоках, общаются с основным потоком через postMessage/onmessage.",
      },
      {
        id: "call-bind-apply",
        label: "call, bind, apply",
        description:
          "Меняют this и передают аргументы: call(fn, ...args), apply(fn, args[]), bind возвращает новую функцию с зафиксированным this/частью аргументов.",
        code: [
          {
            lang: "js",
            content: `Стрелочная функция наследует this от родительской ФУНКЦИИ
ЕСЛИ СТРЕЛОЧНАЯ ФУНКЦИЯ ЯВЛЯЕТСЯ АРГУМЕНТОМ ОБЪЕКТА, ОНА НЕ БЕРЕТ THIS ОТ ОБЪЕКТА

КОНТЕКСТ СОЗДАЕТСЯ ТОЛЬКО ПРИ ВЫЗОВЕ ФУНКЦИИ.

const obj = { 
    a: 'test',
    b: function(){console.log(this.a.length)} => 4,
    c: () => console.log(this.a.length) " => this = window, вернет undefined"
   }
  
function test1(props) {
    console.log('1', this, props);
  }
  
const test2 = (props) => {
    console.log('2', this, props);
  }
  
Bind, Call, Apply меняют контекст для функции / НЕ РАБОТАЕТ ДЛЯ СТРЕЛОЧНЫХ ФУНКЦИЙ
Bind для объекта сработает только 1 раз. Obj.bind({context: 1}).bind({context: 2})
=> this === {context:1}
  
  test1.bind({par: '1111'})('111') => "1" { "par": "1111" } '111'
  test1.call({par: '3333'}, 'hello') => "1" { "par": "3333" } "hello"
  test1.apply({par: '4444'}, ['here i am']) => "1" { "par": "3333" } "here i am"
  
  test2.bind({par: '2222'})()=> вернет undefined
  test2.call({par: '2222'})=> вернет undefined
  test2.apply({par: '2222'})=> вернет undefined`,
          },
        ],
      },
      {
        id: "arrow-vs-function",
        label: "Стрелочные vs обычные функции",
        description:
          "Стрелочные не имеют собственного this/arguments/new и берут this лексически; не подходят как методы, bind/call/apply на них не меняют this. Обычные функции имеют динамический this и могут быть конструкторами.",
      },
      {
        id: "debounce",
        label: "Debounce",
        description:
          "Откладывает вызов функции, пока события продолжают приходить. Таймер сбрасывается при каждом срабатывании и выполняется через t мс после последнего.",
        code: [
          {
            lang: "js",
            content: `const debounce = (fn, t) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};`,
          },
        ],
      },
      {
        id: "throttle",
        label: "Throttle",
        description:
          "Ограничивает частоту вызовов: не чаще, чем раз в t мс. Полезно для scroll/resize/drag.",
        code: [
          {
            lang: "js",
            content: `const throttle = (fn, delay) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    fn(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};`,
          },
        ],
      },
      {
        id: "deep-copy",
        label: "Deep copy",
        code: [
          {
            lang: "js",
            content: `function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = {};

// проверяем собственные ключи принадлежащие только нашему объекту,
// без наследованных/прототипированных свойств(вдруг на проекте кто-то добавил всем объектам какое-то свойтво)
// Object.prototype.extra = "👻";

  for (const key of Object.keys(obj)) {
      copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

Встроенная более продуманная альтернатива
structuredClone(obj)
`,
          },
        ],
      },
      {
        id: "long-polling",
        label: "Long polling",
        description:
          "Клиент делает запрос и ждёт; по ответу/таймауту сразу повторяет. Простой realtime без WebSocket.",
        code: [
          {
            lang: "js",
            content: `async function longPoll() {
  try {
    const res = await fetch("/api/updates");
    const data = await res.json();
    console.log("Получили данные:", data);

    // сразу снова делаем запрос
    longPoll();
  } catch (err) {
    console.error(err);
    setTimeout(longPoll, 1000); // если ошибка, попробовать через 1 сек
  }
}`,
          },
        ],
      },
      {
        id: "fetch-with-backoff",
        label: "Fetch с экспоненциальным backoff",
        description:
          "Повтор запросов при ошибках с задержкой baseDelay * 2^attempt до maxAttempts. Снижает нагрузку в пиковые сбои.",
        code: [
          {
            lang: "js",
            content: `async function fetchWithBackoff(url, attempt = 0) {
  const maxAttempts = 5;
  const baseDelay = 500; // 0.5 сек

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка сети");
    return await res.json();
  } catch (err) {
    if (attempt < maxAttempts) {
      const delay = baseDelay * 2 ** attempt; // экспоненциальный рост
      console.log(Попытка {attempt + 1}, ждем {delay}ms);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithBackoff(url, attempt + 1);
    } else {
      throw err;
    }
  }
}

// Использование
fetchWithBackoff("/api/data")
  .then(console.log)
  .catch(console.error);`,
          },
        ],
      },
      {
        id: "closure",
        label: "Замыкание(closure)",
        description: "Функция вызывает другую функцию, которая берет контекст внешней.",
        code: [
          {
            lang: "js",
            content: `function f(fnum) {
this.number = 2;
const ctx = { num: 1 }
return function(snum) {
  return fnum + snum + ctx.num + this.number;
  }
}`,
          },
        ],
      },
      {
        id: "recursion",
        label: "Рекурсия(recursion)",
        description: "Функция вызывает сама себя до определенного момента.",
        code: [
          {
            lang: "js",
            content: `function factorial(n) {
  if (n === 0) return 1;        // O(1)
  return n * factorial(n - 1);   // O(n)
}`,
          },
        ],
      },
      {
        id: "custom-reduce-map",
        label: "Custom Reduce/Map",
        code: [
          {
            lang: "js",
            content: `const a = [1,2,3]
const customMap = (func, arr) => {
	const newArr = [];
	arr.forEach( v => newArr.push( func(v) ) )
	return newArr
} 
const multiply2 = (num) => num * 2
console.log( newMap(multiply2, a))  
      
----------------
const a = [1,2,3]
const customReduce = ( func, arr) => {
  let result = arr[0];
  for(let index = 1 ; index < arr.length; index++){
    result = func(result, arr[index])
  }
  return result
}          
const sum = (num, num2) => num + num2
console.log(newReduce(sum, a))
            `,
          },
        ],
      },
      {
        id: "proto/prototype",
        label: "__proto__/prototype",
        code: [
          {
            lang: "js",
            content: `Prototype. Это свойство функции-конструктора. 
Оно используется, чтобы создавать цепочку наследования у объектов, созданных через new.

__proto__. Это ссылка внутри объекта, указывающая на его прототип.
Неофициальное свойство (раньше), сейчас стандартное, но считается «низкоуровневым»
`,
          },
        ],
      },
    ],
  },
  ts: {
    key: "ts",
    title: "TypeScript",
    rules: [
      {
        id: "unknown-over-any",
        label: "Any vs Unknown vs Never",
        image: anu,
      },
      {
        id: "types-vs-interfaces",
        label: "Type vs Interface",
        description:
          "Type поддерживает примитивы/union/tuple и композицию через &. Interface ориентирован на объекты; поддерживает декларативное слияние и extends/implements.",
      },
      {
        id: "utility-types",
        label: "Utility types",
        code: [
          {
            lang: "ts",
            content: `
1. Partial<T>

Все свойства становятся необязательными (?):

interface User {
  id: number;
  name: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string }

2. Required<T>

Все свойства становятся обязательными:

type ReqUser = Required<PartialUser>;
// { id: number; name: string }

3. Readonly<T>

Сделать все свойства только для чтения:

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string }

4. Record<K, T>

Создаёт объект с ключами K и значениями T:

type Roles = "admin" | "user";
type RoleMap = Record<Roles, string>;
// { admin: string; user: string }

5. Pick<T, K>

Выбирает подмножество свойств из типа:

type UserName = Pick<User, "name">;
// { name: string }

6. Omit<T, K>

Исключает свойства K:

type UserWithoutId = Omit<User, "id">;
// { name: string }

7. Exclude<T, U>

Исключает из T типы, которые содержатся в U:

type A = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

8. Extract<T, U>

Выбирает из T типы, которые есть в U:

type B = Extract<"a" | "b" | "c", "a" | "c">; // "a" | "c"

9. NonNullable<T>

Удаляет null и undefined из типа:

type C = NonNullable<string | null | undefined>; // string

10. ReturnType<T>

Получает тип возвращаемого значения функции:

function fn() { return 42; }
type R = ReturnType<typeof fn>; // number

11. InstanceType<T>

Получает тип экземпляра класса:

class UserClass { name = "Alice"; }
type U = InstanceType<typeof UserClass>; // UserClass

12. Parameters<T>

Тип параметров функции в виде кортежа:

function sum(a: number, b: number) {}
type Params = Parameters<typeof sum>; // [number, number]

13. ConstructorParameters<T>

Параметры конструктора класса:

class Person {
  constructor(name: string, age: number) {}
}

type CP = ConstructorParameters<typeof Person>; // [string, number]

14. ReturnType<T>

Тип возвращаемого значения функции (уже упомянуто выше).

15. Required<T> / Partial<T> / Readonly<T>

Уже перечислены выше, но важно помнить их как основные трансформации типа.         
            `,
          },
        ],
      },
      {
        id: "generics",
        label: "Generics",
        description:
          "Generics позволяют создавать функции, классы или интерфейсы, которые работают с разными типами данных, но при этом сохраняют строгую типизацию.",
        code: [
          {
            lang: "ts",
            content: `
function identity<T>(value: T): T {
  return value;
}

let a = identity<number>(42);   // T = number
let b = identity<string>("Hi"); // T = string
        `,
          },
        ],
      },
      {
        id: "conditional-types",
        label: "Conditional Types",
        description: "Conditional types — if/else для типов. T extends U ? X : Y",
      },
      {
        id: "infer",
        label: "Infer",
        description: "Позволяет достать тип из структуры (массива, функции, Promise и т.п.).",
        code: [
          {
            lang: "ts",
            content: `
type ElementType<T> = T extends (infer U)[] ? U : T;
type A = ElementType<string[]>;   // string
type B = ElementType<number[]>;   // number
type C = ElementType<boolean>;    // boolean (не массив → возвращаем сам T)

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = ReturnType<() => string>;         // string
type B = ReturnType<(x: number) => number>; // number
type C = ReturnType<Date>;                 // never (не функция)

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<number>>;  // number
type B = UnwrapPromise<string>;           // string
`,
          },
        ],
      },
      {
        id: "enum",
        label: "Enum",
        description:
          "Это способ задать набор именованных констант. Используется, когда у нас есть ограниченное количество вариантов (статусов, ролей, направлений и т. д.).",
        code: [
          {
            lang: "ts",
            content: `enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}`,
          },
        ],
      },
      {
        id: "namespaces",
        label: "Namespaces",
        description:
          "Namespace (пространство имён) — это способ группировать связанный код (типы, функции, константы, интерфейсы и т. д.), чтобы избежать конфликтов имён. В TS это старый подход (сейчас чаще используют ES-модули), но всё ещё встречается. Важно: всё, что внутри namespace, нужно экспортировать через export, иначе будет доступно только внутри.",
        code: [
          {
            lang: "ts",
            content: `
namespace Utils {
  export function greet(name: string) {
    return ...;
  }

  export const VERSION = "1.0";
}

console.log(Utils.greet("Alice")); // Hello, Alice!
console.log(Utils.VERSION); // 1.0`,
          },
        ],
      },
      {
        id: "declaration",
        label: "Declaration",
        description:
          "В TypeScript declaration (объявление) — это форма описания типа, интерфейса, переменной, функции, класса и т. д., без непосредственной реализации (или с ней).",
        code: [
          {
            lang: "ts",
            content: `
// Объявление переменной
declare const API_URL: string;

// Объявление функции
declare function getUser(id: number): Promise<User>;

// Объявление интерфейса
interface User {
  id: number;
  name: string;
}`,
          },
        ],
      },
    ],
  },
  react: {
    key: "react",
    title: "React",
    rules: [
      {
        id: "state-minimization",
        label: "Держите состояние минимальным",
        description:
          "Выводите состояние там, где это возможно, и располагайте его ближе к месту использования. Избегайте дублирования серверных данных на клиенте.",
      },
      {
        id: "effects-discipline",
        label: "Осторожнее с эффектами",
        description:
          "Используйте useEffect для побочных эффектов, не влияющих на рендер. Не выполняйте в нём вычисления, возможные в процессе рендера.",
      },
      {
        id: "abort-fetch",
        label: "AbortController",
        description:
          "Используйте AbortController и отменяйте запросы в cleanup, чтобы не сеттить состояние после размонтирования.",
        code: [
          {
            lang: "jsx",
            content: `import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("❌ Запрос отменён");
        } else {
          setError(err.message);
        }
      });

    // cleanup — отмена при размонтировании компонента
    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <p>Ошибка: {error}</p>;
  if (!posts.length) return <p>Загрузка...</p>;

  return (
    <ul>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
          `,
          },
        ],
      },
      {
        id: "effects-vs-layout",
        label: "useEffect vs useLayoutEffect",
        description:
          "useEffect выполняется после отрисовки; useLayoutEffect — до неё. Предпочитайте useEffect, если не нужно измерять/менять layout.",
      },
      {
        id: "imperative-handle",
        label: "useImperativeHandle",
        description:
          "При необходимости экспонируйте минимальный набор императивных методов через ref (focus, open/close).",
      },
      {
        id: "portals-dialog",
        label: "Порталы и <dialog>",
        description:
          "Используйте createPortal для рендера вне иерархии (например, оверлеи). Для доступных модалок предпочитайте нативный <dialog>.",
      },
    ],
  },
  vue: {
    key: "vue",
    title: "Vue",
    rules: [
      {
        id: "single-file-components",
        label: "Используйте структуру SFC",
        description:
          "Применяйте <script setup> с типизированными props и emits; стили делайте scoped при необходимости.",
      },
      {
        id: "reactivity-principles",
        label: "Работайте в рамках реактивности",
        description:
          "ref/reactive — для состояния, computed — для производных, watch — для побочных эффектов. Не мутируйте props.",
      },
      {
        id: "vue-state-management",
        label: "Provide/Inject",
        description:
          "provide — позволяет передавать данные вниз по дереву компонентов, без необходимости передавать их через props на каждом уровне. inject — позволяет дочернему компоненту получить эти данные, которые предоставил родитель (или любой предок). Это удобно для глобальных настроек, сервисов, состояния, которое не нужно поднимать в Vuex или Pinia.",
      },
    ],
  },
  nextjs: {
    key: "nextjs",
    title: "Next.js",
    rules: [
      {
        id: "server-first",
        label: "Предпочитайте Server Components",
        description:
          'По умолчанию используйте Server Components в App Router. Помечайте "use client" только при необходимости.',
      },
      {
        id: "data-fetching",
        label: "Грамотно используйте кэш сегментов",
        description:
          "Выбирайте корректную стратегию кэширования fetch и ревалидации (force-cache, no-store, revalidate).",
      },
    ],
  },
  nuxtjs: {
    key: "nuxtjs",
    title: "Nuxt.js",
    rules: [
      {
        id: "data-layer",
        label: "Используйте useFetch и серверные маршруты",
        description:
          "Задействуйте серверные маршруты Nuxt и useFetch для SSR-доступа к данным и кэширования.",
      },
      {
        id: "islands",
        label: "Гидрируйте только нужное",
        description:
          "Предпочитайте частичную гидратацию (islands/компоненты), избегайте лишнего client-only кода на страницах.",
      },
    ],
  },
  http: {
    key: "http",
    title: "HTTP",
    rules: [
      {
        id: "methods-core",
        label: "HTTP methods (core)",
        description:
          "GET: чтение. POST: создание/отправка данных. DELETE: удаление ресурса. PATCH: частичное обновление. PUT: создание/полная замена ресурса.",
      },
      {
        id: "methods-others",
        label: "HTTP methods (others)",
        description:
          "OPTIONS: параметры соединения. CONNECT: туннель к серверу. TRACE: эхо-запрос. HEAD: как GET, но без тела ответа.",
      },
      {
        id: "tokens-overview",
        label: "Регистрационные токены",
        description:
          "Access token: короткоживущий JWT, отправляется в каждом запросе, авторизует пользователя. Refresh token: долгоживущий, хранится на сервере/в базе, используется для получения нового access token при истечении срока.",
      },
      {
        id: "token-storage",
        label: "Где хранить токены",
        description:
          "Храните refresh token в HttpOnly cookie; access token — в памяти (или session storage). Это снижает риск CSRF и ограничивает XSS-доступ к RT.",
      },
      {
        id: "jwt-structure",
        label: "JWT структура и подпись",
        description:
          "JWT = header.payload.signature (Base64Url). Подпись: HMAC-SHA256(base64url(header)+'.'+base64url(payload), SECRET). Не кладите чувствительные данные в payload.",
      },
      {
        id: "security-cors-csp",
        label: "CORS и CSP",
        code: [
          {
            lang: "html",
            content: `CORS - Механизм браузера, который определяет, может ли веб-страница
с одного домена (origin) отправлять запросы к другому домену.

Proxy/Access-Control-Allow-Origin.

CSP - Механизм безопасности, который контролирует, какой контент можно загружать
и выполнять на странице (JS, стили, картинки, шрифты).

<meta
  http-equiv="Content-Security-Policy"
  content="
    default-src 'none';
    script-src 'self';
    connect-src 'self' https://*.friendly-site.com;
    style-src 'self';
    img-src 'self' too.friendly.com;
  "
/>`,
          },
        ],
      },
      {
        id: "http/https",
        label: "HTTP vs HTTPS",
        description: `HTTP = 80 порт, данные никак не защищены, нет проверки кому отправляют данные; HTTPS = 443 порт, данные шифруются, подлинность сайта происходит с помощью SSL/TLS сертификатов`,
      },
      {
        id: "http-versions",
        label: "HTTP1.0 vs HTTP1.1 vs HTTP2.0 vs HTTP3.0",
        image: httpversions,
        code: [
          {
            content: `🔹 HTTP/1.0 (1996)
Соединение: Для каждого запроса открывается новое TCP-соединение.
→ Очень неэффективно для страниц с большим количеством картинок, CSS, JS.
Заголовки: Поддержка ограниченных полей.
Кэширование: Базовое (Expires).
Минусы: Большие задержки из-за постоянных TCP-рукопожатий.

🔹 HTTP/1.1 (1997)

Постоянные соединения (Keep-Alive): Несколько запросов можно отправлять по одному TCP-соединению.
Pipelining (почти не применялся): Возможность отправлять несколько запросов подряд до получения ответов, но были проблемы с блокировкой.
Chunked transfer: Потоковая передача данных кусками.
Host header: Поддержка виртуального хостинга (несколько сайтов на одном IP).
Улучшенное кэширование: Cache-Control, ETag.
Минусы: Всё ещё есть head-of-line blocking (задержка из-за последовательности ответов).

🔹 HTTP/2 (2015)

Бинарный протокол вместо текстового → меньше накладных расходов и быстрее парсинг.
Мультиплексирование: Несколько запросов и ответов параллельно в одном TCP-соединении.
Сжатие заголовков (HPACK) → экономия трафика.
Server Push: Сервер может отправлять ресурсы (CSS, JS) до того, как клиент их запросит.
Приоритезация: Клиент может задавать важность запросов.
Минусы: Всё ещё на TCP → при потере пакета тормозит весь поток (head-of-line blocking).

🔹 HTTP/3 (2022, стандарт)

Работает на QUIC (поверх UDP) вместо TCP.
Шифрование встроено (TLS 1.3): Быстрее и безопаснее, чем отдельный TLS-рукопожатие.
Нет head-of-line blocking: Потоки независимы, потеря пакета не тормозит всё соединение.
Быстрый старт: Возможен 0-RTT (запрос сразу при первом соединении).
Устойчивость к смене сети: Соединение сохраняется даже при переходе с Wi-Fi на мобильную сеть.`,
          },
        ],
      },
    ],
  },
  git: {
    key: "git",
    title: "Git",
    rules: [
      {
        id: "rebase",
        label: "rebase",
        description: "Переписывает историю слиянием другой ветки сверху текущей.",
      },
      {
        id: "merge",
        label: "merge",
        description: "Создаёт merge-коммит, объединяя истории веток.",
      },
      {
        id: "reset",
        label: "reset / reset --hard",
        description: "Сброс до коммита; --hard также сбрасывает рабочее дерево.",
      },
      {
        id: "checkout",
        label: "checkout",
        description: "Переключение на коммит/ветку и приведение рабочего дерева к нему.",
      },
      {
        id: "cherry-pick",
        label: "cherry-pick",
        description: "Применение выбранных коммитов поверх текущей ветки.",
      },
      { id: "switch", label: "switch", description: "Современная команда для переключения веток." },
      {
        id: "stash",
        label: "stash",
        description:
          "Временно сохраняет незакоммиченные изменения; apply возвращает, clear очищает.",
      },
      {
        id: "fetch-pull",
        label: "fetch vs pull",
        description: "fetch скачивает историю; pull = fetch + merge (объединяет с локальной).",
      },
      {
        id: "merge-abort",
        label: "merge --abort",
        description: "Отмена процесса слияния, если возникли конфликты.",
      },
    ],
  },
  cicd: {
    key: "cicd",
    title: "CI/CD",
    rules: [
      {
        id: "ci",
        label: "Continuous Integration (CI)",
        description: "Автосборка и автотесты при каждом пуше; ранняя обратная связь.",
        code: [
          {
            lang: "text",
            content: `Непрерывная интеграция:
Цель: 
Обеспечение того, чтобы изменения кода, вносимые членами команды разработки,
интегрировались в общий репозиторий и проходили автоматизированные
тесты как можно скорее.

Процесс: 
Каждый раз, когда разработчик вносит изменения в репозиторий
(например, с использованием системы контроля версий, такой как Git),
CI-сервер автоматически берет эти изменения, 
собирает приложение и выполняет набор автоматизированных тестов.`,
          },
        ],
      },
      {
        id: "cd",
        label: "Continuous Delivery (CD)",
        description:
          "Автодеплой в тест/стейджинг; готовность к продакшен-развёртыванию в любое время.",
        code: [
          {
            lang: "text",
            content: `Непрерывное развертывание:
Цель: 
Гарантировать, что приложение может быть развернуто в любое время с минимальным риском.

Процесс: 
Когда изменения успешно проходят CI,
они могут быть автоматически развернуты в тестовую среду.
Если тестирование в тестовой среде проходит успешно, приложение может быть
автоматически развернуто в более продвинутые среды, включая продакшн.`,
          },
        ],
      },
      {
        id: "benefits",
        label: "Преимущества",
        description:
          "Быстрая обратная связь; быстрые релизы; автоматизация; надёжность через автотесты.",
        code: [
          {
            content: `Быстрая обратная связь: Ранняя обнаружение и исправление проблем в коде.
Быстрые релизы: Возможность выпуска новых версий программного обеспечения в короткие сроки.
Автоматизация: Уменьшение рутинных и повторяющихся задач, таких как сборка и развертывание.
Надежность: Уменьшение риска внесения ошибок в продакшн за счет автоматического тестирования.`,
          },
        ],
      },
    ],
  },
  browser: {
    key: "browser",
    title: "Browser storage",
    rules: [
      {
        id: "cookies",
        label: "Cookies",
        description:
          "Отправляются на сервер автоматически; управлять expires/max-age, secure, samesite, httpOnly. Лимит ≈4KB.",
        code: [
          {
            lang: "text",
            content: `Cookies(удаляются когда закрылся браузер, если не установить настройки max-age/expires) ОТПРАВЛЯЮТСЯ ПРИ КАЖДОМ ЗАПРОСЕ НА СЕРВЕР
-получить из браузера => document.cookie
-можно установить настройку "expires=" (document.cookie = "user=John; expires=" + date), без этой настройки они удалятся при закрытии браузера (session cookies)
-альтернатива "max-age=3600" (определяет срок действия куки в секундах с текущего момента)
-"secure" для передачи конфиденциальной информации, если хотите предавать их только через https
-"samesite=strict" применяется для защиты от так называемой СSRF-атаки. Куки никогда не отправятся, если пользователь пришёл не с этого же сайта.
-можно установить настройку httpOnly. Эта настройка запрещает любой доступ к куки из JavaScript. Мы не можем видеть такое куки или манипулировать им с помощью document.cookie.
-лимит 4KB`,
          },
        ],
      },
      {
        id: "local-storage",
        label: "LocalStorage",
        description:
          "Строковые пары ключ-значение; виден во всех вкладках origin; долгоживущий; лимит ≈5MB+.",
        code: [
          {
            lang: "text",
            content: `Local Storage(хранятся бесконечно в памяти устройства) Лимит 5 Мб+, зависит от браузера
-виден во всех вкладках с одинаковым источником
-данные хранятся в виде key:value пары СТРОК
-setItem/getItem для создания и получения данных. removeItem для удаления.
-Clear() для удаления всего
            `,
          },
        ],
      },
      {
        id: "session-storage",
        label: "SessionStorage",
        description: "Как LocalStorage, но на вкладку/сессию; очищается при закрытии вкладки.",
        code: [
          {
            lang: "text",
            content: `Session Storage (существует только в рамках ОДНОЙ вкладки браузера, другая вкладка этого же сайта будет иметь другой стор)
-при закрытии браузера, закрытии вкладки стор удаляется, но при перезагрузке остается.
          `,
          },
        ],
      },
      {
        id: "indexeddb",
        label: "IndexedDB",
        description:
          "Встроенная БД: индексы, транзакции, большие объёмы; ключ-значение любых типов.",
        code: [
          {
            lang: "text",
            content: `IndexedDB (это встроенная база данных, более мощная, чем localStorage)
-Хранит практически любые значения по ключам, несколько типов ключей
-Поддерживает транзакции для надёжности.
-Поддерживает запросы в диапазоне ключей и индексы.
-Позволяет хранить больше данных, чем localStorage.
          `,
          },
        ],
      },
    ],
  },
  render: {
    key: "render",
    title: "Render pipeline",
    rules: [
      {
        id: "pipeline",
        label: "Этапы рендеринга",
        code: [
          {
            content: `1) DOM (Document Object Model)
Браузер парсит HTML и строит дерево узлов (DOM).
Каждый тег (<div>, <p>, <img>) превращается в узел в дереве.

2)CSSOM (CSS Object Model)
Браузер парсит CSS и строит дерево стилей (CSSOM).
Включает все правила, селекторы и значения свойств.

3)Render Tree
Объединяет DOM и CSSOM в одно дерево.
Включает стили всех элементов.

4)Style
На этом этапе браузер считает конечные стили для каждого узла Render Tree.
Применяет все CSS правила, учитывает наследование, каскад и специфичность.

5)Layout
Браузер вычисляет размеры и позиции каждого узла в Render Tree.
Например: ширина, высота, отступы, позиции относительно родителя.

6)Paint
На этом этапе браузер рисует пиксели на экране.
Цвета, шрифты, градиенты, тени — всё, что визуально отображается.

7)Compositing
Браузер делит страницу на слои (layers) и собирает их вместе для финального отображения.
Слой с анимацией или фиксированным позиционированием может рендериться отдельно, что ускоряет обновление.

CSSOM = только CSS-правила, которые реально применяются.
DOM = все элементы HTML.
Поэтому CSSOM часто меньше DOM, особенно если у многих элементов нет стилей.
`,
          },
        ],
      },
      {
        id: "selectors",
        label: "Применение селекторов",
        description: "Селекторы применяются к элементам до layout; избегайте дорогих селекторов.",
      },
      {
        id: "layers",
        label: "Слои",
        description:
          "Композиция слоёв влияет на перформанс; трансформации/opacity предпочтительнее layout-изменений.",
      },
    ],
  },
  algorithms: {
    key: "algorithms",
    title: "Algorithms",
    rules: [
      {
        id: "complexity",
        label: "Сложность",
        description:
          "Квадратичные: O(n^2). Логарифмические: O(n log n). Память зависит от реализации.",
      },
      {
        id: "quicksort",
        label: "Quicksort | O(n * logN) ",
        description: "Разделяй-и-властвуй: T(n)=2T(n/2)+O(n) ⇒ O(n log n) в среднем.",
        code: [
          {
            lang: "js",
            content: `function quicksort(arr) {
          if(arr.length <= 1) return arr;               // O(1)
          let pivot = arr[Math.floor(arr.length / 2)];
          let left = arr.filter(x => x < pivot);         // O(n)
          let right = arr.filter(x => x > pivot);        // O(n)
          return [...quicksort(left), pivot, ...quicksort(right)]; T(n) = 2T(n / 2) + O(n)
        }`,
          },
        ],
      },
      {
        id: "binary-search",
        label: "Binary search | O(logN)",
        description: "Поиск в отсортированном массиве за O(log n).",
        code: [
          {
            lang: "js",
            content: `function binarySearch(arr, target) {
          let left = 0, right = arr.length - 1;
          while (left <= right) {                  // O(log n)
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
              return mid;
            } else if (arr[mid] < target) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
          return -1;
        }`,
          },
        ],
      },
      {
        id: "fibonacci",
        label: "Фибоначчи",
        description: "Рекурсивно O(n) с мемоизацией; обычная рекурсия экспоненциальна.",
        code: [
          {
            lang: "js",
            content: `ОПТИМИЗИРОВАННАЯ
function fibonacci(n, memo = {}) {
          if (n <= 1) return n;
          if (memo[n] !== undefined) {
            return memo[n];
          }
          memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
          return memo[n];
        }

ОБЫЧНАЯ
function f(n) {
          if (n <= 1) return n;
          return f(n - 1) + f(n - 2);
        }`,
          },
        ],
      },
      {
        id: "hashmap-pairs",
        label: "Пары через HashMap",
        description: "Найти пары с суммой target за O(n) с помощью Map/объекта.",
      },
      {
        id: "factorial",
        label: "Факториал",
        description: "Найти пары с суммой target за O(n) с помощью Map/объекта.",
        code: [
          {
            lang: "js",
            content: `function factorial(n) {
          if (n === 0) return 1;        // O(1)
          return n * factorial(n - 1);   // O(n)
        }`,
          },
        ],
      },
    ],
  },
  api: {
    key: "api",
    title: "API",
    rules: [
      {
        id: "rest",
        label: "REST",
        code: [
          {
            content: `REST - это способ создания API с помощью протокола HTTP;
6 принципов:
1) Отделение клиента от сервера(Client- Server)
2) Отсутствие записи состояния клиента
3) Кэшируемость
4) Единообразие интерфейса Rest
5) Многоуровневость системы
6) Предоставление кода по запросу`,
          },
        ],
      },
      {
        id: "graphql",
        label: "GraphQL",
        description:
          "GraphQL — это язык запросов к данным и среда выполнения для этих запросов. Позволяет делать query запросы и получать выбранные данные с сервера, а не весь массив.",
        code: [
          {
            lang: "graphql",
            content: `{
user(id: 1) {
  name
  email
    posts {
        title
        comments {
          text
        }
    }
  }
}`,
          },
        ],
      },
      {
        id: "websoket",
        label: "WebSocket",
        code: [
          {
            content: `«WebSocket — это протокол поверх TCP, который устанавливает постоянное двунаправленное соединение между клиентом и сервером.
В отличие от HTTP, он позволяет обеим сторонам свободно обмениваться сообщениями в реальном времени, что делает его идеальным для чатов,
игр или любых приложений, где важна мгновенная передача данных».

В отличие от HTTP, где клиент всегда инициирует запрос, WebSocket позволяет серверу и клиенту обмениваться сообщениями в реальном времени.
Используется для задач, где важна низкая задержка и постоянный обмен данными: чаты, онлайн - игры, биржевые котировки,
трекинг геопозиции, уведомления.
Соединение устанавливается через HTTP - handshake, а потом переключается в режим WebSocket.
Работает поверх TCP(порт по умолчанию 80 / 443, можно через WSS — зашифрованный вариант).
`,
          },
        ],
      },
    ],
  },
  security: {
    key: "security",
    title: "Security",
    rules: [
      {
        id: "frontend-security",
        label: "Защита на фронте",
        description:
          "1) Экранирование; 2) Валидация; 3) Отправлять запросы только с SameSite=Strict cookies. httponly, secure",
      },
    ],
  },
  architecture: {
    key: "architecture",
    title: "Architecture",
    rules: [
      {
        id: "solid",
        label: "SOLID",
        code: [
          {
            content: `S — Single Responsibility Principle(Принцип единственной ответственности)

🔹 Один модуль = одна причина для изменения.
Компонент, хук или сервис должны отвечать за одно. 

❌ Плохо:

// Компонент и UI, и загрузка, и бизнес-логика 
const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/user')
      .then(r => r.json())
      .then(setUser)
  }, [])

  return <div>{ user?.name } </div>
} 
 

✅ Хорошо:

// useUser.ts 
export function useUser() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('/api/user').then(r => r.json()).then(setUser)
  }, [])
  return user
}

// UserProfile.tsx 
const UserProfile = () => {
  const user = useUser()
  return <div>{ user?.name } </div>
}


O — Open / Closed Principle(Принцип открытости / закрытости) 

🔹 Код должен быть открыт для расширения, но закрыт для изменения. 

❌ Плохо: каждый раз добавляя новый тип кнопки, переписываем компонент:

const Button = ({ type }) => {
  if (type === "primary") return <button className="bg-blue-500" > Primary </button>
  if (type === "danger") return <button className="bg-red-500" > Danger </button>
  // и т.д. 
} 
 

✅ Хорошо: расширяем через props или composition:

const Button = ({ children, className }) => (
  <button className= { px- 4 py - 2 rounded { className }}> { children } </button> 
)

// использование 
<Button className="bg-blue-500" > Primary </Button>
  < Button className = "bg-red-500" > Danger </>




L — Liskov Substitution Principle(Принцип подстановки Барбары Лисков) 

🔹 Подтипы должны быть взаимозаменяемыми с базовыми. 
 Во фронте это чаще про пропсы и переиспользуемые компоненты. 

❌ Плохо:

// Компонент Input ведёт себя не как обычный input 
const Input = ({ value }) => <div>{ value } </div>

// если я попытаюсь использовать как обычный <input />, всё ломается 
 

✅ Хорошо:

const Input = (props) => <input { ...props } />

  // можно заменить на обычный <input />, и код не сломается 

  I — Interface Segregation Principle (Принцип разделения интерфейсов) 

🔹 Лучше несколько маленьких интерфейсов(props), чем один огромный. 

❌ Плохо:

type UserFormProps = {
  name: string
  age: number
  email: string
  phone: string
  address: string
  isAdmin: boolean
}

const UserForm = (props: UserFormProps) => { /* ... */ } 
 

✅ Хорошо:

type ContactInfo = { email: string; phone: string }
type PersonalInfo = { name: string; age: number }
type UserFormProps = ContactInfo & PersonalInfo

const UserForm = (props: UserFormProps) => { /* ... */ }

D — Dependency Inversion Principle(Принцип инверсии зависимостей) 

🔹 Высокоуровневые модули(UI, бизнес - логика) не должны зависеть от деталей реализации(API, библиотек). 

❌ Плохо:

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/api/products').then(r => r.json()).then(setProducts)
  }, [])
  return products.map(p => <div>{ p.name } </div>)
} 
 

✅ Хорошо: выносим API в сервис:

// api/products.ts 
export async function fetchProducts() {
  const res = await fetch('/api/products')
  return res.json()
}

// hooks/useProducts.ts 
import { fetchProducts } from '@/api/products'
export function useProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])
  return products
}

// Products.tsx 
const Products = () => {
  const products = useProducts()
  return products.map(p => <div>{ p.name } </div>)
} 
 

Теперь UI знает только про «данные», а не про то, как именно они получаются. `,
          },
        ],
      },
      {
        id: "clean-architecture",
        label: "Clean Architecture",
        code: [
          {
            content: `3 парадигмы программирования, и каждая в чем - то ограничивает, ничего не добавляя
  + Структурная 

Структурное программирование накладывает ограничение на прямую передачу управления. 

  
+ ОО

  - Полиморфизм

  - Инкапсуляция

  - Наследование

Объектно - ориентированное программирование накладывает ограничение на косвенную передачу управления. 

  
+ Функциональная 

Функциональное программирование накладывает ограничение на присваивание.


=========================================================================================
Создание компонентов (невозможно соблюдать принципы на 100%, нужно балансировать и искать золотую середину)
+ 3 принципа разработки

Reuse/Release Equivalence Principle, REP(принцип эквивалентности повторного использования и выпусков)

Единица повторного использования есть единица выпуска.


Common Closure Principle, CCP(принцип согласованного изменения)

В один компонент должны включаться классы, изменяющиеся по одним причинам и в одно время. В разные компоненты должны включаться классы, изменяющиеся в разное время и по разным причинам.


Common Reuse Principle, CRP(принцип совместного повторного использования)

Не вынуждайте пользователей компонента зависеть от того, чего им не требуется.
=========================================================================================
Принципы взаимоотношения между компонентами
- Принцип ацикличности зависимостей
- Принцип устойчивых зависимостей
- Принцип устойчивости абстракций

=========================================================================================
Типы архитектур

-SOA(Service-Oriented)

-Гексагональная архитектура

-DCI

-BCE
=========================================================================================
Напомню, что целью архитектора является минимизация трудозатрат на создание и сопровождение системы. Что может помешать достижению этой цели? Зависимость — и особенно зависимость от преждевременных решений.


Какие решения можно назвать преждевременными? Решения, не имеющие ничего общего с бизнес-требованиями — вариантами использования — системы. К ним можно отнести решения о выборе фреймворка, базы данных, веб-сервера, вспомогательных библиотек, механизма внедрения зависимостей и т.п.
В хорошей архитектуре подобные решения носят вспомогательный характер и откладываются на потом. Хорошая архитектура не зависит от таких решений. Хорошая архитектура позволяет принимать эти решения в самый последний момент без существенного влияния на саму архитектуру.


Как отмечалось выше, хорошая архитектура должна обеспечивать:

• Разнообразие вариантов использования и эффективную работу системы.

• Простоту сопровождения системы.

• Простоту разработки системы.

• Простоту развертывания системы.

=========================================================================================
Бизнес правила — это правила, делающие или экономящие деньги независимо от наличия или отсутствия их реализации на компьютере.  Они делают или экономят деньги, даже когда выполняются вручную.
=========================================================================================
Процессы

Высокоуровневые процессы — близкие к бизнесу, говорят на языке предметной области («оформить заказ», «зарегистрировать пользователя»).
Низкоуровневые процессы — близкие к технике, говорят на языке реализации («сделать fetch», «вставить в базу», «отрендерить HTML»).
Архитектурная цель: чтобы высокоуровневые процессы не зависели от деталей реализации, а только определяли правила.
=========================================================================================
Архитектура фронтэнд приложения

1) [ Высокоуровневая архитектура ]

Монолит / Микрофронты / SPA / SSR

2) [ Модульная организация ]

Feature-Sliced / DDD / MVC / слоёная модель

3) [ Принципы проектирования ]

 SOLID +  DRY(Dont repeat yourself) + KISS(Keep it stupid simple) + YAGNI(You Aren’t Gonna Need It)

4) [ Компонентная архитектура ]

Atomic Design / хуки / HOC / UI-паттерны

Поэтому система и тесты должны проектироваться так, чтобы работу бизнес-правил можно было проверить без пользовательского интерфейса.
`,
          },
        ],
      },
    ],
  },
};

export function getSubject(key: SubjectKey): Subject | null {
  return SUBJECTS[key] ?? null;
}
