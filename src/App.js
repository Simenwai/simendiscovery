import React from 'react';
import {Container, Grid} from '@material-ui/core';

/*import Component from './components/Components'*/
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Application from './components/Application/Application'
import Attest from './components/Attest/Attest'

import './App.css';
var text = "Dette er simen sin app"

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item 
        xs={12} 
        sm={12} 
        md={4} lg={3} 
        /*style={{backgroundColor: "blue"}}*/>
          <Profile />
        </Grid> 
        <Grid item xs style={{backgroundColor: "red"}}>
          <Header/>
          <Application/>
          <Attest/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
