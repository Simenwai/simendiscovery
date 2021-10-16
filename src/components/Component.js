import React from "react";

import logo from '../logo.svg';
import Button from "material-ui/Button"

const Component = props => {
    console.log(props.info)
    
    return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>fljds</button>
        <p>
         {props.info}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    )
};

export default Component;