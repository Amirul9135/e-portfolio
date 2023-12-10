
import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import { initializeAOS } from '../scripts/AOSInit';
import About from './About';
import WIP from './WIP';
import { useLocation } from 'react-router-dom';


const Mainpage: React.FC = () => { 
    let location = useLocation();
    var currentPath = location.pathname;
    console.log(currentPath)
    if(currentPath === '/' || currentPath === ''){
        currentPath = '/About'
    } 
    if(currentPath == '/About'){
        document.title = "Amirul Asraf" 
    }
    else{
        document.title = "Amirul's" + currentPath.replace('/',' ');
    }
    console.log(currentPath)
    useEffect(() => {
        initializeAOS();
        
        // Optionally return a cleanup function if needed
        return () => { 
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

