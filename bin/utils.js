#!/usr/bin/env node

import { greetingName, brainProgression, gameEngine, greeting } from '../src/index.js';

const gameProgression = () => {
  gameEngine('gameProgression', greetingName(brainProgression, greeting));
};
gameProgression();
