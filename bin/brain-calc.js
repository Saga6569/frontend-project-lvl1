#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameCalc } from '../src/games/calc.js';

gameEngine(description, gameCalc);
