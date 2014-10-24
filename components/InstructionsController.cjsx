React  = require('react')
Swipe = require("react-swipe")

{ Navigation } = require 'react-router'

InstructionsController = React.createClass
  displayname: 'InstructionsController'
  mixins: [Navigation]

  startScanning:=>
    alert("starting scan")
    @transitionTo 'scan'


  render: ->

    panes=  [
      <div className='pane'>
        <h1>Wonder around the solar system gallery scanning for messages jessy left</h1>
      </div>
      ,
      <div className='pane'>
        <h1>When your phone vibrates your getting close</h1>
      </div>
      ,
      <div className='pane'>
        <h1>Press the scan button to search for and play a message </h1>
      </div>
      ,
      <div className='pane'>
        <h1>Can you find all the messages?</h1>
        <button onClick={@startScanning}> Start Scanning </button>
      </div>
      ]

    Swipe({continuous: false},panes)

module.exports = InstructionsController
