#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { rulesOfTheGame, gamePrime } from '../src/game/Prime.js';

gameEngine(rulesOfTheGame, gamePrime);
