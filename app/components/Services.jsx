var React = require('react');

var Services = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">Our Services</h1>
        <h6 className="text-center">Our core goal is to work alongside you to develop a strategy that will be the most beneficial given the logistics of your company.</h6>
        <div className="childwidth">
          <p className="text-center"><small>We utilize relationships and expertise built over more than 20 years to bring you the following services:</small></p>
          
          <ul><u>Energy Auditing</u>
            <li>Review current circumstances, taking into account existing contracts, logistics, short & long term plans</li>
            <li>Initial recommendations before a deeper dive into more complex alternatives</li>          
          </ul>
          <ul><u>Commodity Procurement</u>
            <li>Fixed Price</li>
            <li>Index Price</li>
            <li>For more information, please refer to <a href="#/Products">Product Options</a></li>
          </ul>
          <ul><u>Contract Review & Negotiation</u>
            <li>Different suppliers have different agreements, so we ensure they meet your needs</li>
            <li>Determine ideal billing options, usage bandwidth allowances, term lengths</li>
          </ul>
          <ul><u>Reporting</u>
            <li>PSE&G Price to Compare Forecasts</li>
            <li>Savings analyses - projections and backcasted</li>
            <li>Cost analyses and summaries</li>
            <li>Custom reports requested by clients</li>
          </ul>
          <ul><u>Customer Service <b>Always</b></u>
            <li><a href="#/Contact">Reach out</a> to us for ANY and ALL billing issues and questions</li>
            <li>Changes of meter numbers, moving to a new location, ending a lease early, etc... We can assist in mitigating any issues that may result</li>
          </ul>
        
        
        </div>
        
        
        <div className="center-div padding-top">
          <h6>Take a look at what we do to develop strategies for you:</h6>
          <img src="https://s3.us-east-2.amazonaws.com/ldwebsite/strategy.jpg" width="80%" height="80%"></img>
        </div>
      </div>
    );
  }
  
});

module.exports = Services;