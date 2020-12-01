// 7. Найди Fizz и Buzz

import readlineSync from 'readline-sync';
import { fizzBuzz } from '../src/fizBuzz.js';

const launch = async () => {
  const begin = readlineSync.question('Input begin number ');
  const end = readlineSync.question('Input end number ');
  fizzBuzz(Number(begin), Number(end));
};

launch();
