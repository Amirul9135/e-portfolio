
import React, { useEffect, useState, } from 'react';
import cover from '../images/backgroundbg.png'
import profImg2 from '../images/profile-img2.png'
import GLOBAL from '../GLOBAL';



interface TimeLineItemProp {
    title: string;
    timerange: string;
    content: React.ReactNode;
    type: GLOBAL.EventType;
}

const TimeLineItem: React.FC<TimeLineItemProp> = ({ timerange, content, type, title }) => {
    let ico = type === GLOBAL.EventType.Work ? 'fa-solid fa-briefcase' :
        (type === GLOBAL.EventType.Education) ? 'fa-solid fa-graduation-cap' :
            (type === GLOBAL.EventType.Achievement) ? 'fa-solid fa-medal' :
                (type === GLOBAL.EventType.Project) ? 'fa-solid fa-laptop-code' :
                    (type === GLOBAL.EventType.Event) ? 'fa-solid fa-users-rectangle' : ''
    return (
        <React.Fragment>
            <li className={GLOBAL.EventTypeClass(type)}>
                <div className='timerange'><i className={`${ico} glowIcon`} aria-hidden="true"><i className={`${ico}`} aria-hidden="true"></i></i><p>{timerange}</p></div>
                <div className='sub-header'><h4>{title}</h4></div>
                <div className='desc'>{content}</div>
                <div className='gallery'>
                    <img src={cover} className='zoomable'></img>
                    <img src={profImg2} className='zoomable'></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={profImg2}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={profImg2}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={profImg2}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                    <img src={profImg2}></img>
                    <img src={cover}></img>
                    <img src={cover}></img>
                </div>
            </li>
        </React.Fragment>
    )
}
export default TimeLineItem