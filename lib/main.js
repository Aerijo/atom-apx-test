const semver = require("semver");

module.exports = {
  initialize () {
    console.log("initilizing apx-test");
  },

  activate () {
    console.log("activating apx-test");
    const pj = require("../package.json");
    console.log(`version ${semver.parse(pj.version)}`)
  },

  deactivate () {
    console.log("deactivating apx-test");
  },

  serialize () {
    console.log("serializing apx-test");
  },

  deactivate () {
    console.log("deactivating apx-test");
  }
}
