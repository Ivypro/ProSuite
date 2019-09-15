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

import chart1 from '../assets/chart1.png';
import chart2 from '../assets/chart2.png';

import titleximg from '../assets/i-large.png';

declare var $

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
    $('.ri-s1, .slide1-secA').css({"opacity": "0"});
    setTimeout(function(){
    $('.ri-s1, .slide1-secA').css({"opacity": "1"});
    $('.ri-s1, .slide1-secA').hide();
    $('.ris-s1, .slide1-secB').show();
     }, 500);
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

  // ishift() {
  // $('.ri-s1, .slide1-secA').css({"opacity": "0"});
  //   setTimeout(function(){
  //     $('.ri-s1, .slide1-secA').hide();
  //     // Hide Orginal
  //     $('.ris-s1, .slide1-secB').show();
  //     $('.ris-s1, .slide1-secA').css({"opacity": "1"});
  //   }, 500);
  // }

  ishift() {
  $('.ri-s1, .slide1-secA').css({"opacity": "0"});
  setTimeout(function(){
  $('.ri-s1, .slide1-secA').css({"opacity": "1"});
  $('.ri-s1, .slide1-secA').hide();
  $('.ris-s1, .slide1-secB').show();
   }, 500);
  }

  ishiftb() {
  $('.ris-s1, .slide1-secB').css({"opacity": "0"});
  setTimeout(function(){
  $('.ris-s1, .slide1-secB').css({"opacity": "1"});
  $('.ris-s1, .slide1-secB').hide();
  $('.ri-s1, .slide1-secA').show();
   }, 500);
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
    <div class="hold-icon">

  <div class="rel-icon ri-s1" onClick={this.ishift}>
  <i class="material-icons">insert_chart</i>
  </div>

  <div class="rel-icon-shift ris-s1" onClick={this.ishiftb}>
  <i class="material-icons">insert_chart</i>
  </div>

</div>
  </div>

  <div class="left-panel-box">
<div class="left-panel-box-link"></div>

<div class="left-panel-panel color-info">
  <div class="left-panel-content">


    <div class="slide1-secA">

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
<div class="slide1-secB">

<div class="p-back"></div>
<h3 class="cut-topmargin-2">P &nbsp; O &nbsp; R &nbsp; T &nbsp; A &nbsp; L</h3>
  <div class="portal-14">Change<br />Settings</div>
  <div class="portal-14">Current<br />Payouts</div>
  <div class="chart2-house">
  <div class="chart2-hold">
  <div class="chart2-left"> Amazon</div><div class="chart2-right">$7503.67</div>
  <div class="chart2-left"> Tesla</div><div class="chart2-right">$3226.48</div>
  <div class="chart2-left"> Uber</div><div class="chart2-right">$4567.27</div>
  <div class="chart2-left"> Airbnb</div><div class="chart2-right">$8438.87</div>
  <div class="chart2-left"> Apple</div><div class="chart2-right">$3974.64</div>
  <div class="chart2-left"> Ivypro</div><div class="chart2-right">$9344.37</div>
  <div class="chart2-left"> Google</div><div class="chart2-right">$4940.67</div>
  <div class="chart2-left"> Facebook</div><div class="chart2-right">$9474.69</div>
</div>
  </div>
<h3 class="cut-topmargin-3">Avg. Monthly Payout&nbsp;<font class="title-bit">&nbsp;/bit</font></h3>
</div>


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

               <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
               <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
               <hr />
               <div class="obj-click-box">Click</div>
               <div class="obj-click-sam"></div>
               <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
               </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block">
               <div class="block-img"><img class="logo logo1" src={amazon} /></div>
               <div class="block-stats"><div class="bl-com">Amazon.com</div> <br/>
               <div class="bl-yld"> Y: 177B</div><div class="bl-pri">$: <font class="l-teal">75k</font>/bit</div></div></div>
               </div>

               <div class="main-case">


               <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
               <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
               <hr />
               <div class="obj-click-box">Click</div>
               <div class="obj-click-sam"></div>
               <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
               </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>


               <div class="main-block"><div class="block-img"><img class="logo" src={tesla} /></div>
               <div class="block-stats"><div class="bl-com">Tesla</div> <br/>
               <div class="bl-yld"> Y: 11B</div><div class="bl-pri">$: <font class="l-teal">12k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo" src={uber} /></div>
               <div class="block-stats"><div class="bl-com">Uber</div> <br/>
               <div class="bl-yld"> Y: 6.5B</div><div class="bl-pri">$: <font class="l-teal">4.2k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo" src={airbnb} /></div>
               <div class="block-stats"><div class="bl-com">Airbnb</div> <br/>
               <div class="bl-yld"> Y: 2.6B</div><div class="bl-pri">$: <font class="l-teal">1.2k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo2" src={apple} /></div>
               <div class="block-stats"><div class="bl-com">Apple Inc.</div> <br/>
               <div class="bl-yld"> Y: 229B</div><div class="bl-pri">$: <font class="l-teal">235k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo" src={ivyprot} /></div>
               <div class="block-stats"><div class="bl-com">Ivypro Inc.</div> <br/>
               <div class="bl-yld"> Y: 28M</div><div class="bl-pri">$: <font class="l-teal">2.5k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo" src={google} /></div>
               <div class="block-stats"><div class="bl-com">Google</div> <br/>
               <div class="bl-yld"> Y: 32B</div><div class="bl-pri">$: <font class="l-teal">10k</font>/Mbit</div></div></div>
                 </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>


{/* here */}


               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

               <div class="main-block"><div class="block-img"><img class="logo logo3" src={facebook} /></div>
               <div class="block-stats"><div class="bl-com">Facebook</div> <br/>
               <div class="bl-yld"> Y: 27B</div><div class="bl-pri">$: <font class="l-teal">24k</font>/bit</div></div></div>
               </div>

               <div class="main-case">

                                <div class="relative"><div class="fixed"><div class="jump"><div class="j-obj">
                                <div class="j-obj-content-1">Your Payout</div><div class="j-obj-content-2">3256.78 <font class="month-obj2">/Month/bit</font></div>
                                <hr />
                                <div class="obj-click-box">Click</div>
                                <div class="obj-click-sam"></div>
                                <div class="obj-viewc-box">View Chart</div><div class="obj-viewc-box2">Buy Now</div>
                                </div><div class="j-obj-arrow"></div><div class="j-obj-arrow2"></div></div></div></div>

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
