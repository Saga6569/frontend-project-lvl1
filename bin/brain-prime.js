#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { brainPrime, resultIsPrime } from '../src/utility/source.js';

const gamePrime = () => {
  gameEngine(brainPrime, resultIsPrime);
};
gamePrime();
