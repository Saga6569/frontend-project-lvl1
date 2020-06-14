#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainGcd, gameEngine, greeting } from '../src/index.js';

const gameGcd = () => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? : ');
  greetingName(brainGcd, name);
  gameEngine('gamGcd', name);
};
gameGcd();
