import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline from '../Timeline/Timeline'
import profilePicture from "./Profilbilde.jpg"
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import "./Profile.css"
import cv from "./CV.pdf"

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Simen Myhre Waitz</Typography>

            </div>
            
            <figure className='profile_image'>
                <img src={profilePicture} width="100%" alt="Profilbilde" />
            </figure>

            <div className='profile_information'>
                <b> Studie: </b> Kybernetikk og Robotikk
                <br/> 
                <b>LinkedIn: </b> <a href="https://www.linkedin.com/in/simen-myhre-waitz-149224179/"> Simen Myhre Waitz</a>
                <br/>
                <b> Født:</b> 03.08.1999
                <div className ="button_container">
                    <CustomButton text="Last ned CV" href={cv}/>
                </div>
            </div>
        </div>
    );
};

export default Profile