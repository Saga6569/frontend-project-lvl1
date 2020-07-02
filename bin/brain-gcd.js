#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { brainGcd, resultGcd } from '../src/utility/source.js';

const gameGcd = () => {
  gameEngine(brainGcd, resultGcd);
};
gameGcd();
