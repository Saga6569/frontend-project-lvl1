#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, gameProgression } from '../src/games/progression.js';

gameEngine(description, gameProgression);
