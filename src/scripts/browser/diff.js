// 4. Разница углов

const diff = (firstCorner, secondCorner) => {
  if (Number.isNaN(firstCorner) || Number.isNaN(secondCorner)) {
    return 'Вы ввели не численное значение';
  }
  if (
    firstCorner < 0 ||
    firstCorner > 360 ||
    secondCorner < 0 ||
    secondCorner > 360
  ) {
    return 'Углы не находятся в дипазоне от 0 до 360';
  }

  const diffCorner = secondCorner - firstCorner;
  if (diffCorner <= 180) {
    return diffCorner;
  }
  return 360 - diffCorner;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  const b = parseFloat(formInput.b.value);
  document.getElementById('result').textContent = diff(a, b);
};
