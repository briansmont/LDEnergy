var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">About LD Energy</h1>
        <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/since96.jpg"></img>
        
        <p>Founded in 1996, LD Energy began consulting in the deregulated New Jersey natural gas market.  Over the past 20 plus years, we have developed an expertise in electric, and electricity procurement has become our primary consulting product.</p>
        
        <p>There are many different markets, each with there own set of utilities, rules, regulations and unique opportunities.  Our primary focuses exist within two Independent Service Organizations(ISOs):</p>
        <ul>
          <li><u><b>PJM:</b></u> Pennsylvania, New Jersey, Maryland</li>
          <li><u><b>NYISO:</b></u> New York</li>
        </ul>
        
        <p>LD Energy brings decades of expertise to each of our clients.  There are always new players in the industry, but few can bring the experience, market insight, and service that LD Energy provides.</p>
        
        <p>We build customized procurement strategies alongside of our clients to capatalize on market opportunities. A successful strategy will bridge your goals and these opportunities.</p>
      </div>
    );
  }
  
});

module.exports = About;