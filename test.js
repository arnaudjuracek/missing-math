'use strict';

var mm = require('./index.js');

console.log('radians to degrees', mm.degrees(Math.PI));
console.log('degrees to radians', mm.radians(180));

console.log('random', mm.random(50, 60));
console.log('constrain', mm.constrain(50, 5, 10));
console.log('lerp', mm.lerp(0, 10, 0.5));
console.log('norm', mm.norm(50, 0, 100));
console.log('map', mm.map(10, 0, 100, 0, 1));

// EXPERIMENTAL
console.log('---- experimental ----');
console.log('lerpColor', mm.lerpColor('#000000', '#FFFFFF', 0.5));