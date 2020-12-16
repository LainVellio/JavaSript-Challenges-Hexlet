// 9. Степень тройки

const isPowerOfThree = (num) => {
  if (Number.isNaN(num)) {
    return 'Вы ввели неверное значение';
  }

  if (num - Math.round(num) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (num < 0) {
    return 'Вы ввели отрицательное число';
  }

  if (num === 3) {
    return 'Да, является';
  }
  if (num % 3 === 0) {
    return isPowerOfThree(num / 3);
  }
  return 'Нет, не является';
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  document.getElementById('result').textContent = isPowerOfThree(a);
};
