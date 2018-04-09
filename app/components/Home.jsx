var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h4 className="center-text">LD Energy - since 1996</h4>
        <div className="row top-pad">
          <div className="small-2 large-4 columns"><img src="/images/welcometoLDE.jpg"></img></div>
          <div className="small-4 large-4 columns"><img src="/images/njcust.jpg"></img></div>
          <div className="small-6 large-4 columns"><img src="/images/choices.jpg"></img></div>
        
        </div>
      </div>
    );
  }
});

module.exports = Home;