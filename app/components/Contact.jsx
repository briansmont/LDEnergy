var React = require('react');

var Contact = React.createClass({

  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Contact Us</h1>
        <div className="small-centered small-11 medium-6 large-5">  
          <h6>Fill out the form below and be detailed in your request. If you have any questions, list them below and we'll respond as soon as possible. If you are interested in reviewing product options, <a href="#/Quote">Request a Quote Here</a></h6>
          <form action="https://getsimpleform.com/messages?form_api_token=6bb9c297882fcb5211b5d5a9d5e976ef" method="post">
            <input type='hidden' name='redirect_to' value='http://ldbeta.herokuapp.com/#/Thanks'/>
            <input autoFocus type="text" name="fullName" placeholder="Enter Full Name"/>
            <input type="text" name="company" placeholder="Company Name" />
            <input type="text" name="position" placeholder="Position" />
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

              