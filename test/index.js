import * as mm from '../src'
import test from 'ava'

const tests = {}

tests['clamp'] = t => {
  t.is(mm.clamp(0, 50, 100), 50)
  t.is(mm.clamp(100, 0, 50), 50)
}

tests['normalize'] = t => {
  t.is(mm.normalize(0, 0, 100), 0)
  t.is(mm.normalize(50, 0, 100), 0.5)
  t.is(mm.normalize(100, 0, 100), 1)
}

tests['map'] = t => {
  t.is(mm.map(50, 0, 100, -100, 100), 0)
}

tests['lerp'] = t => {
  t.is(mm.lerp(0, 100, 0), 0)
  t.is(mm.lerp(0, 100, 0.5), 50)
  t.is(mm.lerp(0, 100, 1), 100)
}

Object.keys(mm).forEach(name => {
  if (tests.hasOwnProperty(name)) test(name, tests[name])
  else test.todo(name)
})
