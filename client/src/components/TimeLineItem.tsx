
import React, { useEffect, useState, } from 'react';
import GLOBAL from '../GLOBAL';
import { LinkBtn } from './LinkBtn';



interface TimeLineItemProp {
    title: string;
    timerange: string;
    content?: React.ReactNode;
    type: GLOBAL.EventType;
    images?: string[]
    points?: string[]
    links?: { text: string, url: string }[]
}

const TimeLineItem: React.FC<TimeLineItemProp> = ({ timerange, content, images, type, title, points, links }) => {
    
    const showImg = (e: HTMLImageElement) => { 
        let imgmodal = document.getElementById('img-modal');
        if (imgmodal) {
            imgmodal.style.display = 'block'

            imgmodal.getElementsByTagName('img')[0].src = e.src
        }
    }
    
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
                <div className='desc'>{content}
                    {points && (
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    )}

                    {links && (
                        <ul>
                            {links.map((item, index) => (
                                <LinkBtn key={index} text={item.text} redirectTo={item.url} />
                            ))}
                        </ul>
                    )}
                </div>
                <div className='gallery'>
                    {

                        (images) ? images.map((url, index) => (
                            <img onClick={(e)=>{showImg(e.target as HTMLImageElement)}}
                             key={index} src={url} className="zoomable conic-anim-border" alt={`Image ${index + 1}`} />
                        )) : ''

                    }
                </div>
            </li>
        </React.Fragment>
    )
}
export default TimeLineItem