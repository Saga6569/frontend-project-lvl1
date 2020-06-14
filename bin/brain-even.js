#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainEven, gameEngine, greeting } from '../src/index.js';

const gameEven = () => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? : ');
  greetingName(brainEven, name);
  gameEngine('isEven', name);
};
gameEven();
