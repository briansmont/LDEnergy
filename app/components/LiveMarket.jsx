var React = require('react');
var marketData = require('marketData');

var LiveMarket = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <div className="space-bottom" id="natgas-update">
          <h5>Weekly Natural Gas Storage Report <small>for week ending October 19, 2018</small></h5>
          <p><strong>Summary:</strong></p>
          <p>Working gas in storage was 3,095 Bcf as of Friday, October 19, 2018, according to EIA estimates. This represents a net increase of 58 Bcf from the previous week. Stocks were 606 Bcf less than last year at this time and 624 Bcf below the five-year average of 3,719 Bcf. At 3,095 Bcf, total working gas is below the five-year historical range. </p>
          <p><small>Information above is reported by the EIA.</small></p>
        </div>
        <h3  className="space-bottom" className="text-center">Charts from the <a href="https://www.eia.gov/" target="_blank">U.S. Energy Info Administration</a></h3>
        
        <div  className="space-bottom">
          <h4 className="text-center space-bottom"><u>Electricity</u></h4>
          <div className="center">
            <iframe id="eia_widget" style={{ width: '80%', height: '400px'}} src="//www.eia.gov/opendata/embed/iframe.php?geoset_id=ELEC.PRICE.ALL.M&map=us_merc_en&relation_id=ELEC.PRICE.ALL.M|ENDSEC&regions=USA&relation_mode=bar&regions=USA&start=200101&end=201806"></iframe>
          </div>
        </div>
        
        <div  className="space-bottom">
          <h4 className="text-center space-bottom"><u>Natural Gas</u></h4>
          
          <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.RNGWHHD.D" load="iframe_load"></iframe>
        
          <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.NA1170_NUS_8.A" load="iframe_load"></iframe>
        
          <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.N9140US2.M" load="iframe_load"></iframe>
        </div>
      </div>
    );
  }
  
});

module.exports = LiveMarket;

