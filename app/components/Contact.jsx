var React = require('react');

var Contact = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Contact Us</h1>
        <div className="small-centered small-11 medium-6 large-5">  
          <h3>How can we help?</h3>
          <form action="https://getsimpleform.com/messages?form_api_token=6bb9c297882fcb5211b5d5a9d5e976ef" method="post">
            <input autoFocus type="text" name="fullName" placeholder="Enter Full Name"/>
            <input type="text" name="email" placeholder="Email Address" />
            <input type="number" name="phoneNumber" placeholder="Phone Number" />
            <textarea name="message" placeholder="Let us know how we can help"></textarea>
          
            <button className="button expanded">Submit!</button>
          
          </form>
        </div>
      </div>
    );
  }
  
});

module.exports = Contact;