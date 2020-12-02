// 14. Переворот строки

import readlineSync from 'readline-sync';
import { reverse } from '../src/reverse.js';

const launch = () => {
  const value = readlineSync.question('Input string ');
  const result = reverse(value);
  return console.log(result);
};
launch();
