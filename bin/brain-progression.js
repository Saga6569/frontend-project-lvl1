#!/usr/bin/env node

import gameEngine from '../src/index.js';

import { description, progression } from '../src/games/progression.js';

gameEngine(description, progression);
