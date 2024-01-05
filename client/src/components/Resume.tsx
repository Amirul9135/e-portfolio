

import React, { useEffect, useState, } from 'react';
import profImg2 from '../images/profile-img2.png' 
import { LinkBtn, LinkBtn2 } from './sub-components/LinkBtn'; 

const Resume: React.FC = () => {  
  return (
    <React.Fragment>
        <embed src= "/download/resume" width= "500" height= "375" type="application/pdf"></embed>
    </React.Fragment>
  );
};
export default Resume

