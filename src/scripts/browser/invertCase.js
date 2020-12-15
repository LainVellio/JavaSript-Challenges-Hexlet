// 3. Инвертированный регистр

const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else result += str[i].toUpperCase();
  }
  return result;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = invertCase(a);
};
