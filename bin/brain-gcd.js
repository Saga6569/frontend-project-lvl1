#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainGcd, gameEngine, greeting } from '../src/index.js';

const gameGcd = () => {
  gameEngine('gamGcd', greetingName(brainGcd, greeting));
};
gameGcd();
