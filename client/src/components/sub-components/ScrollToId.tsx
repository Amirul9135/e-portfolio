
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState, } from 'react';


const ScrollToId: React.FC = () => {
    let location = useLocation()
    useEffect(() => {
        // Optionally return a cleanup function if needed
        let ts = document.getElementById(location.hash)
        console.log('key', location.hash, ts)
        if (ts) {
            ts.scrollIntoView({ behavior: 'smooth' })
            console.log('scrolling to',location.hash)
        }
        return () => {
        };
    }, []);
    return (
        <React.Fragment>

        </React.Fragment>
    )
}
export default ScrollToId

