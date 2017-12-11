'use strict'

const noise = require('perlin').noise

const clamp = (a, min, max) => Math.max(min, Math.min(a, max))
const normalize = (a, min, max) => map(a, min, max, 0, 1)
const map = (a, in_min, in_max, out_min, out_max) => (a - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
const lerp = (a, b, t) => a + t * (b - a)
const random = (a, b) => {
  if (b !== undefined) return lerp(a, b, Math.random())
  return lerp(0, a, Math.random())
}

function perlin (x, y, z) {
  if (arguments.length === 3) return noise.perlin3(x, y, z)
  if (arguments.length === 2) return noise.perlin2(x, y)
  if (arguments.length === 1) return noise.perlin2(x, null)
  return null
}

module.exports = {
  clamp,
  constrain: clamp,
  degrees: rad => rad * 180 / Math.PI,
  radians: deg => deg * Math.PI / 180,
  lerp,
  normalize,
  norm: normalize,
  map,
  random,
  rnd: random,
  perlin,
  noise: perlin
}
