var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h4 className="center-text">LD Energy - since 1996</h4>
        <div className="row top-pad">
          <div className="small-2 large-4 columns"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/welcome.jpg" alt="welcome"></img></div>
          <div className="small-4 large-4 columns"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/njcust.jpg" alt="njcustomers"></img></div>
          <div className="small-6 large-4 columns"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/choices.jpg" alt="choices"></img></div>
        
        </div>
      </div>
    );
  }
});

module.exports = Home;