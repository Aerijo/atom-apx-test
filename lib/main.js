const semver = require("semver");
const native = require("apx-native-module");

class Foo {
  constructor () {
    console.log("changed");
  }

  initialize () {
    console.log("initilizing apx-test");
  }

  activate () {
    console.log("activating apx-test");
    const pj = require("../package.json");
    console.log(`version ${semver.parse(pj.version)}`);
  }

  deactivate () {
    console.log("deactivating apx-test");
  }

  serialize () {
    console.log("serializing apx-test");
  }

  deactivate () {
    console.log("deactivating apx-test");
  }
}

module.exports = new Foo("foo");
