#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { calculator, brainCalc } from '../src/utility/source.js';

const gameCalc = () => {
  gameEngine(brainCalc, calculator);
};
gameCalc();
