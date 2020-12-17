// 5. Сбалансированы ли скобки?

const areBracketsBalanced = (str) => {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== '(' || str[str.length - 1 - i] !== ')') {
      return 'Некорректная строка';
    }
  }
  return 'Корректная строка';
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = areBracketsBalanced(a);
};
