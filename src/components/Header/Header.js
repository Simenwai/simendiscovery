import React from 'react'

import './Header.css'

import { Typography } from '@material-ui/core';

const Header = () => {
    return (
        <div className = 'header'>
            <b>Created by:</b> Simen Waitz
            <b>Motivated by:</b> Ole Andreassen
            <b>Created with:</b> React <b>Hosted by:</b> AWS
            <b>Source:</b> <a href="https://github.com/Simenwai/simendiscovery"> GitHub</a>
        </div>
    )
}

export default Header