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
                <i className="fa fa-bars"></i>
                </div>
                <div className='menu-border'>

                </div>
                <div className='menu-content'>
                    <div className='link'>
                        Satu
                    </div>
                    <div className='link'>
                        Satu
                    </div>
                    <div className='link'>
                        Satu
                    </div>
                    <div className='link'>
                        Satu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu