/**
 * Dependencie(s)
 */

const test = require('tape')
const resolve = require('..')


test('should resolve date', assert => {
  assert.plan(1)
  var date = new Date('01-01-2020')
  assert.equal(date.getTime(), resolve(date))
})


test('should resolve number', assert => {
  assert.plan(1)
  var date = new Date()
  assert.equal(date.getTime(), resolve(date.getTime()))
})


test('should resolve string', assert => {
  assert.plan(1)
  var date = new Date('01-01-2020')
  assert.equal(date.getTime(), resolve('01-01-2020'))
})
