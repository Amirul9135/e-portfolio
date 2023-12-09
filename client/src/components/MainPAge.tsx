
import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import AOS from 'aos';
import { initializeAOS } from '../scripts/AOSInit';
import About from './About';
import WIP from './WIP';
import { useLocation } from 'react-router-dom';


const Mainpage: React.FC = () => { 
    let location = useLocation();
    var currentPath = location.pathname;
    if(currentPath === '/' || currentPath === ''){
        currentPath = '/About'
    } 
    useEffect(() => {
        initializeAOS();
        if(currentPath = '/About'){
            document.title = "Amirul Asraf" 
        }
        else{
            document.title = "Amirul's" + currentPath.replace('/',' ');
        }
        
        // Optionally return a cleanup function if needed
        return () => {
            AOS.refresh();
        };
    }, []); 
    return (
        <React.Fragment>
            {(currentPath === '/About') ? (
                <About />
            ) : (
                <WIP/> 
            )}
            <NavMenu ></NavMenu>
        </React.Fragment>
    );
};
export default Mainpage

