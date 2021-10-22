import React from 'react'
import './Attest.css'
import logoBDO from "./BDO_logo.jpg"
import logoDNV from "./DNV_GL_logo.svg.png"
import {Link} from "react-router-dom"

import CustomButton from '../Button/Button'

import dnv from "./DNV.pdf"

const Attest = () => {
    return (
        <div className='attest'>
            <div className="attest_title">
                ATTESTER:
            </div>
            <div className="attest_left">
                <Link to={process.env.PUBLIC_URL + "/BDO.pdf"} target="blank"><img src={logoBDO} width="100px" alt="BDO Logo"/></Link>
            </div>
            <div className="attest_right">
                <a href={dnv} target="blank"><img src={logoDNV} width="130px" alt="DNV Logo"/></a>
            </div>
        </div>
    )
}

export default Attest