const binding = require(`./build/Release/bin`);
const assert = require('assert');
assert.strictEqual(binding.hello(), 'world');
console.log('binding.hello() =', binding.hello('dddd'));
