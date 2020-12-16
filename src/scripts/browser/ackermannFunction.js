// 8. Функция Аккермана

// eslint-disable-next-line consistent-return
const ackermannFunction = (m, n) => {
  if (Number.isNaN(m) || Number.isNaN(n)) {
    return 'Вы ввели неверное значение';
  }

  if (m - Math.round(m) !== 0 || n - Math.round(n) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (m < 0 || n < 0) {
    return 'Вы ввели отрицательное число';
  }

  if (m > 0 && n > 0) {
    return ackermannFunction(m - 1, ackermannFunction(m, n - 1));
  }
  if (m > 0 && n === 0) {
    return ackermannFunction(m - 1, 1);
  }
  if (m === 0) {
    return n + 1;
  }
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  const b = parseFloat(formInput.b.value);
  document.getElementById('result').textContent = ackermannFunction(a, b);
};
