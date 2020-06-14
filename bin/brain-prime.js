#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainPrime, gameEngine, greeting } from '../src/index.js';

const gamePrime = () => {
  gameEngine('gamePrime', greetingName(brainPrime, greeting));
};
gamePrime();
