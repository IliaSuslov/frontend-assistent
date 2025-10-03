"use client";

import { useMemo, useState } from "react";
import Accordion from "@/shared/ui/accordion/Accordion";

const questions = [
  {
    id: 1,
    question: "Чем отличается Vue от React?",
    code: "Vue — реактивный фреймворк с встроенной реактивностью, React — декларативная UI-библиотека с Virtual DOM, где реактивность управляется вручную через хуки.",
  },
  {
    id: 2,
    question: "Переменные в js(var, let, const) и их отличия?",
    code: "var — функциональная область видимости, можно переопределять; let — блочная область видимости, можно изменять; const — блочная область видимости, нельзя переназначать (но объект/массив можно мутировать).",
  },
  {
    id: 3,
    question: "Функции в js (func declaration, func expression, arrow func)",
    code: "Function Declaration: hoisted; Function Expression: не hoisted; Arrow Function: лексическое this, нельзя использовать как конструктор.",
  },
  {
    id: 4,
    question: "Event Loop",
    code: "Цикл событий JS: call stack → task queue → microtasks; асинхронные операции помещаются в очередь задач и выполняются после текущего стека.",
  },
  {
    id: 5,
    question: "Рекурсия",
    code: "Функция вызывает саму себя; важно иметь условие выхода, иначе Stack Overflow.",
  },
  {
    id: 6,
    question: "Замыкания",
    code: "Функция вместе с окружающим её лексическим окружением сохраняет доступ к внешним переменным после завершения внешней функции.",
  },
  {
    id: 7,
    question: "SOLID",
    code: "Принципы объектно-ориентированного проектирования: Single responsibility, Open/closed, Liskov, Interface segregation, Dependency inversion.",
  },
  {
    id: 8,
    question: "React Hooks",
    code: "useState, useEffect, useMemo, useCallback, useRef и др.; позволяют работать с состоянием, эффектами и оптимизацией в функциональных компонентах.",
  },
  {
    id: 9,
    question: "unknown / any / void",
    code: "any — любая переменная без проверок; unknown — неизвестный тип, безопаснее any; void — функция не возвращает значение.",
  },
  {
    id: 10,
    question: "Типы данных в js",
    code: "1) String 2) Number 3) Boolean 4) undefined 5) null 6) Symbol 7) BigInt 8) Object",
  },
  {
    id: 11,
    question: "Хранилища данных в браузере",
    code: "LocalStorage — постоянное хранение, SessionStorage — сессия, Cookies — небольшие данные для сервера, IndexedDB — база данных в браузере.",
  },
  {
    id: 12,
    question: "Что будет при клике Ввод в адресной строке браузера?",
    code: "Браузер отправляет GET-запрос на указанный URL; страница перезагружается (если не SPA) или роутинг SPA обрабатывает путь.",
  },

  // --- новые вопросы с ответами ---
  {
    id: 13,
    question: "Hoisting в JavaScript: что поднимается и как работает?",
    code: "Объявления var и function declaration поднимаются в начало области видимости; let и const не hoisted в том же смысле, TDZ (temporal dead zone).",
  },
  {
    id: 14,
    question: "Контекст this и способы его изменения",
    code: "this зависит от вызова функции; можно изменять через bind, call, apply; arrow function берёт this из лексического окружения.",
  },
  {
    id: 15,
    question: "Прототипное наследование и Object.create",
    code: "Каждый объект имеет [[Prototype]]; Object.create(proto) создаёт объект с указанным прототипом.",
  },
  {
    id: 16,
    question: "Асинхронность: Promises, async/await, microtasks и macrotasks",
    code: "Promises и async/await создают микротаски; setTimeout, setInterval, DOM events — макротаски; Event Loop сначала выполняет стек → микротаски → макротаски.",
  },
  {
    id: 17,
    question: "Деструктуризация объектов и массивов",
    code: "Позволяет извлекать значения в переменные: const {a, b} = obj; const [x, y] = arr;",
  },
  {
    id: 18,
    question: "Spread и rest операторы",
    code: "... используется для копирования/сборки элементов: spread: [...arr], rest: function(...args) {}",
  },
  {
    id: 19,
    question: "Callback функции и функции высшего порядка",
    code: "Callback — функция передаётся как аргумент; HOF — функция, принимающая или возвращающая функции.",
  },
  {
    id: 20,
    question: "IIFE (Immediately Invoked Function Expression)",
    code: "Функция, которая вызывается сразу после объявления: (function(){ ... })();",
  },
  {
    id: 21,
    question: "Каррирование (Currying) функций",
    code: "Преобразование функции с несколькими аргументами в цепочку функций с одним аргументом: f(a,b) → f(a)(b).",
  },
  {
    id: 22,
    question: "ES6 модули: import/export",
    code: "export — экспортируем функции/константы; import — импортируем их в другой файл; поддерживает named и default export.",
  },
  {
    id: 23,
    question: "Optional chaining (?.) и Nullish coalescing (??)",
    code: "?. безопасно обращается к вложенным свойствам; ?? возвращает значение справа, если слева null или undefined.",
  },
  {
    id: 24,
    question: "Generics и типизация в TypeScript",
    code: "Позволяет создавать универсальные функции/классы: function identity<T>(arg: T): T { return arg; }",
  },
  {
    id: 25,
    question: "React Context API и его применение",
    code: "Позволяет передавать данные через дерево компонентов без props drilling; создаём Context и используем Provider/Consumer или useContext.",
  },
  {
    id: 26,
    question: "Оптимизация ререндеров React: memo, useMemo, useCallback",
    code: "memo — мемоизация компонента; useMemo — мемоизация значения; useCallback — мемоизация функции, чтобы не пересоздавалась при каждом ререндере.",
  },
  {
    id: 27,
    question: "Debounce и Throttle функции",
    code: "Debounce — вызывается после паузы; Throttle — вызывается не чаще чем через интервал; используются для оптимизации событий.",
  },
  {
    id: 28,
    question: "Lazy loading и code splitting компонентов",
    code: "React: React.lazy + Suspense; Vue: defineAsyncComponent; позволяет подгружать код по необходимости.",
  },
  {
    id: 29,
    question: "Event bubbling и capturing",
    code: "Bubbling — событие поднимается от вложенного элемента к родителю; Capturing — от родителя к вложенному.",
  },
  {
    id: 30,
    question: "Разница между fetch API и Axios",
    code: "Fetch — встроенный API, возвращает Promise, нужно вручную проверять ошибки и парсить JSON; Axios — библиотека, упрощает запросы, автоматически парсит JSON, поддерживает interceptors.",
  },
  {
    id: 31,
    question: "Virtual DOM vs DOM",
    code: "Virtual DOM — легковесная JS-репрезентация DOM, минимизирует реальные обновления; обычный DOM обновляется напрямую.",
  },
  {
    id: 32,
    question: "React vs Vue: ререндеринг и реактивность",
    code: "Vue автоматически отслеживает зависимости (reactive, computed), React ререндерит компонент целиком при изменении state/props, оптимизируется через memo, useMemo, useCallback.",
  },
  {
    id: 33,
    question: "LocalStorage, SessionStorage, Cookies, IndexedDB: различия и применение",
    code: "LocalStorage — постоянное хранение; SessionStorage — до закрытия вкладки; Cookies — для сервера и передачи с HTTP; IndexedDB — NoSQL база данных в браузере для больших объёмов.",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const items = useMemo(
    () =>
      questions.map((q) => ({
        id: String(q.id),
        label: q.question,
        description: undefined,
        code: Array.isArray(q.code) ? q.code : q.code ? [{ content: String(q.code) }] : undefined,
      })),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.label.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <main className="p-6">
      <title>Home page</title>
      <h1 className="text-2xl font-semibold mb-4">Frontend Assistant</h1>
      <section className="md:w-2/3 mx-auto">
        <article className="flex flex-col gap-4">
          <h2 className="text-xl">Самые популярные вопросы на собеседованиях</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="search" className="sr-only">
              Поиск по вопросам
            </label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти вопрос..."
              className="w-full max-w-none md:max-w-md rounded border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
            />
            <span className="text-sm whitespace-nowrap">
              {filtered.length} из {items.length}
            </span>
          </div>

          <Accordion items={filtered} />

          {filtered.length === 0 && (
            <p className="text-sm text-gray-500">Ничего не найдено. Измените запрос.</p>
          )}
        </article>
      </section>
    </main>
  );
}
