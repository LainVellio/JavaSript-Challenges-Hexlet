// 11. Счастливые числа

const sumOfsquareDigits = (num) => {
  let result = 0;
  for (let i = 0; i < String(num).length; i += 1) {
    result += Number(String(num)[i]) ** 2;
  }
  return result;
};

const isHappyNumber = (num) => {
  if (Number.isNaN(num)) {
    return 'Вы ввели неверное значение';
  }

  if (num - Math.round(num) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (num < 0) {
    return 'Вы ввели отрицательное число';
  }

  let result = num;
  for (let i = 0; i !== 9; i += 1) {
    if (result === 1) {
      return 'Число счастливое';
    }
    result = sumOfsquareDigits(result);
  }
  return 'Число обычное';
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  document.getElementById('result').textContent = isHappyNumber(a);
};
