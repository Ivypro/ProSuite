import React, { Component } from 'react';
import './topbar.css';

import ivyblackximg from '../assets/ivyproLogoLight.png';

import profile from '../assets/profile3.png';

import titleximg from '../assets/i-large.png';

declare var $

class topbar extends Component {

  testB() {
    $('.inc').detach();
  }

  ok() {
    document.getElementById('intro').setAttribute("style", "opacity: 0; transform: scale(.1); left: -200px;");
    // document.getElementById('info').setAttribute("style", "background-color: rgb(57,57,57)");
    $('.color-info').css({"background-color": "rgb(57,57,57)"})
    setTimeout(function(){
      document.getElementById('intro').style.display = "none";
      document.getElementById('m-liner').setAttribute("style", "top: 0px;");
      setTimeout(function(){
        document.getElementById('m-main').setAttribute("style", "display: block;");
      }, 450);
      }, 500);
      setTimeout(function(){
        document.getElementById('enter-icon').style.display = "none";
        document.getElementById('enter-logos').style.display = "block";
    }, 0);
  }

  sela1() {
    document.title = "I V Y P R O :: Market";
    $('.underline').css({"left": "calc(5.5% + 210px)", "width": "90px"});
    $('.anc-t').addClass('trans');
    $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "0"});
    setTimeout(function(){
    $('#DashMain').show();
    $('#Dash2Main, #Dash3Main, #Dash4Main ').hide();
      }, 500);
    setTimeout(function(){
      $('.mid-brand, .left-panel-content, .hold-icon').show();
      $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "1"});
    }, 501);
    $('.acsl-1').removeClass('trans');
  }

  sela2() {
    document.title = "I V Y P R O :: Doublebox";
    $('.underline').css({"left": "calc(5.5% + 299px)", "width": "119px"});
    $('.anc-t').addClass('trans');
    $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "0"});
    setTimeout(function(){
      $('#Dash2Main').show();
      $('#DashMain, #Dash3Main, #Dash4Main').hide();
  }, 500);
  setTimeout(function(){
    $('.mid-brand, .left-panel-content, .hold-icon').show();
    $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "1"});
}, 501);
    $('.acsl-2').removeClass('trans');
  }

  sela3() {
    document.title = "I V Y P R O :: Angels";
    $('.underline').css({"left": "calc(5.5% + 417px)", "width": "88px"});
    $('.anc-t').addClass('trans');
    $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "0"});
      setTimeout(function(){
    $('#Dash3Main').show();
    $('#DashMain, #Dash2Main, #Dash4Main').hide();
    }, 500);
    setTimeout(function(){
      $('.mid-brand, .left-panel-content, .hold-icon').show();
      $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "1"});
  }, 501);
    $('.acsl-3').removeClass('trans');
  }
  sela4() {
      document.title = "I V Y P R O :: Sharktank";
    $('.underline').css({"left": "calc(5.5% + 504px)", "width": "114px"});
    $('.anc-t').addClass('trans');
    $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "0"});
      setTimeout(function(){
    $('#Dash4Main').show();
    $('#DashMain, #Dash2Main, #Dash3Main').hide();
    }, 500);
    setTimeout(function(){
      $('.mid-brand, .left-panel-content, .hold-icon').show();
      $('.mid-brand, .left-panel-content, .hold-icon').css({"opacity": "1"});
  }, 501);
    $('.acsl-4').removeClass('trans');
  }

  // mouseBar() {
  //   setTimeout(function(){
  //     document.getElementById('bar-icon').setAttribute("style", "opacity: 0;");
  //     setTimeout(function(){
  //     document.getElementById('bar-brand').setAttribute("style", "opacity: 1;");
  //     setTimeout(function(){
  //     document.getElementById('bar-icon').setAttribute("style", "opacity: 0;");
  //   }, 10);
  //   setTimeout(function(){
  //   document.getElementById('bar-icon').setAttribute("style", "opacity: 0;");
  // }, 50);
  //     }, 300);
  //   }, 300);
  // }
  // mouseBar2() {
  //   setTimeout(function(){
  //     document.getElementById('bar-brand').setAttribute("style", "opacity: 0;");
  //     setTimeout(function(){
  //     document.getElementById('bar-icon').setAttribute("style", "opacity: 1;");
  //     }, 300);
  //   }, 300);
  // }

  mouseBar3() {
   document.getElementById("bar-icon").setAttribute("style", "opacity: 0;");
         setTimeout(function(){
   document.getElementById("bar-brand").setAttribute("style", "opacity: 1;");
         }, 300);

       }

showMenu() {
// $('.box-menu').toggleClass('hidden');
// Vanilla
var x = document.getElementsByClassName("box-menu");
var i; for (i = 0; i < x.length; i++)
{ x[i].classList.toggle("hidden"); };


}


  render() {
    return (
      <div className="topbar">

        <div class="top-bar">
{/* Active after OK */}
          <font id="enter-logos">
           <div class="brand" id="bar-brand">
             <img src={titleximg} width="157" /><br />
             <div class="rel-suite">
            <b> S &nbsp;U &nbsp;I &nbsp;T &nbsp;E</b>
          </div>
           </div>

           <div class="iconbrand" id="bar-icon">
             <img class="icon-inline" src={ivyblackximg} width="32" /><br />
           </div>
         </font>
{/* Active ata first view */}
         <div class="iconbrand" id="enter-icon">
           <img class="icon-inline" src={ivyblackximg} width="32" /><br />
         </div>

           <div class="buttons" onMouseOver={this.mouseBar3}>
             <div class="item" onClick={this.sela1}>
              Market {/* Invest */}</div>
                <div class="item b-item" onClick={this.sela2}>
                Doublebox </div>
               <div class="item b-item none">
               Engineering </div>
               <div class="item b-item none">
               Courselab </div>
               <div class="item b-item" onClick={this.sela3}>
                Angels {/* Ideas (Angel Levels/Stages filter) */}</div>
               <div class="item b-item" onClick={this.sela4}>
                Sharktank {/* Pitchdecks */} </div>
                <div class="item b-item none">
                Cofounder - DUMMY IDS & remove DOM {/* (Equity ?Fiverr) Find workers for equity, B. Planners, Programmers */}</div>
   {/* IVYPRO IS VERY EASY TO USE, WE MANAGE ALL YOUR ASSETS AND TAKE A SMALL FEE */}

{/* Profile: contains thing may be used more than once; (pitchdeck)(photo) */}
{/* (pitchdeck) Dark grey modal for multi-tab content */}
             </div>

<font onClick={this.showMenu}>
             <div class="profile-house">
               <div class="profile-sn">professor-131</div>

           <div class="profile-circ">
             <img class="profile-img" src={profile} />
           </div>
             </div>
             </font>

             {/* HIGH ANIMATION: REPLACE TOGGLE WITH CLONE, AND ONEWAY OUTER  */}

<div class="underline-top"></div>
<div class="underline"></div>

             <span class="none">Courselab:

                Business & Investing: Holding Interest
                Business & Investing: Finanancial Analytics
                Business & Investing: Executive Practises
                Literature: Publishing & UX Writing
                Design: Graphic Art & Font Styling
                Design: Digital Architecture
                Computer Science: Python & Machine Learning (AI)
                Computer Science: Angular to MongoDB
                Computer Science: React to PHP/MySQL
                Engineering: Advanced Robotics
                Engineering: Product Prototyping
                              </span>
           <span class="none">Cofounder Remote</span>
           <span class="none"> Loader: Charcoal Background on Large-Logo - Fadein </span>

        </div>

<div class="box-menu hidden" onClick={this.showMenu}>
  <hr class="divi" />
<div class="divi-sel">Profile</div>
<hr class="divi" />
<div class="divi-sel">Settings</div>
<hr class="divi" />
<div class="divi-sel">Accounts</div>
<hr class="divi" />
<div class="divi-sel">Log Out</div>
<hr class="divi" />
</div>

        {/* ------------------- TOP MODAL ------------------ */}
        {/* REVIEW THIN HEIGHT = DOWN ARROW REVIEW */}
        <div class="modal-intro" id="intro">

        <div class="L-spacer"></div>
          <img src={titleximg} width="357" />
        <div class="M-spacer"></div>

        <div class="modal-intro-box">
        <span class="H-A" onClick={this.sela1}><i class="fas fa-arrow-right acsl-1 anc-t">&nbsp;&nbsp;</i> <i class="fas fa-shopping-cart grey">&nbsp;&nbsp;</i>Market </span><div class="H-spacer"></div>&bull; &nbsp; Investors find companies to buy equity from and receive a monthly share of the profits.
        <div class="box-spacer"></div>
        <span class="H-A" onClick={this.sela2}><i class="fas fa-arrow-right acsl-2 anc-t trans">&nbsp;&nbsp;</i> <i class="fas fa-chart-line grey">&nbsp;&nbsp;</i>Doublebox </span><div class="H-spacer"></div>&bull; &nbsp; Investors receive [50% profit] from a company until they <i>DOUBLE</i> their <i>MONEY</i>.
        <div class="box-spacer"></div>
        <span class="H-A" onClick={this.sela3}><i class="fas fa-arrow-right acsl-3 anc-t trans">&nbsp;&nbsp;</i> <i class="fab fa-adn grey">&nbsp;&nbsp;</i>Angels </span><div class="H-spacer"></div>&bull; &nbsp; Fundraisers present ideas to angel investors for seed investments of up to $1 Million.
        {/* REVIEW - ANGELS for Ideas and MVPs */}
        <div class="box-spacer"></div>
        <span class="H-A" onClick={this.sela4}><i class="fas fa-arrow-right acsl-4 anc-t trans">&nbsp;&nbsp;</i> <i class="fas fa-comment-dollar grey">&nbsp;&nbsp;</i>Sharktank </span><div class="H-spacer"></div>&bull; &nbsp; Fundraisers present company Business Plans for investors to bid up to $1 Billion.
        </div>
<div class="N-spacer"></div>
        <div class="box-bottom">
        <div class="box-btn1">&nbsp;&nbsp;Login&nbsp;&nbsp;</div><div onClick={this.ok} class="box-btn2">&nbsp;&nbsp; &nbsp;OK&nbsp; &nbsp;&nbsp;</div>
        </div>

                </div>



      </div>
    );
  }
}

export default topbar;
