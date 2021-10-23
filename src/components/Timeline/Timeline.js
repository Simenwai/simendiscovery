import React from 'react'
import './Timeline.css'
import {
    Timeline, 
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,

} from '@material-ui/lab/';

import WorkIcon from '@material-ui/icons/Work';
import { Typography } from '@material-ui/core';

const CustomTimeline = ({title, icon, children}) => {
    return (

    <Timeline className='timeline'>
        <TimelineItem>

            <TimelineSeparator>
            <TimelineDot className='timeline_dot_header'/>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><b>Videregående</b> (2015-2018)
            <Typography className='timeline_content'> For det første er jeg opptatt av <b>teknologi og innovasjon.</b> Det startet på videregående at jeg ble oppriktig interessert, da jeg blant annet lagde en robot som leverte øl fra kjøleskapet til sofaen. Under samme periode hadde jeg entreprenørskapsfag, og var en del av et prisvinnende team under oslomesterskapet i ungt entreprenørskap. </Typography>
            </TimelineContent>

        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot className='timeline_dot_header'/>
            <TimelineConnector />
            </TimelineSeparator>
                <TimelineContent><b>Friår</b> (2018-2019)
                   <Typography className='timeline_content'> Etter videregående hadde jeg et <b>ettårig internship i BDO AS,</b> noe som har gitt meg en verdifull erfaring i næringslivet. Til tross for at jeg hovedsakelig jobbet i HR-avdelingen fikk jeg likevel et innblikk i store deler av selskapets sektorer. Det inntrykket jeg fikk av konsulentvirksomheten appellerte til meg og satt rammene for hvordan jeg ønsker å jobbe som ingeniør.  Likevel er det mange aspekter ved det å jobbe som konsulent som er ukjent, og jeg søker derfor innsikt i deres hverdag som konsulenter. Discovery-programmet er den rette arenaen for akkurat dette. </Typography>
                </TimelineContent>

        </TimelineItem>

        <TimelineItem>

            <TimelineSeparator>
            <TimelineDot className='timeline_dot_header'/>
            <TimelineConnector />
            </TimelineSeparator>
                <TimelineContent><b>Studie</b> (2019 -)
                <Typography className='timeline_content'>Som <b>bedriftssjef i Teknologiporten,</b> NTNUs største multidisiplinære bedriftskontakt, har jeg det siste året måtte være ekstremt løsningsorientert og omstillingsdyktig grunnet omstendighetene på grunn av korona. Jeg har <b>jobbet tett sammen med DNV</b> som har gitt meg solid erfaring innen kundebehandling og service, noe som kan komme godt med som konsulent ute hos kunden. Samtidig har jeg lært opp og ledet en gruppe med medstudenter uten noe erfaring innen vår kjernevirksomhet. I stillingen har jeg utviklet meg både som leder og i teamarbeid.</Typography>
                <Typography className='timeline_content'>Sommeren 2022 skal jeg være en del av <b>ABB sitt sommerprosjekt,</b> hvor jeg skal jobbe med analyse og regulering i tverrsnittet mellom OT og IT. Analyseprogrammer er noe jeg ønsker å jobbe med etter endt studieløp, og det er spennende å få muligheten til å jobbe for en av de ledende leverandørene innen digital teknologi. Mitt mål er å opparbeide en erfaring og innsikt i flere selskaper og områder før endt studie. Kombinasjonen av denne sommerjobben sammen med Discovery er en gylden mulighet til å oppnå akkurat dette!</Typography>
                </TimelineContent>

        </TimelineItem>


    </Timeline>
    )
}

export default CustomTimeline


/*export const CustomTimelineSeperator = () => {
    <TimelineSeparator className={'seperator_padding'}>
        <TimelineDot className={'timeline_dot'}/>
        <TimelineConnector/>
    </TimelineSeparator>    
}
*/