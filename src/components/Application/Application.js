import React from 'react'
import {Container, Grid} from '@material-ui/core';

import './Application.css'

const Application = () => {
    return (
        <div className="application">
            <>
            {/*about me*/}
            <Grid Container className=''></Grid>
                <Grid item className='section_title'>
                    <span></span>
                    <h3>Søknad til Discovery</h3>
                    <div className="application_content">
                    Mitt navn er Simen Waitz, og går 3. klasse Kybernetikk og Robotikk på NTNU. Fredag 8. oktober møtte jeg Silje Øvstetun og co. på stand i forbindelse med UKA etterfulgt av en middag på Samfundet. Der ble jeg kjent med Accenture som bedrift og ikke minst med Discovery-programmet. Bedriftsrepresentantenes genuine interesse for selskapet og Discovery-programmet overbeviste meg om at dette er noe jeg måtte søke til! Men hvorfor burde jeg være en del av programmet:
                    </div>
                    <div className="application_subtitle">Videregående</div> 
                    <div className="application_content">
                    For det første er jeg opptatt av <b>teknologi og innovasjon.</b> Det startet på videregående at jeg ble oppriktig interessert, da jeg blant annet lagde en robot som leverte øl fra kjøleskapet til sofaen. Under samme periode hadde jeg entreprenørskapsfag, og var en del av et prisvinnende team under oslomesterskapet i ungt entreprenørskap. 
                    </div>
                </Grid>
            {/*Erfaringer*/}
            <Grid Container className=''></Grid>

            {/*Egenskaper*/}
            <Grid Container className=''></Grid>
            </>
        </div>
    )
}

export default Application