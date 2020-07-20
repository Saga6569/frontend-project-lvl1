#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameEven } from '../src/games/even.js';

gameEngine(description, gameEven);
