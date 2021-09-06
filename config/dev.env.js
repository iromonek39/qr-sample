'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL: '"http://localhost:8080/"',
  TRACKING_ID: '"XX-XXXXXXXXX-X"',
  API_ENDPOINT: '"http://localhost:8080/api/"',
  CLIENT_ENV: '"development"'
})
