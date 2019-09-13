const semver = require("semver");
const native = require("apx-native-module");
const JavaScript = require("tree-sitter-javascript");
const Parser = require('tree-sitter');

const parser = new Parser();
parser.setLanguage(JavaScript);

const tree = parser.parse("const foo = 5;");
console.log(tree.rootNode.toString());

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
