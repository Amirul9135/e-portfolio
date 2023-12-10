
import React, { useEffect, useState, } from 'react'; 
import { Link } from 'react-router-dom';

interface IProps {
    text:string;
    redirectTo:string;
}

const LinkBtn: React.FC<IProps> = ({text:txt, redirectTo:path}) => {
    console.log('path',path)
    return (
        <Link to={path} className='linkbtn'>
              {txt}  
        </Link> 
    );
}

export default LinkBtn;

