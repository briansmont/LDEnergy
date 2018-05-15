var React = require('react');
var Link = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h1 className="text-center page-title">LD Energy Consulting</h1>
        <div className="expanded row top-pad">
          <div className="small-4 large-4 columns"><a href="#/About"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/welcome.jpg" alt="welcome"></img></a></div>
          <div className="small-4 large-4 columns"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/njcust.jpg" alt="njcustomers"></img></div>
          <div className="small-4 large-4 columns"><a href="#/Choices"><img src="https://s3.us-east-2.amazonaws.com/ldwebsite/choices.jpg" alt="choices"></img></a></div>
        
        </div>
        
        <div className="text-info">
          <p>For more than 20 years, LD Energy has been successfully consulting and procuring in the energy commodity industry.  Over this time, the team at LD Energy has strengthened its relationships, services, and expertise.</p>
          <p>Electricity and natural gas prices are constantly changing daily, shaped by economic, weather, and generational factors. Each industry, and every company, has demands and usage patterns that are completely unique, and we have developed a core competency to manage these expenditures as an asset.</p>
          <p>To manage this asset, two metrics must be considered over the short and long terms, total expenditure and risk.</p>
        </div>
        
      </div>
    );
  }
});

module.exports = Home;