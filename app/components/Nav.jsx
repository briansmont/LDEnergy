var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  
  render: function() {
    return (
      <div>
        <h1>LD Energy</h1>
        <div className="top-bar">
          <div>
            <ul className="menu">
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
              <li><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li><Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link></li>
              <li><Link to="/Choices" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Choices</Link></li>
              <li><Link to="/Market" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Market Update</Link></li>
              <li><Link to="/Contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
              <li><Link to="/Quote" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get a Quote!</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
