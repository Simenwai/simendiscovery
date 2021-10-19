import { Typography } from '@material-ui/core'
import React from 'react'
/*import CustomTimeline from '../Timeline/Timeline'*/

import './Profile.css'
import CustomButton from '../Button/Button'
/*import GetAppIcon from '@mui/icons-material/GetApp';*/

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Simen Myhre Waitz</Typography>

            </div>
            
            <figure className='profile_image'>
                <img src = "Profilbilde.jpg" alt="Profilbilde" />
            </figure>

            <div className='profile_information'>
                Studie:
                <br/>
                LinkedIn:
                <br/>
                Født:
                <div className ="button_container">
                    <CustomButton text={"Last ned CV"} /*icon={GetAppIcon} *//>
                </div>
            </div>
        </div>
    );
};

export default Profile