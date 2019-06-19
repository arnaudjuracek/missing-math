'use strict'

export function clamp (a, min, max) {
  return Math.max(min, Math.min(a, max))
}

export function normalize (a, min, max) {
  return map(a, min, max, 0, 1)
}

export function map (a, inMin, inMax, outMin, outMax) {
  return (a - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

export function lerp (a, b, t) {
  return a + t * (b - a)
}

export function random (a, b) {
  if (b !== undefined) return lerp(a, b, Math.random())
  return lerp(0, a, Math.random())
}

export function degrees (rad) {
  return rad * 180 / Math.PI
}

export function radians (deg) {
  return deg * Math.PI / 180
}
