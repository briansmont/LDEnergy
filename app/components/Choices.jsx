var React = require('react');

var Choices = React.createClass({
  
  makeFixed: function() {
    document.getElementById('details').innerHTML = '<h1>boobies</h1>';
  },
  
  makeIndex: function() {
    
  },
  
  makeCombo: function() {
    
  },
  
  
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Your Choices</h1>
        <p>In a deregulated energy market, you can purchase your electricity or natural gas through a third-party supplier rather than default service through your utility.</p>
      
        <p>WIREUP NEW COMPONENT INCLUDING A NAVBAR VERTICAL, include basic, process, product options. On navbar click, display processes</p>
      
        <ul>
          <li><a href="javascript:'" onClick={this.makeFixed}>Fixed</a></li>
          <li><a href="javascript:'">Index</a></li>
          <li><a href="javascript:'">Combination</a></li>
        </ul>
        <div>
          <p id="details">Fixed rates offer you 100% budget certainty in a market that is always changing.</p>
        
        </div>
        
        
      </div>
    );
  }
  
});

module.exports = Choices;