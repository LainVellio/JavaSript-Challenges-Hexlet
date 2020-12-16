// 12. Идеальные числа

const isPerfect = (num) => {
  if (Number.isNaN(num)) {
    return 'Вы ввели неверное значение';
  }

  if (num - Math.round(num) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (num < 0) {
    return 'Вы ввели отрицательное число';
  }

  let result = 1;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }
  if (result === num) {
    return 'Совершенное число';
  }
  return 'Обычное число';
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  document.getElementById('result').textContent = isPerfect(a);
};
