var React = require('react');

var LiveMarket = require('LiveMarket');


var Market = React.createClass({
  
  componentDidMount: function() {
    window.scrollTo(0,0);
  },  
  
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Market Updates</h1>
        <LiveMarket />
      </div>
    );
  }
  
});

module.exports = Market;