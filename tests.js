var fs = require('fs')
var requireGlobal = require('./')

describe('require-global-node-module', () => {
  test('throws with bad module name', () => {
    expect(() => requireGlobal()).toThrowError(/expecting module/i)
    expect(() => requireGlobal('')).toThrowError(/expecting module/i)
  })

  test('throws if cannot find module', () => {
    expect(() => requireGlobal('spongebob')).toThrowError(/cannot find module/i)
  })

  test('gets global module', () => {
    var nop = requireGlobal('nop')
    expect(typeof nop).toEqual('function')
  })
})
