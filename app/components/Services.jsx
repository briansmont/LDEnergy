var React = require('react');

var Services = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Our Services</h1>
        <div className="center-div">
          <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/strategy.jpg" width="60%" height="60%"></img>
        </div>
      </div>
    );
  }
  
});

module.exports = Services;