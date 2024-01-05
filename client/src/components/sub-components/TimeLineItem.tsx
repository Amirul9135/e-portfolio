
import React, { useEffect, useState, } from 'react'; 
import { LinkBtn, LinkBtn2 } from './LinkBtn';
import {EventType,EventTypeClass,Skills} from '../../GLOBAL'


interface TimeLineItemProp {
    title: string;
    timerange: string;
    content?: React.ReactNode;
    type: EventType;
    images?: string[]
    points?: string[]
    links?: { text: string, url: string }[],
    skills?: Skills[],

    
}

const TimeLineItem: React.FC<TimeLineItemProp> = ({ timerange, content, images, type, title, points, links,skills }) => {
    
    const showImg = (e: HTMLImageElement) => { 
        let imgmodal = document.getElementById('img-modal');
        if (imgmodal) {
            imgmodal.style.display = 'block'

            imgmodal.getElementsByTagName('img')[0].src = e.src
        }
    }
    
    let ico = type === EventType.Work ? 'fa-solid fa-briefcase' :
        (type === EventType.Education) ? 'fa-solid fa-graduation-cap' :
            (type === EventType.Achievement) ? 'fa-solid fa-medal' :
                (type === EventType.Project) ? 'fa-solid fa-laptop-code' :
                    (type === EventType.Event) ? 'fa-solid fa-users-rectangle' : ''
    return (
        <React.Fragment>
            <li className={EventTypeClass(type)}>
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
                        <div  className='links'>
                            {links.map((item, index) => (
                                <LinkBtn key={index} text={item.text} redirectTo={item.url} />
                            ))}
                        </div>
                    )}
                    {skills && (
                        <div className='skills'> 
                            {skills.map((item, index) => (
                                <LinkBtn2 key={index} text={item} redirectTo={`Skills#${item}`} />
                            ))}
                        </div>
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