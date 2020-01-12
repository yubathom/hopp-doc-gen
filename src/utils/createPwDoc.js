'use strict'
const fs = require('fs-extra')
const inquirer = require('inquirer')
const { red } = require('kleur')
const {
  showCreatePwDocInvalidPath,
  showCreatePwDocCollNotJson
} = require('./helpers')

// const setupPackages =

/**
 * Return
 * @param   {string} pathname     the first number
 * @param   {object} collection     the second number
 *
 * @returns {object}
 */
const setupDocFolder = (pathname, collection) => {
  const haveFiles = pathname => {
    fs.ensureDirSync(pathname)
    const length = fs.readdirSync(pathname).length
    return length ? length : console.log(`${pathname} folder was created`)
  }

  const overwrite = {
    type: 'confirm',
    name: 'overwrite',
    message: `There is already a folder named ${red(
      pathname
    )}. Would you like to overwrite it?`,
    default: false
  }

  const folder = {
    type: 'input',
    name: 'folder',
    message: 'Which folder? Please type',
    default:
      pathname === 'documentation'
        ? 'type another folder name'
        : 'documentation'
  }

  if (haveFiles(pathname)) {
    inquirer
      .prompt([overwrite])
      .then(overwrite => overwrite)
      .then(res => {
        if (res.overwrite) {
          res.folder = pathname
          console.log(res)
        } else {
          inquirer.prompt([folder]).then(res => {
            if (haveFiles(res.folder)) {
              setupDocFolder(res.folder, collection)
            } else {
              res.overwrite = false
              console.log(res)
            }
          })
        }
      })
  }
}

const createPwDoc = async args => {
  const getColection = pathname => fs.readJsonSync(pathname, { throws: false })
  const command = args[0]
  const path = args[1]
  const collection =
    getColection(path) || getColection('./postwoman-collection.json')

  if (collection) {
    setupDocFolder('doc', collection)
  } else if (!path) {
    showCreatePwDocInvalidPath(command, path)
  } else if (!collection) {
    showCreatePwDocCollNotJson(command, path)
  }
}

module.exports = { createPwDoc }
