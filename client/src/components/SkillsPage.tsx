

import React, { useEffect, useState, } from 'react'; 
import { LinkBtn, LinkBtn2 } from './sub-components/LinkBtn';
import MinCover from './sub-components/MinCover';
import cover from '../images/backgroundbg.png'
import { SkillCategory, SkillList } from '../GLOBAL';
import { SkillItem } from './sub-components/SkillItem';

const SkillsPage: React.FC = () => { 
  const programmingSkill = SkillList.filter(e=>{
    return e.category == SkillCategory.PR
  })
  const frlib = SkillList.filter(e=>{
    return e.category == SkillCategory.FR
  })
  const otherskill = SkillList.filter(e=>{
    return e.category == SkillCategory.OT
  })
  return (
    <React.Fragment> 
      <div className='contents'>

      <div id='programming' className='row'>
          <div className='sect-title'><h2><p>Programming Skills</p><div><i className="fa-regular fa-circle-user glowIcon"><i className="fa-regular fa-circle-user"></i></i></div></h2></div>
          <p className='justify'>Programming skills including programming and markups languages that I have used in my projects</p>
          <div className='row'> 
          {programmingSkill.map((item, index) => (
               <SkillItem skill={item}></SkillItem>
              ))}
          </div>
        </div>
        <div id='Framework' className='row' >

          <div className='sect-title'><h2><p>Familiar Framework & Libraries</p><div><i className="fa-regular fa-circle-question glowIcon"><i className="fa-regular fa-circle-question"></i></i></div></h2></div>
          <p className='justify'>Libraries and Framework I have delved into throughout my learning</p>

          <div className='row'>

          {frlib.map((item, index) => (
               <SkillItem skill={item}></SkillItem>
              ))}
          </div>
        </div>
        <div id='Others' className='row' >
          <div className='sect-title'><h2><p>Other Skills</p><div><i className="fa-solid fa-person-running glowIcon"><i className="fa-solid fa-person-running"></i></i></div></h2></div>

          <p className='justify'>Other related skills to my field of interest including tools, technology, architecture or third party services used</p>
          <div className='row'>
            
          {otherskill.map((item, index) => (
               <SkillItem skill={item}></SkillItem>
              ))}
          </div>
     

        </div>
      </div> 
    </React.Fragment>
  );
};
export default SkillsPage

