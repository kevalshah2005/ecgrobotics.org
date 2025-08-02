import React from 'react'
import '../../../App.css'
import Landing from '../home/landing/Landing'
import Description from './description/Description';
import Favicon from '/assets/logo1533.ico'

function Home() {
    return (
        <>
            <link rel="icon" href={Favicon}></link>
            <Landing />
            <Description />
        </>
    );
}

export default Home;