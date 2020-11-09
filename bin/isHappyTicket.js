// 10. Счастливый билет

import promptly from 'promptly';
import { isHappyTicket } from '../src/isHappyTicket.js';

const launch = async () => {
  const number = await promptly.prompt('Input number ');
  const result = isHappyTicket(number);
  return console.log(result);
};
launch();
