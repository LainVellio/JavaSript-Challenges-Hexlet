import promptly from 'promptly';
import { formattedTime } from '../src/formattedTime.js';

const launch = async () => {
  const minutes = await promptly.prompt('Input number of minutes ');
  const result = formattedTime(minutes);
  return console.log(result);
};
launch();
