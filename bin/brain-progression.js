#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { brainProgression, progression } from '../src/utility/source.js';

const gameProgression = () => {
  gameEngine(brainProgression, progression);
};
gameProgression();
