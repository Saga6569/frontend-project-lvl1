#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { rulesOfTheGame, gameProgression } from '../src/game/progression.js';

gameEngine(rulesOfTheGame, gameProgression);
