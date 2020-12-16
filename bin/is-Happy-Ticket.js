// 10. Счастливый билет

import readlineSync from 'readline-sync';
import { isHappyTicket } from '../src/scripts/node/isHappyTicket.js';

const launch = () => {
  const number = readlineSync.question('Input number ');
  const result = isHappyTicket(number);
  return console.log(result);
};
launch();
