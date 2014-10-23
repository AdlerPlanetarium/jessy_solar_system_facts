(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./components/app.cjsx":[function(require,module,exports){
var App;

App = React.createClass({
  displayName: 'App',
  getInitialState: function() {
    alert("inital state is awsome");
    return {
      events: []
    };
  },
  render: function() {
    return React.createElement(React.DOM.div, {
      "className": "app"
    }, React.createElement(React.DOM.div, {
      "className": "site-navigation"
    }, React.createElement(Link, {
      "to": "app"
    }, "Home"), React.createElement(Link, {
      "to": "import"
    }, "Import Event"), React.createElement(Link, {
      "to": "events"
    }, "View Events")), React.createElement(React.DOM.div, {
      "className": "app-container"
    }, React.createElement(this.props.activeRouteHandler, null)), React.createElement(React.DOM.div, {
      "className": "site-footer"
    }));
  }
});

module.exports = App;



},{}]},{},["./components/app.cjsx"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3R1YXJ0bHlubi9TaXRlcy9qZXNzeV9zb2xhcl9zeXN0ZW1fZmFjdHMvY29tcG9uZW50cy9hcHAuY2pzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsR0FBQTs7QUFBQSxHQUFBLEdBQU0sS0FBSyxDQUFDLFdBQU4sQ0FDSjtBQUFBLEVBQUEsV0FBQSxFQUFhLEtBQWI7QUFBQSxFQUVBLGVBQUEsRUFBaUIsU0FBQSxHQUFBO0FBQ2YsSUFBQSxLQUFBLENBQU0sd0JBQU4sQ0FBQSxDQUFBO1dBQ0E7QUFBQSxNQUFBLE1BQUEsRUFBUSxFQUFSO01BRmU7RUFBQSxDQUZqQjtBQUFBLEVBTUEsTUFBQSxFQUFRLFNBQUEsR0FBQTtXQUNOLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBOUIsRUFBbUM7QUFBQSxNQUFDLFdBQUEsRUFBYSxLQUFkO0tBQW5DLEVBQ0UsS0FBSyxDQUFDLGFBQU4sQ0FBb0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUE5QixFQUFtQztBQUFBLE1BQUMsV0FBQSxFQUFhLGlCQUFkO0tBQW5DLEVBQ0UsS0FBSyxDQUFDLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEI7QUFBQSxNQUFDLElBQUEsRUFBTSxLQUFQO0tBQTFCLEVBQXlDLE1BQXpDLENBREYsRUFFRSxLQUFLLENBQUMsYUFBTixDQUFvQixJQUFwQixFQUEwQjtBQUFBLE1BQUMsSUFBQSxFQUFNLFFBQVA7S0FBMUIsRUFBNEMsY0FBNUMsQ0FGRixFQUdFLEtBQUssQ0FBQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCO0FBQUEsTUFBQyxJQUFBLEVBQU0sUUFBUDtLQUExQixFQUE0QyxhQUE1QyxDQUhGLENBREYsRUFNRSxLQUFLLENBQUMsYUFBTixDQUFvQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQTlCLEVBQW1DO0FBQUEsTUFBQyxXQUFBLEVBQWEsZUFBZDtLQUFuQyxFQUNFLEtBQUssQ0FBQyxhQUFOLENBQW9CLElBQUMsQ0FBQSxLQUFLLENBQUMsa0JBQTNCLEVBQStDLElBQS9DLENBREYsQ0FORixFQVNFLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBOUIsRUFBbUM7QUFBQSxNQUFDLFdBQUEsRUFBYSxhQUFkO0tBQW5DLENBVEYsRUFETTtFQUFBLENBTlI7Q0FESSxDQUFOLENBQUE7O0FBQUEsTUFvQk0sQ0FBQyxPQUFQLEdBQWdCLEdBcEJoQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIkFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzXG4gIGRpc3BsYXlOYW1lOiAnQXBwJ1xuXG4gIGdldEluaXRpYWxTdGF0ZTogLT5cbiAgICBhbGVydChcImluaXRhbCBzdGF0ZSBpcyBhd3NvbWVcIilcbiAgICBldmVudHM6IFtdXG5cbiAgcmVuZGVyOiAtPlxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRE9NLmRpdiwge1wiY2xhc3NOYW1lXCI6IFwiYXBwXCJ9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5ET00uZGl2LCB7XCJjbGFzc05hbWVcIjogXCJzaXRlLW5hdmlnYXRpb25cIn0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge1widG9cIjogXCJhcHBcIn0sIFwiSG9tZVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7XCJ0b1wiOiBcImltcG9ydFwifSwgXCJJbXBvcnQgRXZlbnRcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge1widG9cIjogXCJldmVudHNcIn0sIFwiVmlldyBFdmVudHNcIilcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkRPTS5kaXYsIHtcImNsYXNzTmFtZVwiOiBcImFwcC1jb250YWluZXJcIn0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQHByb3BzLmFjdGl2ZVJvdXRlSGFuZGxlciwgbnVsbClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkRPTS5kaXYsIHtcImNsYXNzTmFtZVwiOiBcInNpdGUtZm9vdGVyXCJ9KVxuICAgIClcblxubW9kdWxlLmV4cG9ydHM9IEFwcFxuIl19
