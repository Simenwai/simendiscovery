import { Typography } from '@material-ui/core'
import React from 'react'
/*import CustomTimeline from '../Timeline/Timeline'*/

import './Profile.css'
/*import CustomButton from '../Button/Button'*/
import GetAppIcon from '@mui/icons-material/GetApp';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Simen Myhre Waitz</Typography>

            </div>
            
            <figure className='profile_image'>
                <img src = {require("../../Images/Profilbilde.jpg")} alt=""/>
            </figure>

            <div className='profile_information'>
                Studie:
                <br/>
                LinkedIn:
                <br/>
                Født:
                <br/>
            </div>
        </div>
    );
};

export default Profile