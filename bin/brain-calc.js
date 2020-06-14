#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainCalc, gameEngine, greeting } from '../src/index.js';

const gameCalc = () => { // функция принимает 2 числа  и возвращает массив : результат и строку
  console.log(greeting);
  const name = readlineSync.question('May I have your name? : ');
  greetingName(brainCalc, name);
  gameEngine('gameCalc', name);
};
gameCalc();
