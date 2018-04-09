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
        <h2>Main Container Component</h2>
        <p>Will have header, nav changes which child component exists within the SPA changing portion, and a footer</p>
        {this.props.children}

      </div>
    );
  }
});

module.exports = Main;