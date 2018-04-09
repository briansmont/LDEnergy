var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
        <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link>
        <Link to="/Choices" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Choices</Link>
        <Link to="/Market" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Market Update</Link>
        <Link to="/Contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
      </div>
    );
  }
});

module.exports = Nav;