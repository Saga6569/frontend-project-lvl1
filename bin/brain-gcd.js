#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameGcd } from '../src/games/gcd.js';

gameEngine(description, gameGcd);
