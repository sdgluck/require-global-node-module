var exec = require('child_process').execSync
var path = require('path')
var fs = require('fs')

var globalModulesPath = String(exec('npm root -g')).replace(/\r?\n|\r/g, '')

function globalResolve (module) {
  return path.resolve(globalModulesPath, module)
}

function globalRequire (module) {
  if (typeof module !== 'string' || !module.length) {
    throw new Error('Expecting module to be non-empty string')
  }

  return require(globalResolve(module))
}

globalRequire.resolve = globalResolve
module.exports = globalRequire
