var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  
  render: function() {
    return (
      <div className="data-sticky-container">

        <div className="top-bar center-nav">
          <div>
            <ul className="menu navwide">
              <li className="tabled"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
              <li className="tabled"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li className="tabled"><Link to="/Choices" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Choices</Link></li>
              <li className="tabled"><Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link></li>
              <li className="tabled"><Link to="/Market" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Market Update</Link></li>
              <li className="tabled"><Link to="/Contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
              <li className="tabled"><Link to="/Quote" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i>Get a Quote!</i></Link></li>
            </ul>
          </div>
        </div>
        <div className="top-bar hidden">
          <div>
            <ul className="menu navwide">
              <li className="tabled"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
              <li className="tabled"><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li className="tabled"><Link to="/Choices" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Choices</Link></li>
              <li className="tabled"><Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link></li>
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
