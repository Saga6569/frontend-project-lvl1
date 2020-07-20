#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gamePrime } from '../src/games/prime.js';

gameEngine(description, gamePrime);
