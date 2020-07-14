#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { rulesOfTheGame, gameEven } from '../src/game/Even.js';

gameEngine(rulesOfTheGame, gameEven);
