var React = require('react');

var Quote = React.createClass({
  
  componentDidMount: function() {
    window.scrollTo(0,0);
  },
  
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Request a Quote</h1>
        <p>We look forward to working with you!</p>
          <ul><b>In order to provide quotes, we  need the following:</b>
            <li>Please complete the letter of authorization below</li>
            <li>Submit a recent utility invoice for each electricity and natural gas invoice you would like us to evaluate</li>
            <li>Send all attachments and any additional questions and comments to: <span id="email-quote"><address><a href="mailto:info@ldenergyconsulting.com">info@ldenergyconsulting.com</a></address></span>
              
            </li>
          </ul>
       
        <div className="row">
        
          <div className="medium-4 columns">
            <div className="row">
              <div className="medium-6 columns">
                <a href="https://s3.us-east-2.amazonaws.com/ldwebsite/LD+Energy+-LetterOfAuthorization.pdf" target="_blank"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/loa.jpg"></img></a>
              </div>
              <div className="medium-6 columns">
                <p>&laquo; Click the PDF Link to open the Letter of Authorization</p>
              </div>
            </div>
          </div>
        </div><br/>
        <h6>We'll reach out to you soon to schedule a more in depth conversation. Thanks for reaching out!</h6>
      </div>
    );
  }
});

module.exports = Quote;