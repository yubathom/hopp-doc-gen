'use strict'
const fs = require('fs-extra')
const { red, cyan, green } = require('kleur')

const jsonContent = jsonPath => fs.readJsonSync(jsonPath, { throws: false })

const createPwDoc = async args => {
  const userCommand = args[0]
  const userParameter = args[1]

  if (jsonContent(userParameter)) {
    console.log(jsonContent(userParameter))
  } else if (!userParameter) {
    console.log(` ${red('Invalid command:')} postwoman-cli ${userCommand} ${userParameter}`)
    console.log()
    console.log(` Please set ${cyan('<path/to/postwoman-collection.json)>')}`)
    console.log(` If you don't have this file create it at: ${green('https://postwoman.io')}`)
    console.log()
  } else {
    console.log(` ${red('Invalid command:')} postwoman-cli ${userCommand} ${userParameter}`)
    console.log(` The file '${userParameter}' is unreadable`)
    console.log()
  }
}

module.exports = { createPwDoc }
