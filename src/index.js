'use strict'

export function clamp (a, min, max) {
  return Math.max(min, Math.min(a, max))
}

export function wrap (a, min, max) {
  if (a > max) return a % max
  if (a < min) return wrap(a + max, min, max)
  return a
}

export function normalize (a, min, max, clamped = false) {
  return map(a, min, max, 0, 1, clamped)
}

export function map (a, inMin, inMax, outMin, outMax, clamped = false) {
  const result = (a - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
  return clamped ? clamp(result, outMin, outMax) : result
}

export function lerp (a, b, t) {
  return a + t * (b - a)
}

export function random (a, b, rng = Math.random) {
  if (b !== undefined) return lerp(a, b, rng())
  return lerp(0, a, rng())
}

export function randomInt (a, b, rng = Math.random) {
  return Math.floor(random(a, b, rng))
}

export function degrees (rad) {
  return rad * 180 / Math.PI
}

export function radians (deg) {
  return deg * Math.PI / 180
}

export function ceilTo (value, nearest) {
  return Math.ceil(value / nearest) * nearest
}

export function roundTo (value, nearest) {
  return Math.round(value / nearest) * nearest
}

export function floorTo (value, nearest) {
  return Math.floor(value / nearest) * nearest
}

export function fract (value, decimals) {
  const fractionalPart = value - Math.floor(value)
  return decimals
    ? +(fractionalPart).toFixed(decimals)
    : fractionalPart
}
