var React = require('react');

var Contact = React.createClass({
  
  getInitialSate: function() {
    return {
      submitted: 'nope', className: 'entered'
    };
  },
  
  handleSubmit: function(e) {
    console.log('submitted');
    e.preventDefault();
    this.setState({'submitted': 'true', 'classname': 'entered'});
  },
  
  render: function() {
    if (this.state.submitted === 'nope') {
      return (
        <div className="childwidth">
          <h1 className="text-center page-title">Contact Us</h1>
          <div className="small-centered small-11 medium-6 large-5">  
            <h3>How can we help?</h3>
            <form onSubmit={this.handleSubmit} action="https://getsimpleform.com/messages?form_api_token=6bb9c297882fcb5211b5d5a9d5e976ef" method="post">

              <input autoFocus type="text" fullname="fullName" placeholder="Enter Full Name"/>
              <input type="text" name="email" placeholder="Email Address" />
              <input type="number" name="phoneNumber" placeholder="Phone Number" />
              <textarea name="message" placeholder="Let us know how we can help"></textarea>
            
              <button className="button expanded">Submit!</button>
            
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="childwidth">
            <h3>Thanks for reaching out, we'll contact you as soon as possible!</h3>
          </div>
        
        </div>
      );
    }
  }
});

module.exports = Contact;

              // <input type='hidden' name='source' value='/'/>