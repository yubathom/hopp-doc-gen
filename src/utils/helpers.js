'use strict'

const bannerInfo = require('node-banner')

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
  console.log('Usage: create-pw-doc <path>')
  console.log('\nCreate documentation website with postwoman-collection\n')
  console.log('Options:')
  console.log(
    '  <path/to/postwoman-collection.json>    Path to postwoman-collection json file'
  )
  console.log(
    '  -h, --help                             Output usage information\n'
  )
}

module.exports = {
  showHelpInformation,
  showInvalidArgsInformation,
  showVersionInformation,
  showUnknownOptionInformation,
  showCreatePwDocInformation
}
