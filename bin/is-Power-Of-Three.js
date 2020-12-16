// 9. Степень тройки

import readlineSync from 'readline-sync';
import { isPowerOfThree } from '../src/scripts/node/isPowerOfThree.js';

const launch = () => {
  const value = readlineSync.question('Input number ');
  const result = isPowerOfThree(value);
  return console.log(result);
};
launch();
