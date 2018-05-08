var React = require('react');

var Quote = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Request a Quote</h1>
        <p>Fill out the pdf below, and send the pdf with a copy of your energy invoice to info@ldenergyconsulting.com</p>
        <a href="https://s3.us-east-2.amazonaws.com/ldwebsite/LD+Energy+-LetterOfAuthorization.pdf" target="_blank"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/loa.jpg"></img></a>
      </div>
    );
  }
});

module.exports = Quote;