var React = require('react');

var Thanks = React.createClass({
  
  componentDidMount: function() {
    window.scrollTo(0,0);
  },
  
  render: function() {
    return (
      <div className="childwidth">
        <h4 className="text-center">Thanks for reaching out, we'll be in touch as soon as possible</h4><br/><br/>
        
        <ul><u>Check out some more information:</u>
          <li><a href="#/Products">Available Products</a></li>
          <li><a href="#/Services">Services We Offer</a></li>
          <li><a href="http://www.state.nj.us/bpu/pdf/commercial/shoppingguide.pdf" target="_blank">NJ Shopping Guide</a></li>
        </ul>
        <ul><u>From the US Energy Information Administration:</u>
          <li><a href="https://www.eia.gov/electricity/reports.php#/T202" target="_blank">Electricity</a></li>
          <li><a href="https://www.eia.gov/naturalgas/reports.php#/T202" target="_blank">Natural Gas</a></li>
        </ul>
        
      </div>
      
    );
    
    
  }
});

module.exports = Thanks;