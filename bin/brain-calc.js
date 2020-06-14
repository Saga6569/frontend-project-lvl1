#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainCalc, gameEngine, greeting } from '../src/index.js';

const gameCalc = () => {
  gameEngine('gameCalc', greetingName(brainCalc, greeting));
};
gameCalc();
