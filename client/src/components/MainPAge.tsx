
import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import AOS from 'aos';
import { initializeAOS } from '../scripts/AOSInit';
import About from './About';
import WIP from './WIP';
import { useLocation } from 'react-router-dom';


const Mainpage: React.FC = () => {
    useEffect(() => {
        initializeAOS();

        // Optionally return a cleanup function if needed
        return () => {
            AOS.refresh();
        };
    }, []); 
    let location = useLocation();
    var currentPath = location.pathname;
    console.log(currentPath)
    return (
        <React.Fragment>
            {currentPath === '/about' ? (
                <About />
            ) : (
                <WIP/> 
            )}
            <NavMenu ></NavMenu>
        </React.Fragment>
    );
};
export default Mainpage

