import React from "react";

import logo from '../logo.svg';
import IconButton from '@material-ui/core/IconButton';

const Component = props => {
    console.log(props.info)
    
    return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {props.info}
        </p>
        <IconButton>fsdlkf</IconButton>
        <button>fjsdnlf</button>
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