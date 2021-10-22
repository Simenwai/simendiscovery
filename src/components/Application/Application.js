import React from 'react'
import {Container, Grid} from '@material-ui/core';

import './Application.css'

import CustomTimeline from '../Timeline/Timeline'

import {
    Timeline, 
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,

} from '@material-ui/lab/';

import { Typography } from '@material-ui/core';

const Application = () => {
    return (
        <div className="application">
            <>
            {/*about me*/}
            <Grid Container className=''></Grid>
                <Grid item className='section_title'>
                    <span></span>
                    <h3>Søknad til Discovery</h3>
                    <Typography className="application_content">
                    Mitt navn er Simen Waitz, og går 3. klasse Kybernetikk og Robotikk på NTNU. Fredag 8. oktober møtte jeg Silje Øvstetun og co. på stand i forbindelse med UKA etterfulgt av en middag på Samfundet. Der ble jeg kjent med Accenture som bedrift og ikke minst med Discovery-programmet. Bedriftsrepresentantenes genuine interesse for selskapet og Discovery-programmet overbeviste meg om at dette er noe jeg måtte søke til! Men hvorfor burde jeg være en del av programmet:
                    </Typography>
                </Grid>
            {/*Erfaringer*/}
            <Grid Container className='Erfaringer'>
                <h3>Erfaringer</h3>
                <CustomTimeline/> 
            </Grid>

            {/*Egenskaper*/}
            <Grid Container className=''></Grid>
                <div className="application_content">
                <h3>Egenskaper</h3>
                <Typography className="application_content"> Egenskaper dere finner hos meg er at jeg er veldig glad i teamarbeid. Jeg er sosial og har opparbeidet gode kommunikasjonsferdigheter blant annet gjennom flere år som revyskuespiller. I tillegg er jeg kreativ og liker å utfordre konsepter ved å stille spørsmål ved ting eller komme med nye innspill. Noe som jeg har fått inntrykk av at er rom for hos dere i Accenture. 
                </Typography>
                <Typography className="application_content">Jeg er engasjert og investert i alt jeg gjør. Det er ikke nok timer i løpet av et døgn til å få tid til alt man vil, og som student er det lett å prioritere vekk seg selv når det trekkes i tråder fra mange kanter. Å ha mulighet til å ha en en-til-en mentor er derfor optimalt for meg. Både for å få tips til struktur i hverdagen, til studieteknikker i ulike fag og generelt det å ha en sparringspartner som vet hva studieløpet omhandler.   
                </Typography>
                <Typography className="application_content">For å konkludere er det mange konsulentselskaper som fremstår like for oss studenter, men etter å ha møtt dere på stand, ha vært på bedpress og på middag under UKA skiller Accenture seg helhetlig ut på grunn av alle interessante og genuine menneskene jeg har møtt. Discovery-programmet virker givende, lærerikt og ikke minst veldig gøy, og det er noe jeg i veldig stor grad ønsker å være en del av. 
                </Typography>
                <Typography className="application_content">Håper på å høre fra dere!</Typography>
                <Typography className="application_content"> <b>Mvh. Simen Waitz</b></Typography>

                </div>
            </>
        </div>
    )
}

export default Application