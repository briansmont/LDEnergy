var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div id="footer">
        <div id="quicklinks" className="top-bar">
          
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
                  <p><a href="https://www.ferc.gov" target="_blank">FERC</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>11 W. Passaic Street</p>
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
                  <p><a href="http://www.bpu.state.nj.us/bpu/index.shtml" target="_blank">NJ Board of Public Utilities</a></p>
                </div>
                <div className="medium-4 columns">
                  <p>Rochelle Park, NJ 07662</p>
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
                  <p>(201) 291-1901</p>
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
                  <p id="emailbutton"><address><a href="mailto:info@ldenergyconsulting.com">info@ldenergyconsulting.com</a></address></p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="disclaimer">
            <div className="row">
              <small>LD Energy is an independent consultant. Any context, opinion, prices, or general information is for informational purposes only, and may contain inaccuracies. LD Energy gives no assurance or warranty regarding the accuracy, timeliness, or applicability of any of the contents expressed. LD Energy hereby excludes liability for any claims, losses, demands, or damages of any kind whatsoever with regard to any information, content, or services provided at our web site, including but not limited to direct, indirect, incidental, or consequential loss or damages, compensatory damages, loss of profits, or data, or otherwise.</small>
            </div>
            <div className="row">
              <p>&copy; Copyright 2018, LD Energy, All Rights Reserved</p>
            </div>
          </div>
          
        </div>
        
      </div>
      
    );
  }
});

module.exports = Footer;