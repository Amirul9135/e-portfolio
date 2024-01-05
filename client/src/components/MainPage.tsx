
import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import About from './About';
import WIP from './WIP';
import { useLocation } from 'react-router-dom';
import BackgroundPage from './BackgroundPage';
import ImgModal from './sub-components/ImgModal';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import Resume from './Resume';


const MainPage: React.FC = () => {
    let location = useLocation();
    var currentPath = location.pathname;
    console.log(currentPath)
    if (currentPath === '/' || currentPath === '') {
        currentPath = '/About'
    }
    if (currentPath == '/About') {
        document.title = "Amirul Asraf"
    }
    else {
        document.title = "Amirul's" + currentPath.replace('/', ' ');
    }
    console.log(currentPath)
    useEffect(() => {

        // Optionally return a cleanup function if needed
        return () => {
        };
    }, []);
    return (
        <React.Fragment>
            {(currentPath === '/About') ? (
                <About />
            ) : (currentPath === '/Backgrounds') ?
                <BackgroundPage />
                : (currentPath === '/Skills') ?
                    <SkillsPage />
                    : (currentPath === '/Projects') ?
                        <ProjectsPage />
                        : (currentPath === '/Resume') ?
                            <Resume />
                            : (
                                <WIP />
                            )}
            <NavMenu ></NavMenu>
            <ImgModal></ImgModal>
        </React.Fragment>
    );
};
export default MainPage

