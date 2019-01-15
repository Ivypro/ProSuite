import React, { Component } from 'react';
import './dash.css';

import ivyiconximg from '../assets/ivyproLogo.png';
import ivyicon2ximg from '../assets/ivyproLogoBlack.png';
import amazon from '../assets/amazon.png';
import ivypro from '../assets/ivypro.png';
import ivyprot from '../assets/ivyproT.png';
import tesla from '../assets/tesla.png';
import teslas from '../assets/tesla-s.png';
import apple from '../assets/apple.png';
import airbnb from '../assets/airbnb.png';
import facebook from '../assets/facebook.png';
import uber from '../assets/uber.jpg';
import google from '../assets/google.png';

import titleximg from '../assets/i-large.png';

class dash extends Component {

  constructor(props) {
        super(props);
        this.mouseBar4 = this.mouseBar4.bind(this);
        this.clearMouse = this.clearMouse.bind(this);
        this.timer= null;
    }


  x1min() {
    var x = document.getElementsByClassName("slab-line");
    var i; for (i = 0; i < x.length; i++)
    { x[i].className += " slab-line-out"; };
    var x = document.getElementsByClassName("slab-box");
    var i; for (i = 0; i < x.length; i++)
    { x[i].className += " slab-box-out"; };
    setTimeout(function(){
      var x = document.getElementsByClassName("slab-container");
      var i; for (i = 0; i < x.length; i++)
      { x[i].className += " slab-container-out"; };
  }, 500);
    setTimeout(function(){
      var x = document.getElementsByClassName("main-content");
      var i; for (i = 0; i < x.length; i++)
      { x[i].className += " main-content-out"; };
  }, 1000);
  setTimeout(function(){
    var x = document.getElementsByClassName("slab-container");
    var i; for (i = 0; i < x.length; i++)
    { x[i].className += " none"; };
    var x = document.getElementsByClassName("main-content");
    var i; for (i = 0; i < x.length; i++)
    { x[i].className += " main-content-reset"; };
}, 1500);
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
      <div className="dash" onMouseOver={this.mouseBar4} onMouseOut={this.clearMouse}>


<div class="dash-header">
<div class="panel">

  <div class="left-panel">


  <div class="dash-brand-tag ">
  <font class="mid-brand">Equity Market</font>
  </div>

  <div class="dash-brand-icon">
  <div class="rel-icon">
  <i class="material-icons white">insert_chart</i>
  </div>
  </div>

  <div class="left-panel-box">
<div class="left-panel-box-link"></div>

<div class="left-panel-panel" id="info">
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

  <div class="right-panel">
    <div class="right-liner" id="m-liner">

              <div class="slab-container">
                  <div class="slab-line"></div>
                  <div class="slab-line line-2"></div>
                  <div class="slab-line line-3"></div>
      <div class="slab-box">
      Add your company to <font class="tealish">crowdsource</font> funding
    </div>
    <div class="slab-bars" onClick={this.x1min}>
      <i class="fas fa-bars"></i>
    </div>
             </div>

               <div class="main-content" id="m-main">

                 <div class="title-fullline NOTE"></div>
                 <div class="title-block"><i class="fas fa-filter filter-icon"></i><i class="fas fa-eye eye-icon"></i>
<div class="title-scroll">

                 <div class="title-item dent">New Companies<i class="fa fa-times filx" aria-hidden="true"></i></div>


</div>
               </div>

               <div class="main-case">
               <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj"></div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>
               <div class="main-block">
               <div class="block-img"><img class="logo logo1" src={amazon} /></div>
               <div class="block-stats"><div class="bl-com">Amazon.com</div> <br/>
               <div class="bl-yld"> Y: 177B</div><div class="bl-pri">$: <font class="l-teal">75k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo" src={tesla} /></div>
               <div class="block-stats"><div class="bl-com">Tesla</div> <br/>
               <div class="bl-yld"> Y: 11B</div><div class="bl-pri">$: <font class="l-teal">12k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo" src={uber} /></div>
               <div class="block-stats"><div class="bl-com">Uber</div> <br/>
               <div class="bl-yld"> Y: 6.5B</div><div class="bl-pri">$: <font class="l-teal">4.2k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo" src={airbnb} /></div>
               <div class="block-stats"><div class="bl-com">Airbnb</div> <br/>
               <div class="bl-yld"> Y: 2.6B</div><div class="bl-pri">$: <font class="l-teal">1.2k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo logo2" src={apple} /></div>
               <div class="block-stats"><div class="bl-com">Apple Inc.</div> <br/>
               <div class="bl-yld"> Y: 229B</div><div class="bl-pri">$: <font class="l-teal">235k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo" src={ivyprot} /></div>
               <div class="block-stats"><div class="bl-com">Ivypro Inc.</div> <br/>
               <div class="bl-yld"> Y: 28M</div><div class="bl-pri">$: <font class="l-teal">2.5k</font>/bit</div></div></div>
               </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo" src={google} /></div>
               <div class="block-stats"><div class="bl-com">Google</div> <br/>
               <div class="bl-yld"> Y: 32B</div><div class="bl-pri">$: <font class="l-teal">10k</font>/Mbit</div></div></div>
                 </div>

               <div class="main-case">
               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

             </div>

    </div>
  </div>

</div>
</div>

      </div>
    );
  }
}

export default dash;
