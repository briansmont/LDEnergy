var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  
  render: function() {
    return (
      <div className="data-sticky-container">
        <div className="row">
          <a href="#/"><img style={{position: 'fixed', top: '0', left: '0'}} src="https://s3.us-east-2.amazonaws.com/ldwebsite/logo.jpg"></img></a>
          <p style={{color: 'green', position: 'fixed', top: '20', right: '50'}}><b><i>Energy Consultant Since 1996</i></b></p>
        </div>
        <div className="row top-left" style={{visibility: 'hidden'}}>
          <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/logo.jpg"></img>
        </div>
        <div className="top-bar center-nav">
          <div>
            <ul className="menu navwide">
              <li className="tabled"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
              <li className="tabled"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li className="tabled"><Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link></li>
              <li className="tabled"><Link to="/Choices" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Choices</Link></li>
              <li className="tabled"><Link to="/Market" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Market Update</Link></li>
              <li className="tabled"><Link to="/Contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
              <li className="tabled"><Link to="/Quote" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i>Get a Quote!</i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
