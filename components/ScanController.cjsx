React  = require('react')

{ Navigation } = require 'react-router'

ScanController = React.createClass
  displayname: 'IntroController'
  mixins: [Navigation]

  beaconFound:->
    @transitionTo 'BeaconController', {beacon_id: @nearestBeacon()}

  nearestBeacon:->
    1

  render: ->
    <div>
      <h1>Scanner</h1>
      <button> Click to scan</button>
    </div>

module.exports = ScanController
