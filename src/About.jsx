import React from 'react';
import webAbout from '../src/images/New folder/img-3.jpg';
import Common from './Common';


const About = () => {
    return (
        <>
            <Common name=' Welcome to About ' imgsrc={webAbout} visit="/contact" btnname="Contact Now" />
        </>
    )
}

export default About
