#! /usr/bin/env node

'use strict'

const {
  showHelpInformation,
  showVersionInformation,
  showUnknownOptionInformation,
  showInvalidArgsInformation,
  showCreatePwDocInformation
} = require('./utils/helpers')

const { createPwDoc } = require('./utils/createPwDoc')

const helpCommands = ['--help', '-h']

// parse args
const [, , ...args] = process.argv

if (!args.length) {
  ;(async () => {
    await showHelpInformation()
  })()
} else if (args.length > 2 || !args[0].includes('-')) {
  showInvalidArgsInformation()
} else if (helpCommands.includes(args[0])) {
  showHelpInformation()
} else if (['--version', '-v'].includes(args[0])) {
  showVersionInformation()
} else if (['create-pw-doc'].includes(args[0])) {
  helpCommands.includes(args[1])
    ? showCreatePwDocInformation()
    : createPwDoc(args)
} else {
  showUnknownOptionInformation(args[0])
}
