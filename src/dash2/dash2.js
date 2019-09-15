import React, { Component } from 'react';
import './dash2.css';


class dash2 extends Component {

  constructor(props) {
        super(props);
        this.mouseBar4 = this.mouseBar4.bind(this);
        this.clearMouse = this.clearMouse.bind(this);
        this.timer= null;
    }

  mouseBar4() {
      document.getElementById("bar-brand").setAttribute("style", "opacity: 0;");
      this.timer = setTimeout(function(){
      document.getElementById("bar-icon").setAttribute("style", "opacity: 1;");
    }, 100);
  }

  clearMouse() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="dash2" onMouseOver={this.mouseBar4} onMouseOut={this.clearMouse}>

        <div class="dash-header">
        <div class="panel">

          <div class="left-panel">


          <div class="dash-brand-tag ">
          <font class="mid-brand">Doublebox</font>
          </div>

          <div class="dash-brand-icon">
            <div class="hold-icon">
          <div class="rel-icon">
          <i class="material-icons white">insert_chart</i>
          </div>
        </div>
          </div>

          <div class="left-panel-box">
        <div class="left-panel-box-link"></div>

        <div class="left-panel-panel color-info">
          <div class="left-panel-content">

          <div class="p-back"></div>
          <h3 class="cut-topmargin">C O N C E P T</h3>
            Purchase equity in a company listed on the market
            to collect a portion of it's annual yeild paid monthly.
            <div class="p-back back-2"></div>
          <h3 class="">I N C E N T I V E S</h3>
          Some companies, especially startups, offer rewards,
           products, or memberships at various tiers of purchase.
           <div class="p-back back-3"></div>
           <h3 class="">V O L U M E</h3>
           A standard unit, one bit: <font class="heavy">.01% Equity</font><br/>
           Some companies may offer microbits.<br/>
           Mbits measure at 1/100th of a bit.
           <div class="p-back back-4"></div>
           <h3 class="">T R A D E</h3>
           You can sell back your equity to the company for its return value,
            or place bids to buy and sell among traders.

            <br/><br/>
            <div class="cr-align-right">
            <font class="created">Created in <font class="heavy">React</font> by</font><font class="created-i"> Ivypro Inc.</font>
            <br/><font class="copy">Copyright 2020</font>
            {/* Established 2020 */}

        </div>

      </div>
        </div>

          </div>
          </div>

          <div class="right-panel">
            <div class="up-box">
<div class="up-left-box">Up left box</div>
<div class="up-right-box">Up right box</div>
            </div>

          </div>

</div>
</div>

      </div>
    );
  }
}

export default dash2;
