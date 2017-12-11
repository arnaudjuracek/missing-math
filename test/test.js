'use strict'

const mm = require('../')

Object.keys(mm).forEach(k => {
  let args = []
  for (let i = 0; i < mm[k].length; i++)
    args.push(parseFloat((Math.random() * 100).toFixed(2)))
  const result = mm[k].apply(null, args)
  console.log(`mm.${k}(${args.join(', ')})\n> ${result}`)
})
