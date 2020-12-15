// 1. Преобразование DNA в RNA

const dnaToRna = (chainDna) => {
  let i = 0;
  let chainRna = '';
  while (i < chainDna.length) {
    switch (chainDna[i]) {
      case 'G':
        chainRna += 'C';
        break;
      case 'C':
        chainRna += 'G';
        break;
      case 'T':
        chainRna += 'A';
        break;
      case 'A':
        chainRna += 'U';
        break;
      default:
        return 'Вы ввели неверный символ';
    }
    i += 1;
  }
  return chainRna;
};

// eslint-disable-next-line no-unused-vars
const getResult = () => {
  const formInput = document.forms.program;
  const a = formInput.a.value;
  document.getElementById('result').textContent = dnaToRna(a);
};
