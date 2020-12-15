// 6. Переворот числа

const invertNumber = (num) => {
  if (Number.isNaN(Number(num))) {
    return 'Вы ввели неверное значение';
  }

  if (num - Math.round(num) !== 0) {
    return 'Вы ввели дробное число';
  }

  let result = '';
  for (let i = 0; i < num.length; i += 1) {
    result += num[num.length - 1 - i];
  }
  return result;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = invertNumber(a);
};
