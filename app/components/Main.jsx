var React = require('react');
var Nav = require('Nav');
var marketData = require('marketData');

var Main = React.createClass({
  
  componentDidMount: function() {
    console.log("Mounted!");
    marketData.getNJData();
    
  },
  
  render: function() {
    return (
      <div>
        <Nav/>
        <br></br>
        
        {this.props.children}

      </div>
    );
  }
});

module.exports = Main;