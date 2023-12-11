
import React, { useEffect, useState, } from 'react'; 
import { Link } from 'react-router-dom';

interface IProps {
    text:string;
    redirectTo:string;
}

const LinkBtn: React.FC<IProps> = ({text:txt, redirectTo:path}) => { 
    return (
        <Link to={path} className='linkbtn'>
             <div className='lbcontainer'><button className='glowing-btn'><span className='glowing-txt'>{txt}</span></button>   </div>
        </Link> 
    );
}

const LinkBtn2: React.FC<IProps> = ({text:txt, redirectTo:path}) => { 
    return (
        <Link to={path} className='linkbtn2'>
              <button style={{"--clr":"#0FF0FC"} as React.CSSProperties}><span>{txt}</span><i></i></button>
        </Link> 
    );
}

export {LinkBtn,LinkBtn2};

