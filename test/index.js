'use strict'

const path = require('path')
const execa = require('execa')
const test = require('ava')

const rootCommand = path.join(process.cwd(), 'index.js')

const matchSnapshot = async (t, args) => {
  const { stdout } = await execa.command(`${rootCommand} ${args}`)
  t.snapshot(stdout)
}

test('shows up help message without any args', async t => {
  const { stdout } = await execa(rootCommand)
  t.snapshot(stdout)
})

test('shows version with arg --version', matchSnapshot, '--version')
test('shows version with arg -V', matchSnapshot, '-V')
test('shows help with arg -h', matchSnapshot, '-h')
test('shows help with arg --help', matchSnapshot, '--help')
test('shows command usage with unknown command', matchSnapshot, 'junkcmd')
test('shows create-pw-doc with arg --h', matchSnapshot, 'create-pw-doc -h')
test('shows create-pw-doc with arg --help', matchSnapshot,'create-pw-doc --help')
test('shows create-pw-doc with undefined path', matchSnapshot,'create-pw-doc')
test('shows create-pw-doc with unreadable path', matchSnapshot,'create-pw-doc lorem.ipsum')
