#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { rulesOfTheGame, gameGcd } from '../src/game/gcd.js';

gameEngine(rulesOfTheGame, gameGcd);
