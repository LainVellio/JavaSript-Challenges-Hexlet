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

export const solution = (numZero, numOne) => {
  const firstString = '1'.repeat(numOne) + '0'.repeat(numZero);
  const endString = '0'.repeat(numZero) + '1'.repeat(numOne);
  let currentStr = firstString;
  let counter = 0;

  console.log(currentStr);
  if (isTwoZero(currentStr)) {
    counter += 1;
  }

  while (currentStr !== endString) {
    while (currentStr[currentStr.length - 1] === '0') {
      currentStr = shift(currentStr, indexRightOne(currentStr));
      console.log(currentStr);
      if (isTwoZero(currentStr)) {
        counter += 1;
      }
    }
    if (numOne === 1) { break; }
    const leftStr = currentStr.slice(0, indexCut(currentStr) + 1);
    const rightStr = currentStr.slice(indexCut(currentStr) + 1);
    currentStr = paste(shift(leftStr, indexRightOne(leftStr)), rightStr, indexRightOne(leftStr));
    console.log(currentStr);
    if (isTwoZero(currentStr)) {
      counter += 1;
    }
  }
  return counter;
};

export default { solution };
