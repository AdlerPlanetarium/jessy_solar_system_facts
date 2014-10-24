React  = require('react')
{ Routes, Route, Link, DefaultRoute } = require('react-router')

BeaconController      = require('./BeaconController')
IntroController       = require('./IntroController')
InstructionsController = require('./InstructionsController')
ScanContoller         = require('./ScanController')

App = React.createClass
  displayName: 'App'

  getInitialState: ->
    events: []

  render: ->
    <div>
      <Routes>
        <Route path="/beacon/:id"     name="beacon"         handler={BeaconController} />
        <Route path="/"               name="intro"          handler={IntroController} />
        <Route path="/instructions"   name="instructions"   handler={InstructionsController} />
        <Route path="/scan"           name="scan"           handler={ScanContoller} />
      </Routes>
    </div>

React.renderComponent App(null), document.body
window.React = React
