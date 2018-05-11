var React = require('react');

var Basics = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <div className="row">
          <div className="columns large-6">
            <a href="#/Choices" className="next">&laquo; Back to Choices</a>        
          </div>

          <div className="columns large-4">
            <a href="#javascript:'"><b><i>Basics</i></b></a>
            <a href="#/Process" className="next">&raquo; Process</a>
            <a href="#/Products" className="next">&raquo;&raquo; Products</a>
          </div>          
        </div>
        
      
        <h3 className="sub-title">The Basics</h3>
        <br/>
        <p>The deregulation of electricity and natural gas means you can choose the source of your energy supply.  For electricity and natural gas, there are two core components to the cost:</p>
        <ol>
          <li><b>Supply/Generation:</b> This is the generation of the commodity itself.  The commodity delivered to your business is identical, regardless of who produced it or where it was purchased from.  In a deregulated marketplace, if a customer takes no action, the local utility company will procure the commodity on their behalf.</li>
          <li><b>Delivery/Distribution:</b> Your local utility's core function is to deliver the commodity to your business, and maintain and support the local distribution infrastructure.  Your local utility will continue to be your point of contact for outages, meter readings, and will continue to provide the same quality of service that they always have.</li>
        </ol>
        <p>By procuring from a third-party, you allow yourself the ability to negotiate rates, and you provide yourself flexibility into how you purchase your commodities.  Default rates through the local utility may be market-based or a blended average or periodical purchases; each state and local utility handles this differently.  Regardless of the utility, when you allow them to procure on your behalf, you have no flexibility to take advantage of the open market to benefit your business needs.</p>

        
      </div>
    );
  }
});

module.exports = Basics;