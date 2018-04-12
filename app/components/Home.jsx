var React = require('react');
var Link = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <div className="expanded row top-pad">
          <div className="small-4 large-4 columns"><a href="#/About"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/welcome.jpg" alt="welcome"></img></a></div>
          <div className="small-4 large-4 columns"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/njcust.jpg" alt="njcustomers"></img></div>
          <div className="small-4 large-4 columns"><a href="#/Choices"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/choices.jpg" alt="choices"></img></a></div>
        
        </div>
      </div>
    );
  }
});

module.exports = Home;