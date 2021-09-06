'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  URL: '"http://localhost:8080/"',
  TRACKING_ID: '"XX-XXXXXXXXX-X"',
  API_ENDPOINT: '"http://localhost:8080/api/"',
  CLIENT_ENV: '"development"'
})
