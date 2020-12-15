// 9. Форматированное время

import readlineSync from 'readline-sync';
import { formattedTime } from '../src/scripts/programs/formattedTime.js';

const launch = () => {
  const minutes = readlineSync.question('Input number of minutes ');
  const result = formattedTime(minutes);
  return console.log(result);
};
launch();
