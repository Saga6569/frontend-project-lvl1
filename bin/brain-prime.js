#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainPrime, gameEngine, greeting } from '../src/index.js';

const gamePrime = () => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? : ');
  greetingName(brainPrime, name);
  gameEngine('gamePrime', name);
};
gamePrime();
