export const dnaToRna = (chainDna) => {
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

export default { dnaToRna };
