var React = require('react');
var marketData = require('marketData');

var LiveMarket = React.createClass({
  render: function() {
    return (
      <div className="childwidth">
        <h3 className="text-center">Data below is current and sourced from the <a href="https://www.eia.gov/" target="_blank">U.S. Energy Info Administration</a></h3>
        
        <h4 className="text-center">Electricity</h4>
        <div className="center">
          <iframe id="eia_widget" style={{ width: '80%', height: '400px'}} src="//www.eia.gov/opendata/embed/iframe.php?geoset_id=ELEC.PRICE.ALL.M&map=us_merc_en&relation_id=ELEC.PRICE.ALL.M|ENDSEC&regions=USA&relation_mode=bar&regions=USA&start=200101&end=201806"></iframe>
        </div>


        <h4>Natural Gas</h4>
        
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.RNGWHHD.D" load="iframe_load"></iframe>
      
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.NA1170_NUS_8.A" load="iframe_load"></iframe>
      
        <iframe id="eia_widget" style={{width:'75%',height:'375px'}} src="//www.eia.gov/opendata/embed/iframe.php?series_id=NG.N9140US2.M" load="iframe_load"></iframe>

      </div>
    );
  }
  
});

module.exports = LiveMarket;

