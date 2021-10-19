import React from 'react'
import './Attest.css'

import CustomButton from '../Button/Button'

const Attest = () => {
    return (
        <div className='attest'>
            <div className="attest_title">
                ATTESTER:
            </div>
            <div className="attest_left">
                <a href="BDO.pdf"><img src="BDO_logo.jpg" alt="BDO Logo"/></a>
            </div>
            <div className="attest_right">
                <CustomButton text="DNV"></CustomButton>
            </div>
        </div>
    )
}

export default Attest