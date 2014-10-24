React  = require('react')

{ Navigation } = require 'react-router'

InstructionsController = React.createClass
  displayname: 'BeaconController'
  mixins: [Navigation]

  render: ->
    <h1>beacon</h1>

module.exports = InstructionsController
