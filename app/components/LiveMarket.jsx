var React = require('react');
var marketData = require('marketData');

var LiveMarket = React.createClass({
  render: function() {
    return (
      <div>
        <p>LIVE Market child component will be here</p>
        
        <p>State Electric Price Averages</p>
        <iframe id="eia_widget" style="float:right;width:80%;height:400px" src="//www.eia.gov/opendata/embed/iframe.php?geoset_id=ELEC.PRICE.ALL.M&map=us_merc_en&relation_id=ELEC.PRICE.ALL.M|ENDSEC&regions=USA&relation_mode=bar&regions=USA&start=200101&end=201806"></iframe>
        
        <p>Natural Gas Historical Curves</p>
        <iframe id="eia_widget" style="width:75%;height:375px" src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.RNGWHHD.D" load="iframe_load"></iframe>
      
        <p>Existing Gas Wells</p>
        <iframe id="eia_widget" style="width:75%;height:375px" src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.NA1170_NUS_8.A" load="iframe_load"></iframe>
      
        <p>US Natural Gas Consumption</p>
        <iframe id="eia_widget" style="width:75%;height:375px" src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.N9140US2.M" load="iframe_load"></iframe>

      </div>
    );
  }
  
});

module.exports = LiveMarket;