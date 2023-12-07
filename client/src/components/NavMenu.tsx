import React, { useState } from 'react';
import './NavMenu.scss'  

const NavMenu: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleToggle = (shouldShow: boolean) => {
        setIsVisible(shouldShow);
    }; 
    return (
        <div className='menu-base'>
            <div className='menu'>  
                <div className='menu-icon'>
                    <div  className="main-icon fa fa-bars"> 
                    <span  style={{ '--i': 0 } as React.CSSProperties}></span>
                    <span  style={{ '--i': 1 } as React.CSSProperties}></span>
                    <span  style={{ '--i': 2 } as React.CSSProperties}></span>
                    <span  style={{ '--i': 3 } as React.CSSProperties}></span>
                    <span  style={{ '--i': 4 } as React.CSSProperties}></span>
                    </div> 
                </div>
                <div className='menu-border'>
                </div>
                <div className='menu-content'>
                    <div className='menu-item'>
                    <i className="fa fa-home" aria-hidden="true"><i className="fa fa-home" aria-hidden="true"></i></i>WELCOME
                    </div>
                    <div className='menu-item'>
                    <i className="fa fa-user" aria-hidden="true"><i className="fa fa-user" aria-hidden="true"></i></i>ABOUT
                    </div>
                    <div className='menu-item'>
                    <i className="fa fa-sliders" aria-hidden="true"><i className="fa fa-sliders" aria-hidden="true"></i></i>HISTORY
                    </div>
                    <div className='menu-item'>
                    <i className="fa fa-code" aria-hidden="true"><i className="fa fa-code" aria-hidden="true"></i></i>SKILLS
                    </div>
                    <div className='menu-item'>
                    <i className="fa fa-clone" aria-hidden="true"><i className="fa fa-clone" aria-hidden="true"></i></i>PROJECTS
                    </div>
                   
                </div> 
            </div>
        </div>
    )
}

export default NavMenu