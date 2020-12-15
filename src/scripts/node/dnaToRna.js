// 1. Преобразование DNA в RNA

export const dnaToRnaSource = (chainDna) => {
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
        return null;
    }
    i += 1;
  }
  return chainRna;
};

const rnaByDna = {
  G: 'C', C: 'G', T: 'A', A: 'U',
};

export const dnaToRna = (chainDna) => {
  const dnaArr = chainDna.split('');
  if (dnaArr.some((el) => !(el in rnaByDna))) {
    return null;
  }
  const rnaArr = dnaArr.map((dna) => rnaByDna[dna]);
  return rnaArr.join('');
};

export default { dnaToRna };
