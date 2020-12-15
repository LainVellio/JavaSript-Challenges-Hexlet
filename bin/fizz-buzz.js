// 7. Найди Fizz и Buzz

import readlineSync from 'readline-sync';
import { fizzBuzz } from '../src/scripts/programs/fizBuzz.js';

const launch = () => {
  const begin = readlineSync.question('Input begin number ');
  const end = readlineSync.question('Input end number ');
  fizzBuzz(Number(begin), Number(end));
};

launch();
