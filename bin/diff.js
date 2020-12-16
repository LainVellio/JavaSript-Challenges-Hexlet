// 4. Разница углов

import readlineSync from 'readline-sync';
import { diff } from '../src/scripts/node/diff.js';

const launch = () => {
  const firstCorner = readlineSync.question('Input first corner ');
  const secondCorner = readlineSync.question('Input second corner ');
  const result = diff(firstCorner, secondCorner);
  return console.log(result);
};
launch();
