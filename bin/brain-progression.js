#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainProgression, gameEngine, greeting } from '../src/index.js';

const gameProgression = () => {
  console.log(greeting);
  const name = readlineSync.question('May I have your name? : ');
  greetingName(brainProgression, name);
  gameEngine('gameProgression', name);
};
gameProgression();
