#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingName, brainProgression, gameEngine, greeting } from '../src/index.js';

const gameProgression = () => {
  gameEngine('gameProgression', greetingName(brainProgression, greeting));
};
gameProgression();
