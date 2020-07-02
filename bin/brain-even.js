#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { resultIsEven, brainEven } from '../src/utility/source.js';

const gameEven = () => {
  gameEngine(brainEven, resultIsEven);
};
gameEven();
