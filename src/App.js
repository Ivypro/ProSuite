import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Topbar from "./topbar/topbar.js";
import Dash from "./dash/dash.js";
import Inc from "./inc/inc.js";

class App extends Component {
  render() {
    return (
      <div className="App">

          <Topbar />
          <Dash />
          <Inc />

{/* Demo Code

          <img src={logo} className="App-logo" alt="logo" />

            Edit react code with **language-babel** and add to atom.



        //---For Errors on undefined---//
        constructor(props) {
          super(props);
          this.x1inc = this.x1inc.bind(this);
        }

        // Replace Class
        x.className.replace(' active ', ' ')

        // Classlist Toggle
        x.classList.toggle("mystyle");
*/}
      </div>
    );
  }
}

export default App;
