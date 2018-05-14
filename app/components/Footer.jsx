var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">
        <div className="top-bar">
          
          <div className="row">
            <div className="medium-9 columns">
              <div className="row">
                <div className="medium-4 columns">
                  <h5>Quick Links</h5>
                </div>
                <div className="medium-4 columns">
                  <h5>Helpful Sources</h5>
                </div>
                <div className="medium-4 columns">
                  <h5>Contact</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="medium-9 columns">
              <div className="row">
                <div className="medium-4 columns">
                  <p><a href="#/">Home</a></p>
                </div>
                <div className="medium-4 columns">
                  <p><a href="https://www.ferc.gov" target="_blank">Federal Energy Regulatory Commission</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>content</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="medium-9 columns">
              <div className="row">
                <div className="medium-4 columns">
                  <p><a href="#/About">About Us</a></p>
                </div>
                <div className="medium-4 columns">
                  <p><a href="www.bpu.state.nj.us" target="_blank">NJ Board of Public Utilities</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>content</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="medium-9 columns">
              <div className="row">
                <div className="medium-4 columns">
                  <p><a href="#/Market">Market Info</a></p>
                </div>
                <div className="medium-4 columns">
                  <p><a href="http://www.cmegroup.com/trading/energy/natural-gas/natural-gas.html" target="_blank">Henry Hub Natural Gas</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>content</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="medium-9 columns">
              <div className="row">
                <div className="medium-4 columns">
                  <p><a href="#/Quote">Request a Quote</a></p>
                </div>
                <div className="medium-4 columns">
                  <p><a href="https://www.eia.gov/" target="_blank">U.S. Energy Info Administration</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
});

module.exports = Footer;