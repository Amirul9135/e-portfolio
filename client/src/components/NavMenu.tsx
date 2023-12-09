import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss'
import profileSM from '../images/profile-img.png'  
  
const NavMenu: React.FC = () => {  
    
  const [visible, setVisible] = useState<boolean>(false);
  const toggleMenu = (val:boolean)=>{
    setVisible(val)
  }
  var start = {x:0, y:0};
  function touchStart(event:TouchEvent) {
    start.x = event.changedTouches[0].pageX;
    start.y = event.changedTouches[0].pageY;
  }
  
  function touchEnd(event:TouchEvent) {
    let offset = {x:0, y:0};
  
    offset.x = start.x - event.changedTouches[0].pageX;
    offset.y = start.y - event.changedTouches[0].pageY;
    console.log(offset.x)
    let sensitivityThreshold = window.innerWidth * 0.5; 
    console.log(sensitivityThreshold)
    //kanan negative
    if(offset.x > 0){
        if(offset.x > sensitivityThreshold){
            document.getElementById('menu')?.classList.remove('menu-show');
        }
    }
    else{
        if(offset.x < -(sensitivityThreshold)){
            document.getElementById('menu')?.classList.add('menu-show');
        }
    } 
  }
  document.addEventListener('touchstart',touchStart);
  document.addEventListener('touchend',touchEnd)
    return (
        <div className='menu-base'>
            <div id='menu' className={`menu ${visible? 'menu-show':''} `}>
                <div className='menu-overlay' onClick={()=>toggleMenu(false)}>

                </div>
                <div className='menu-icon'  onMouseEnter={()=>toggleMenu(true)} onClick={()=>toggleMenu(true)}>
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
                <div className='menu-border' onMouseEnter={()=>toggleMenu(false)} onClick={()=>toggleMenu(false)}>
                </div>
                <div className='menu-content'>
                    <div className='menu-item' style={{ '--i': 0,height:200 } as React.CSSProperties}>
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