import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
/*import Component from './components/Components'*/
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Application from './components/Application/Application'
import Attest from './components/Attest/Attest'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container className={'top_60'}>
        <Grid container spacing={7}>
          <Grid item
            xs={12}
            sm={12}
            md={4} lg={3}
        /*style={{backgroundColor: "blue"}}*/>
            <Profile />
          </Grid>
          <Grid item xs style={{ background: 'rgb(36, 35, 35)' }}>
            <Application />
            <Attest className='attest' />
          </Grid>
        </Grid>
      </Container>
      <Header />
    </BrowserRouter>
  );
}

export default App;
