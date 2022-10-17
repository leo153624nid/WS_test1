// Задача №2. Максимальное кол-во слов

// Дан массив предложений. В предложении слова разделены пробелами.
// Необходимо написать функцию, которая вернет максимальное число слов в одном предложении.
// Пример: Вход:
const arr = ["Hello world", "This is a great solution", "How are you"]; // Ответ: 5.

const maxWords = function (arr) {
  const howManySpaces = (str) => {
    let count = 0;
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] === " ") count++;
    }
    return count;
  };
};
