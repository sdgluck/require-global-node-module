var exec = require('child_process').execSync
var path = require('path')
var fs = require('fs')

module.exports = function requireLocalNodeModule (module) {
  if (typeof module !== 'string' || !module.length) {
    throw new Error('Expecting module to be non-empty string')
  }

  var globalModulesPath = String(exec('npm root -g')).replace(/\r?\n|\r/g, '')

  return require(path.resolve(globalModulesPath, module))
}
