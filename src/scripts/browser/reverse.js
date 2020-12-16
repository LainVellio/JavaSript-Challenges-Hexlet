// 14. Переворот строки

const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }
  return str.slice(str.length - 1, str.length) + reverse(str.slice(0, str.length - 1));
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = reverse(a);
};
