import React, { Component } from 'react';
import './dash3.css';


class dash3 extends Component {

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
      <div className="dash3">


                <div class="dash-header">
                <div class="panel">

                  <div class="left-panel">


                  <div class="dash-brand-tag ">
                  <font class="mid-brand">Angel Investors</font>
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
                    Pitch your idea or business to angel investors from the panel,
                    see if they find interest or reccomend your entity.
                    <div class="p-back back-2"></div>
                  <h3 class="">I N C E N T I V E S</h3>
                  When angels invest early in companies the small amount they put forth
                  can turn a large profit in the long run.
                   <div class="p-back back-3"></div>
                   <h3 class="">P R O F I L E S</h3>
                   Only sophisticated investors are allowed on the platform,
                   so users can rest easy they will not become a future hassle
                   <div class="p-back back-4"></div>
                   <h3 class="">L O S S E S</h3>
                   Should a business fail that has angel investments, it will find itself
                  not be in debt to it's investors, in most cases.

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

        </div>
        </div>

      </div>
    );
  }
}

export default dash3;
