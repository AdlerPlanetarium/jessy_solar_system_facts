React  = require('react')

{ Navigation } = require 'react-router'

IntroController = React.createClass
  displayname: 'IntroController'
  mixins: [Navigation]

  componentDidMount:->
    console.log @refs.video.getDOMNode()
    @videoDone()
    # @refs.video.getDOMNode().onended = =>
    #   alert("done one")
    #   @videoDone()

  videoDone:=>
    @transitionTo '/instructions'

  render: ->
    <div>
      <video ref='video' autoPlay=true  src='./videos/intro.m4v'></video>
    </div>

module.exports = IntroController
