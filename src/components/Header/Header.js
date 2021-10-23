import React from 'react'

import './Header.css'

import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <div className = 'header'>
            <p>Created by Simen Waitz</p>
            <p>Created with React</p>
            <p>Hosted by AWS</p>
            <p>Source: <a href="https://github.com/Simenwai/simendiscovery"> GitHub</a></p>
        </div>
    )
}

export default Header