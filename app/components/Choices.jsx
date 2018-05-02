var React = require('react');
var fixed = '<ul><li>Deregulated markets allow you to choose your supplier for electricity & natural gas</li><li>Your utility company will continue to maintain the delivery and distribution of the commodities</li></ul>';
var process =  '<ul><li>Consultation with the client to determine short & long term goals</li><li>LD Energy will present alternatives taking into account these goals, combined with market opportunity and risk tolerance</li></ul>';
var products = '<ul><li>What are the goals for energy spend?</li><li>How much risk is the client comfortable with?</li><li>Take into account the time of year and the terms of various opportunities</li></ul>';

var Choices = React.createClass({
  
  makeBasics: function() {
    document.getElementById('details').innerHTML = fixed;
    document.getElementById('link').innerHTML = '<a href="#/Basics">Learn More</a>';
  },
  
  makeProcess: function() {
    document.getElementById('details').innerHTML = process;
    document.getElementById('link').innerHTML = '<a href="#/Process">Learn More</a>';
  },
  
  makeProduct: function() {
    document.getElementById('details').innerHTML = products;
    document.getElementById('link').innerHTML = '<a href="javascript:">Learn More</a>';
  },
  
  
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Your Choices</h1>
        <p>In a deregulated energy market, you can purchase your electricity or natural gas through a third-party supplier rather than default service through your utility.</p>
      
        <ul className="menu">
          <li><a href="javascript:'" onClick={this.makeBasics}>Basics</a></li>
          <li><a href="javascript:'" onClick={this.makeProcess}>Process</a></li>
          <li><a href="javascript:'"onClick={this.makeProduct}>Product Options</a></li>
        </ul>
        <div>
          <p id="details"></p>
          <p id="link"></p>
        </div>
        
        
      </div>
    );
  }
  
});

module.exports = Choices;