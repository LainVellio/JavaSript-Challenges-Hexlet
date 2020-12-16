// 15. Без двух нулей

const indexRightOne = (string) => {
  let i = string.length - 1;
  while (string[i] === '0') {
    i -= 1;
  }
  return i;
};

const shift = (str, index) => {
  const beginStr = str.slice(0, index);
  const indexChar = str.slice(index, index + 1);
  const nextChar = str.slice(index + 1, index + 2);
  const endStr = str.slice(index + 2);
  return beginStr + nextChar + indexChar + endStr;
};

const indexCut = (str) => {
  let i = str.length - 1;
  while (str[i] === '1') {
    i -= 1;
  }
  return i;
};

const paste = (str, pasteStr, index) => {
  const beginStr = str.slice(0, index + 1);
  const endStr = str.slice(index + 1);
  return beginStr + pasteStr + endStr;
};

const isTwoZero = (str) => {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '0' && str[i + 1] === '0') {
      return false;
    }
  }
  return true;
};

const solution = (numZero, numOne) => {
  if (Number.isNaN(numZero) || Number.isNaN(numOne)) {
    return 'Вы ввели неверное значение';
  }

  if (numZero - Math.round(numZero) !== 0 || numOne - Math.round(numOne) !== 0) {
    return 'Вы ввели дробное число';
  }

  if (numZero < 0 || numOne < 0) {
    return 'Вы ввели отрицательное число';
  }

  const result = [];
  const firstString = '1'.repeat(numOne) + '0'.repeat(numZero);
  const endString = '0'.repeat(numZero) + '1'.repeat(numOne);
  let currentStr = firstString;
  let counter = 0;
  let i = 1;

  result[i] = ` Все комбинации: ${currentStr}`;
  i += 1;
  if (isTwoZero(currentStr)) {
    counter += 1;
  }

  while (currentStr !== endString) {
    while (currentStr[currentStr.length - 1] === '0') {
      currentStr = shift(currentStr, indexRightOne(currentStr));
      result[i] = ` ${currentStr}`;
      i += 1;
      if (isTwoZero(currentStr)) {
        counter += 1;
      }
    }

    if (numOne === 1) { break; }
    const leftStr = currentStr.slice(0, indexCut(currentStr) + 1);
    const rightStr = currentStr.slice(indexCut(currentStr) + 1);
    currentStr = paste(shift(leftStr, indexRightOne(leftStr)), rightStr, indexRightOne(leftStr));
    result[i] = ` ${currentStr}`;
    i += 1;
    if (isTwoZero(currentStr)) {
      counter += 1;
    }
  }
  result[0] = ` Количество комбинаций без двух нулей подряд: ${counter}`;
  return result;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = parseFloat(formInput.a.value);
  const b = parseFloat(formInput.b.value);
  document.getElementById('result').textContent = solution(a, b);
};
