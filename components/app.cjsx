App = React.createClass
  displayName: 'App'

  getInitialState: ->
    alert("inital state is awsome")
    events: []

  render: ->
    <div className="app">
      <div className="site-navigation">
        <Link to="app">Home</Link>
        <Link to="import">Import Event</Link>
        <Link to="events">View Events</Link>
      </div>
      <div className="app-container">
        <@props.activeRouteHandler/>
      </div>
      <div className="site-footer"></div>
    </div>

module.exports= App
