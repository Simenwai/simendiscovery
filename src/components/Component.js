import React from "react";


const Component = props => {
    console.log(props.info)
    
    return (
    
    <div className="App">
      <header className="App-header">
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