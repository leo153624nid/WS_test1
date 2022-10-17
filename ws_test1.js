// Задача №1. Свой Array.prototype.reduce

// Написать свою функцию reduce аналог функции Array.prototype.reduce().
// Первым параметром функция принимает массив, вторым параметром callback-функцию, третьим параметром начальное значение.
// Использовать внутри функции саму Array.prototype.reduce запрещено. В качестве ответа принимается ссылка на решение.

const myReduce = function (arr, fn, initialValue) {
  let acc = initialValue;
  for (const item of arr) {
    acc = fn(acc, item);
  }
  return acc;
};

const users = [
  { name: "Petr", age: 4 },
  { name: "Igor", age: 19 },
  { name: "Vovan", age: 4 },
  { name: "Matvey", age: 16 },
];

const oldest = myReduce(
  users,
  (acc, user) => (user.age > acc.age ? user : acc),
  users[0]
);

console.log(oldest);
