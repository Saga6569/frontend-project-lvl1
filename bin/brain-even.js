#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameEven } from '../src/games/Even.js';

gameEngine(description, gameEven);
