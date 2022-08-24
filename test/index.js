import * as mm from '../src'
import test from 'ava'

const tests = {}

tests['clamp'] = t => {
  t.is(mm.clamp(0, 50, 100), 50)
  t.is(mm.clamp(100, 0, 50), 50)
}

tests['wrap'] = t => {
  t.is(mm.wrap(0, 0, 100), 0)
  t.is(mm.wrap(1, 0, 100), 1)
  t.is(mm.wrap(100, 0, 100), 100)
  t.is(mm.wrap(101, 0, 100), 1)
  t.is(mm.wrap(150, 0, 100), 50)
  t.is(mm.wrap(1001, 0, 100), 1)
  t.is(mm.wrap(1050, 0, 100), 50)
  t.is(mm.wrap(-1, 0, 100), 99)
  t.is(mm.wrap(-50, 0, 100), 50)
  t.is(mm.wrap(-150, 0, 100), 50)
  t.is(mm.wrap(-101, 0, 100), 99)
  t.is(mm.wrap(-1099, 0, 100), 1)
}

tests['normalize'] = t => {
  t.is(mm.normalize(0, 0, 100), 0)
  t.is(mm.normalize(50, 0, 100), 0.5)
  t.is(mm.normalize(100, 0, 100), 1)
  t.is(mm.normalize(-1, 0, 1, true), 0)
  t.is(mm.normalize(10, 0, 1, true), 1)
}

tests['map'] = t => {
  t.is(mm.map(50, 0, 100, -100, 100), 0)
  t.is(mm.map(500, 0, 100, -100, 100, true), 100)
}

tests['lerp'] = t => {
  t.is(mm.lerp(0, 100, 0), 0)
  t.is(mm.lerp(0, 100, 0.5), 50)
  t.is(mm.lerp(0, 100, 1), 100)
}

tests['roundTo'] = t => {
  t.is(mm.roundTo(33, 10), 30)
  t.is(mm.roundTo(36, 10), 40)
}

tests['floorTo'] = t => {
  t.is(mm.floorTo(33, 10), 30)
}

tests['ceilTo'] = t => {
  t.is(mm.ceilTo(33, 10), 40)
}

tests['fract'] = t => {
  t.is(mm.fract(3), 0)
  t.is(mm.fract(3.1415926, 1), 0.1)
  t.is(mm.fract(3.1415926, 2), 0.14)
  t.is(mm.fract(3.1415926, 3), 0.142)
  t.is(mm.fract(3.1415926, 4), 0.1416)
}

Object.keys(mm).forEach(name => {
  if (tests.hasOwnProperty(name)) test(name, tests[name])
  else test.todo(name)
})
