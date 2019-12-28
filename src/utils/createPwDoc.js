'use strict'
const fs = require('fs-extra')
const { red, cyan, green } = require('kleur')

const jsonContent = jsonPath => fs.readJsonSync(jsonPath, { throws: false })
const errorMessage = (command, param, message) =>
  ` ${red(
    'Invalid command: '
  )}postwoman-cli ${command} ${param} \n ${message}\n`

const createPwDoc = async args => {
  const userCommand = args[0]
  const userParameter = args[1]

  if (jsonContent(userParameter)) {
    console.log(jsonContent(userParameter))
  } else if (!userParameter) {
    console.log(
      errorMessage(
        userCommand,
        userParameter,
        `
    \r Please set ${cyan('<path/to/postwoman-collection.json)>')}
    \r If you don't have this file create it at: ${green(
      'https://postwoman.io'
    )}`
      )
    )
  } else {
    console.log(
      errorMessage(
        userCommand,
        userParameter,
        `The file '${userParameter}' is unreadable\n`
      )
    )
  }
}

module.exports = { createPwDoc }
