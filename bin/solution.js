// 14. Без двух нулей

import readlineSync from 'readline-sync';
import { solution } from '../src/scripts/node/solution.js';

const launch = () => {
  const numZeros = readlineSync.question('Enter the number of digits zero ');
  const numOnes = readlineSync.question('Enter the number of digits one ');
  console.log(`The number of combining without two zeros: ${solution(Number(numZeros), Number(numOnes))}`);
};

launch();
