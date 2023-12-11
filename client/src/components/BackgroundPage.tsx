
import React, { useEffect, useState, } from 'react'; 
import MinCover from './MinCover';
import cover from '../images/backgroundbg.png' 
import GLOBAL from '../GLOBAL';

interface TimeLineItemProp {
    timerange:string;
    content:React.ReactNode;
    type:GLOBAL.EventType;
}

const TimeLineItem:React.FC<TimeLineItemProp> = ({timerange,content,type}) =>{
    let ico = type === GLOBAL.EventType.Work ? 'fa-solid fa-briefcase':
    (type === GLOBAL.EventType.Education) ? 'fa-solid fa-graduation-cap':
    (type === GLOBAL.EventType.Achievement) ? 'fa-solid fa-medal':
    (type === GLOBAL.EventType.Project) ? 'fa-solid fa-code':
    (type === GLOBAL.EventType.Event) ? 'fa-solid fa-users-rectangle': '' 
    return(   
        <React.Fragment>
            <div className='timerange'><i className={`${ico} glowIcon`} aria-hidden="true"><i className={`${ico}`}  aria-hidden="true"></i></i><p>{timerange}</p></div>
            <div className='desc'>{content}</div>  
        </React.Fragment>
    )
}

const BackgroundPage: React.FC = () => {
    return(
        <React.Fragment>
            <MinCover title='My Backgrounds' coverImg={cover} ></MinCover>
            <div className='contents'>

            <div  className='row'>
          <div className='sect-title'><h2><div><i className="fa-solid fa-person-walking-dashed-line-arrow-right glowIcon"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></i></div></h2></div>
          <div> 

            <p className='justify'>
                This is my journey specifically in education and profession from the latest to the oldest.
            </p>
            <ul className="timeline">
            <li>
                <TimeLineItem timerange='June 2023 - Present' type={GLOBAL.EventType.Work} content={"part time"}></TimeLineItem>
        
            </li>
            <li>
              <div className='timerange'><i className="fa fa-graduation-cap glowIcon" aria-hidden="true"><i className="fa fa-graduation-cap" aria-hidden="true"></i></i><p>Sept 2021 - Present</p></div>
              <p className='desc'>degree utem</p>
            </li>
            <li>
              <div className='timerange'><i className="fa fa-briefcase glowIcon" aria-hidden="true"><i className="fa fa-briefcase" aria-hidden="true"></i></i><p>Sept 2019 - Jan 2020</p></div>
              <p className='desc'>Internship</p>  
            </li> 
            <li>
              <div className='timerange'><i className="fa fa-graduation-cap glowIcon" aria-hidden="true"><i className="fa fa-graduation-cap" aria-hidden="true"></i></i><p>June 2017 - Jan 2020</p></div>
              <p className='desc'>Diploma uthm</p>  
            </li> 
            
            <li>
              <div className='timerange'><i className="fa fa-graduation-cap glowIcon" aria-hidden="true"><i className="fa fa-graduation-cap" aria-hidden="true"></i></i><p>2012 - 2016</p></div>
              <p className='desc'>highschool spm</p>  
            </li> 
          </ul>
          </div>
        </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </React.Fragment>
    );
}

export default BackgroundPage;