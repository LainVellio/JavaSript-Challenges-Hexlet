// 3. Инвертированный регистр

import readlineSync from 'readline-sync';
import { invertCase } from '../src/invertCase.js';

const launch = async () => {
  const value = readlineSync.question('Input string ');
  const result = invertCase(value);
  return console.log(result);
};
launch();
