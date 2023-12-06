import React, { useState } from 'react';
import './NavMenu.scss'

const NavMenu: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleToggle = (shouldShow:boolean) => {
        setIsVisible(shouldShow);
    };
    return (
        <div className='menu-base'>

            <div className={`menu ${isVisible?'show':''}`} onMouseEnter={()=>handleToggle(true)} onMouseLeave={()=>handleToggle(false)}>
                <div className='icon'>
                    M
                </div>
                
<div className='items-container'>
                    <div className='items'>A</div>
                    <div className='items'>B</div>
                    <div className='items'>C</div>
                    <div className='items'>A</div>
                    <div className='items'>B</div>
                    <div className='items'>C</div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu