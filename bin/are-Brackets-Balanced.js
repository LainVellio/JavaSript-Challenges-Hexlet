// 5. Сбалансированы ли скобки?

import readlineSync from 'readline-sync';
import { areBracketsBalanced } from '../src/scripts/programs/areBracketsBalanced.js';

const launch = () => {
  const string = readlineSync.question('Input string ', { default: ' ' });
  const result = areBracketsBalanced(string);
  return console.log(result);
};
launch();
