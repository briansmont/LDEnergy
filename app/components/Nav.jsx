var React = require('react');

var {Link} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Choices">Your Choices</Link>
        <Link to="/Market">Market Update</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    );
  }
});

module.exports = Nav;