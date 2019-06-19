#!/usr/bin/env node

const lib = require('../')

console.log('\nRunning missing-math test…\n')

Object.keys(lib).forEach(k => {
  let args = []
  for (let i = 0; i < lib[k].length; i++) {
    const value = parseInt((Math.random() * 100).toFixed(0))
    args.push(value)
  }

  const result = lib[k].apply(null, args)
  console.log(`${k}(${args.join(', ')}) = ${result}`)
})

console.log('\nmissing-math test sucessful')
