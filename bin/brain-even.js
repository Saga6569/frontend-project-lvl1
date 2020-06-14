#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainEven, gameEngine, greeting } from '../src/index.js';

const gameEven = () => {
  gameEngine('isEven', greetingName(brainEven, greeting));
};
gameEven();
