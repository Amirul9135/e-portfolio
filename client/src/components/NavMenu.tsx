import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss'
import profileSM from '../images/profile-img.png'  
  
const NavMenu: React.FC = () => {  
    return (
        <div className='menu-base'>
            <div className='menu'>
                <div className='menu-icon'>
                    <div className="main-icon fa fa-bars">
                        <span style={{ '--i': 0 } as React.CSSProperties}></span>
                        <span style={{ '--i': 1 } as React.CSSProperties}></span>
                        <span style={{ '--i': 2 } as React.CSSProperties}></span>
                        <span style={{ '--i': 3 } as React.CSSProperties}></span>
                        <span style={{ '--i': 4 } as React.CSSProperties}></span>
                        <span style={{ '--i': 5 } as React.CSSProperties}></span>
                        <span style={{ '--i': 6 } as React.CSSProperties}></span> 
                    </div>
                </div>
                <div className='menu-border'>
                </div>
                <div className='menu-content'>
                    <div className='menu-item conic-anim-border' style={{ '--i': 0,height:200 } as React.CSSProperties}>
                        <div className='mini-profle'>
                            <img src={profileSM} alt="" />
                            Amirul&nbsp;Asraf
                        </div>
                    </div>  
                    <Link to={'/about'}>
                    <div className='menu-item clickable' style={{ '--i': 1 } as React.CSSProperties}>
                        <span>ABOUT</span><i className="fa fa-user-circle-o" aria-hidden="true"><i className="fa fa-user-circle-o" aria-hidden="true"></i></i>
                    </div>  

                    </Link>
                    <Link to={'/background'}>
                    <div className='menu-item clickable' style={{ '--i': 2 } as React.CSSProperties}>
                        <span>BACKGROUND</span><i className="fa fa-sliders" aria-hidden="true"><i className="fa fa-sliders" aria-hidden="true"></i></i>
                    </div> 
                    </Link>
                    <Link to={'/skill'}>
                        
                    <div className='menu-item clickable' style={{ '--i': 3 } as React.CSSProperties} >
                        <span>SKILLS</span><i className="fa fa-code" aria-hidden="true"><i className="fa fa-code" aria-hidden="true"></i></i>
                    </div>
                    </Link>
                    <Link to={'/projects'}>
                        <div className='menu-item clickable' style={{ '--i': 4 } as React.CSSProperties} >
                            <span>PROJECTS</span><i className="fa fa-clone" aria-hidden="true"><i className="fa fa-clone" aria-hidden="true"></i></i>
                        </div>
                    </Link>
                    <div className='menu-item' style={{ '--i': 5 } as React.CSSProperties}>
                        <span>CONTACTS</span>
                        <a href='tel:+601133037857'><i className="fa fa-phone clickable" aria-hidden="true"><i className="fa fa-phone" aria-hidden="true"></i></i></a>
                        <a href='https://wa.me/+601133037857?text=Hello%20Amirul' target='_blank'><i className="fa fa-whatsapp clickable" aria-hidden="true"><i className="fa fa-whatsapp" aria-hidden="true"></i></i></a> 
                       <a href='mailto:amirul.asraf9135@gmail.com'> <i className="fa fa-envelope-o clickable" aria-hidden="true"><i className="fa fa-envelope-o" aria-hidden="true"></i></i></a>
                    </div>
                    <div className='menu-item' style={{ '--i': 6 } as React.CSSProperties}>
                        <span>FIND ME</span>
                        <a href='https://www.linkedin.com/in/amirul-asmf/' target='_blank'><i className="fa fa-linkedin-square clickable" aria-hidden="true"><i className="fa fa-linkedin-square" aria-hidden="true"></i></i></a>
                        <a href='https://github.com/Amirul9135' target='_blank'><i className="fa fa-github-square clickable" aria-hidden="true"><i className="fa fa-github-square" aria-hidden="true"></i></i></a>
                    </div>
                    <div className='menu-item menu-bottom' style={{ '--i': 7 } as React.CSSProperties}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu