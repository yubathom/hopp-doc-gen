'use strict'

const bannerInfo = require('node-banner')
const { red, cyan, green } = require('kleur')

// root command
const scriptName = 'postwoman-cli'

const showBanner = async () => {
  await bannerInfo(
    'Postwoman CLI',
    'A CLI solution for Postwoman',
    'green',
    'white'
  )
  console.log('')
}

const showHelpInformation = async () => {
  // Help text
  const helpInformation = ` Usage: $ ${scriptName} [options]

        Options
        -h | --help: Shows up help information
        -V | --version: Shows up verison information

        Commands
        create-pw-doc <path>: Create documentation website with postwoman-collection
    `
  console.log()
  await showBanner()
  console.log()
  console.log(helpInformation)
}

const usageInfo = async () => {
  await showBanner()
  console.log()
  console.log(` See ${scriptName} --help for the list of available options.`)
}

const showInvalidArgsInformation = async () => {
  await showBanner()
  console.log()
  console.log(' Invalid arguments provided')
  console.log()
  usageInfo()
}

const showVersionInformation = async () => {
  const { version } = require('../../package.json')
  await showBanner()
  console.log()
  console.log(' ' + version)
}

const showUnknownOptionInformation = async arg => {
  await showBanner()
  console.log()
  console.log(` Unknown option ${arg}`)
  console.log()
  usageInfo()
}

const showCreatePwDocInformation = async () => {
  await showBanner()
  console.log(` Usage: ${scriptName} create-pw-doc <path>`)
  console.log(' Create documentation website with postwoman-collection')
  console.log(' Options:')
  console.log(
    '   <path/to/postwoman-collection.json>    Path to postwoman-collection json file'
  )
  console.log(
    '   -h, --help                             Output usage information'
  )
  console.log()
}

const showCreatePwDocInvalidPath = async (command, path) => {
  await showBanner()
  console.log(` ${red('Invalid command:')} postwoman-cli ${command} ${path}`)
  console.log()
  console.log(` Please set ${cyan('<path/to/postwoman-collection.json)>')}`)
  console.log(
    ` If you don't have this file create it at: ${green(
      'https://postwoman.io'
    )}`
  )
  console.log()
}

const showCreatePwDocCollNotJson = async (command, path) => {
  await showBanner()
  console.log(` ${red('Invalid command:')} postwoman-cli ${command} ${path}`)
  console.log(` The file '${path}' is unreadable`)
  console.log()
}

module.exports = {
  showHelpInformation,
  showInvalidArgsInformation,
  showVersionInformation,
  showUnknownOptionInformation,
  showCreatePwDocInformation,
  showCreatePwDocInvalidPath,
  showCreatePwDocCollNotJson
}
