// Polyfill requestAnimationFrame required by React >=16.0.0
require('raf/polyfill');
global.fetch = require('jest-fetch-mock');