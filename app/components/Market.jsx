var React = require('react');

var LiveMarket = require('LiveMarket');

var Market = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Market updates will go here</h4>
        <LiveMarket/>
      </div>
    );
  }
  
});

module.exports = Market;