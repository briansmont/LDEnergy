var React = require('react');
var marketData = require('marketData');

var LiveMarket = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <div id="natgas-update">
          <h5>Weekly Natural Gas Storage Report <small>for week ending July 6, 2018</small></h5>
          <p><strong>Summary:</strong></p>
          <p>Working gas in storage was 2,203 Bcf as of Friday, July 6, 2018, according to EIA estimates. This represents a net increase of 51 Bcf from the previous week. Stocks were 725 Bcf less than last year at this time and 519 Bcf below the five-year average of 2,722 Bcf. At 2,203 Bcf, total working gas is within the five-year historical range. </p>
          <p><small>Information above is reported by the EIA.</small></p>
        </div>
        <h3 className="text-center">Charts from the <a href="https://www.eia.gov/" target="_blank">U.S. Energy Info Administration</a></h3>
        <h4 className="text-center">Electricity</h4>
        <div className="center">
          <iframe id="eia_widget" style={{ width: '80%', height: '400px'}} src="//www.eia.gov/opendata/embed/iframe.php?geoset_id=ELEC.PRICE.ALL.M&map=us_merc_en&relation_id=ELEC.PRICE.ALL.M|ENDSEC&regions=USA&relation_mode=bar&regions=USA&start=200101&end=201806"></iframe>
        </div>


        <h4 className="text-center">Natural Gas</h4>
        
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.RNGWHHD.D" load="iframe_load"></iframe>
      
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.NA1170_NUS_8.A" load="iframe_load"></iframe>
      
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.N9140US2.M" load="iframe_load"></iframe>

      </div>
    );
  }
  
});

module.exports = LiveMarket;

