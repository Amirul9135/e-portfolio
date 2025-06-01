
import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import { MAXProjectCount, Skill } from '../../GLOBAL'
import { LinkBtn2 } from './LinkBtn';

interface IProps {
    skill: Skill;
}

const SkillItem: React.FC<IProps> = ({ skill }) => {
    return (
        <React.Fragment>
            <div className='col-md-4 col-sm-6 ' id={skill.name}>

                <div className='skill-item row '>
                    <div className='ico col-1'>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className='text col-11'>
                        <div className='name' style={{ '--p': `${skill.project.length / MAXProjectCount * 70}%` } as React.CSSProperties}>
                            {skill.name}
                        </div>
                        <div className='count'>
                            {`Projects: ${skill.project.length}`}
                        </div>
                    </div>
                    <div className='projects col-12 mt-2'>
                        {skill.project.map((item, index) => (
                            <LinkBtn2 text={item.name} redirectTo={`/Projects#${item.name}`} ></LinkBtn2>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export { SkillItem };

