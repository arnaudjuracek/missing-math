'use strict';

var noise = require('perlin').noise;

var MissingMath = {
  degrees: function(rad) { return rad * 180 / Math.PI; },
  radians: function(deg) { return deg * Math.PI / 180; },

  clamp: function(a, min, max) { return Math.max(min, Math.min(a, max)); },
  constrain: function(a, min, max) { return this.clamp(a, min, max); },
  lerp: function(a, b, t) { return a + t * (b - a); },
  norm: function(a, min, max) { return this.map(a, min, max, 0, 1); },
  map: function(a, in_min, in_max, out_min, out_max) { return (a - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; },

  random: function(a, b) {
    if (b !== undefined) return this.lerp(a, b, Math.random());
    else return this.lerp(0, a, Math.random());
  },
  rnd: function(a, b) { return this.random(a, b); },

  perlin: function(x, y, z) {
    if (z !== undefined) return noise.perlin3(x, y, z);
    else if (y !== undefined) return noise.perlin2(x, y);
    else return noise.perlin2(x, null);
  },
  noise: function(x, y, z) { return this.perlin(x, y, z); },


  // -------------------------------------------------------------------------
  // EXPERIMENTAL
  lerpColor: function(a, b, amt) {
    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amt * (br - ar),
        rg = ag + amt * (bg - ag),
        rb = ab + amt * (bb - ab);
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
  },

  // distSq: function(a, b) { return (b - a) * (b - a); },
  // fast2dDist: function(x1, y1, x2, y2) { return this.distSq(x1, x2) + this.distSq(y1, y2); },
  // maxDist: function(a, b, max) { return this.map(this.constrain(this.distSq(a, b), 0, max * max), 0, max * max, 0, max); },
};

module.exports = MissingMath;