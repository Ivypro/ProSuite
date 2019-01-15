import React, { Component } from 'react';
import './inc.css';

import ivyiconximg from '../assets/ivyproLogo.png';

declare var test2

declare var $

class inc extends Component {

testB() {
  $('.inc').detach();
}

  x1inc() {
    var x = document.getElementsByClassName("inc");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "display: none"); };
  }


  x2inc() {
    var x = document.getElementsByClassName("inc-box");
    var i; for (i = 0; i < x.length; i++)
    { x[i].className += " inc-box-out"; };
    setTimeout(function(){
    var x = document.getElementsByClassName("right-panel");
    var i; for (i = 0; i < x.length; i++)
    { x[i].setAttribute("style", "height: calc(100% - 0px);"); };
    document.getElementById('intro').className += " full";
  }, 0);
  }


  render() {

  const notes = {display: 'none'};
  const image = {backgroundImage: '{ivyiconximg}'};
  const tester = {backgroundColor: 'red'};

    return (
      <div className="inc">

        <div class="inc-box" style={image}>
          <div class="brand-box">
            <a class="no-dec white" href="http://www.ivypro.com" target="_new">
          <font class="ivypro-text">IVYPRO</font>
          <font class="eng-text">Engineering</font>
          <font class="eng-text2">Prototyping</font>
          </a>
        </div>
          <div class="x-inc" onClick={this.x2inc}> <i class="fas fa-times"></i> </div>

          <span style={notes}>

               Ivypro reserves the right to build a similar product in the same industry that serves the same purpose
               for life, our product cannot however function exactly in the same manner as your potential product.
               We reserve the right to build a product in the same INDUSTRY, but CANNOT be considered a similar
               product for at least 3 years.
               We have a live list of product ideas in our database, we reserve the right to these Ideas
               at all times regardless of learned knowlege from an external party.
               These ideas are dated live and stored in a private github repo.

                   TODO: Loop Animation (Engineering -> xFinancing +Prototyping)

                            NOTE: IVYPRO ENGINEERING ::
                    Keywords: We create an E-Team for your "idea"
                    B.services: Engineering -> Prototyping
          </span>
          <button class="none" onClick={()=>{ test2(); }}>Jquery Tester (X)</button>
          <button class="none" onClick={this.testB}>Jquery Tester (B)</button>
        </div>


      </div>
    );
  }
}

export default inc;
