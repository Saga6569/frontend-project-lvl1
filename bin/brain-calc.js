#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameCalc } from '../src/games/Calc.js';

gameEngine(description, gameCalc);
