#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { rulesOfTheGame, gameCalc } from '../src/game/Calc.js';

gameEngine(rulesOfTheGame, gameCalc);
