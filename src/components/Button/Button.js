import React from 'react'
import {Button } from '@material-ui/core'
import './Button.css'
const CustomButton = (props) => {
    return (
        <Button className='custom_btn' href={props.href} target="_blank">
            <span className='btn_text' >{props.text}</span>
        </Button>
    )
}
export default CustomButton