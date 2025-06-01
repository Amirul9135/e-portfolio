
import React, { useEffect, useState, } from 'react'; 
import {EventType,PROJECTNAME,PROJECTSS} from '../GLOBAL'
import SortBtn from './sub-components/SortBtn';
import ToggleBtn from './sub-components/ToggleBtn';
import TimeLineItem from './sub-components/TimeLineItem';

import EAASE_MTECH from '../images/EAASE_MTech.jpeg'
import EAASE_IOT from '../images/EAASE_IOT.png'
import FUKUROAC from '../images/FUKURO_AC.png'
import FUKUROENV from '../images/FUKURO_ENV.png'
import FUKURODemo from '../images/FUKUROdemo.jpg'
import BDOCMQ from '../images/BDOCMQ.png'
import LFBD1 from '../images/LFBD1.png'
import LFBD2 from '../images/LFBD2.png'
import LFBD3 from '../images/LFBD3.png'
import LFBD4 from '../images/LFBD4.png'
import SSBoard1 from '../images/SSBoard1.jpg'
import SSBoard2 from '../images/SSBoard2.jpg'
import formaid1 from '../images/formaid1.png'
import formaid2 from '../images/formaid2.png'
import formaid3 from '../images/formaid3.png'
import HomeDecor1 from '../images/HomeDecor1.png'
import HomeDecor2 from '../images/HomeDecor2.png'
import HomeDecor3 from '../images/HomeDecor3.png'
import HomeDecor4 from '../images/HomeDecor4.png'
import sprp1 from '../images/sprp1.png'
import sprp2 from '../images/sprp2.png'
import sprp3 from '../images/sprp3.png'
import sprp4 from '../images/sprp4.png'
import sprp5 from '../images/sprp5.png'
import ScrollToId from './sub-components/ScrollToId';
import { useLocation } from 'react-router-dom';

const ProjectsPage: React.FC = () => {  
  const timelineItems = [     
    {
      title: "SPRP (Sistem Penempahan Ruang Pembelajaran)",
      timerange: 'Nov 2018', date: new Date(2018, 10, 1), type: EventType.Project,
      content: 'This project was my very first information system which involves integration with a proper database. The objective of the project was to provide an online solution for students at UTHM to book available rooms which was previously done manually on paper.',
      skills: PROJECTSS.SPRP,
      images: [
        sprp1,
        sprp2,
        sprp3,
        sprp4,
        sprp5,
      ],
      id:PROJECTNAME.SPRP
    },
    {
      title: "Homes Décor",
      timerange: 'May 2019', date: new Date(2019, 4, 1), type: EventType.Project,
      content: 'Homes Décor is an android mobile application developed to assist interior designers or even housewives who can benefits from the convenience of Augmented Reality in designing room, houses or offices. The main idea is to allow our user to move around objects, specifically furniture without having to move it physically. Along with the furniture customizations feature, it was expected to ease user not only in designing their furniture arrangements but also makes a better-informed decision to purchase the right furniture for them.',
      skills: PROJECTSS.HomeDecor,
      images:[
        HomeDecor1,
        HomeDecor2,
        HomeDecor3,
        HomeDecor4
      ],
      id:PROJECTNAME.HomeDecor
    },
    {
      title: "Formaid",
      timerange: 'Sept 2019', date: new Date(2019, 8, 10), type: EventType.Project,
      content: 'Formaid is a web application which allows users to view available maids and schedule a task for them. Although I’m not directly involved in the system development itself, as my first task during my internship at SSHightech Sdn. Bhd. I was tasked to create and design the landing page with a contact feature while also creating an introduction video for the system. ',
      skills:PROJECTSS.Formaid,
      links:[
        {text:'Video Tour',url:'https://www.youtube.com/watch?v=-OnxvFVfgdc&ab_channel=ForseeeDigitalSignage'}
      ],
      images:[
        formaid1,
        formaid2,
        formaid3
      ],
      id:PROJECTNAME.Formaid

    },
    {
      title: "SS Board",
      timerange: 'Sept 2019', date: new Date(2019, 8, 30), type: EventType.Project,
      content: 'The SS Board is arduino (Node MCU ESP 12-E) board  configured to operates game arcades which uses token system. By the time I joined the team the system was already completed. My role was to install components on the boards and configure the board to hardcode the serial number',
      images:[
        SSBoard1,
        SSBoard2
      ],
      id:PROJECTNAME.SSBoard
    },
    {
      title: "LifeBuddy",
      timerange: 'Oct 2019', date: new Date(2019, 9, 1), type: EventType.Project,
      content: ' Life Buddy was a web application where users can reach home related services such as air conditioner maintenance, cleaning, plumbing etc. It was the first project which I participated in from the very beginning phase during my internship at SSHightech.',
      images:[
        LFBD1,
        LFBD2,
        LFBD3,
        LFBD4
      ],
      skills: PROJECTSS.LifeBuddy,
      id:PROJECTNAME.LifeBuddy
    },
    {
      title: "E-Namecard",
      timerange: 'Dec 2019', date: new Date(2019, 11, 1), type: EventType.Project,
      content: 'As the name suggest, this project is simply and electronic name card which is a web page hosted and made accessible via QR codes. It was my last project during my internship at SS Hightech Sdn. Bhd.',
      skills:PROJECTSS.ENamecard,
      links:[
        {text:'Namecard',url:'http://lookhere.sshitechss.com/e-namecard/Isaac/'},
        {text:'Namecard',url:'http://lookhere.sshitechss.com/e-namecard/Jason/'},
        {text:'Namecard',url:'http://lookhere.sshitechss.com/e-namecard/Jessie/'},
        {text:'Namecard',url:'http://lookhere.sshitechss.com/e-namecard/Ken/'}
      ],
      id:PROJECTNAME.ENamecard
    },
    {
      title: "BDO CMQ",
      timerange: 'Jan 2022', date: new Date(2022, 0, 1), type: EventType.Project,
      content: 'BDO_CMQ is acronyms of Black Desert Online Central Market Queue which is a very simple system I developed by myself for myself. It simply query the data of what being listed in the online game central market via its API which then is forwarded to me via Discord by the Discord bot integrated with the system. Hobby aside, I also developed this system in order to explore and learn about NodeJs and API by implementing it. The application was deployed in a free Heroku hosting until October 2022 before it was closed down due to changes by Heroku which stops their free tier hosting.',
      links:[
        {text:'BDOCMQ-GitHub',url:'https://github.com/Amirul9135/BDO_CMQ'}
      ],
      skills: PROJECTSS.BDOCMQ,
      images:[BDOCMQ],
      id:PROJECTNAME.BDOCMQ
    },
    {
      title: "SPMS (Student Performance Monitoring System)",
      timerange: 'Jan 2023', date: new Date(2023, 0, 1), type: EventType.Project,
      content: 'SPMS is a web-based system developed by my team for our Workshop 2 course. It is an online learning platform specializing in assessment and performance monitoring.',
      points:[
        'Question Bank feature to allows teacher to share a big centralized question bank from which they can form their own question sets to be included in their assessment',
        'Assessment management to allows teacher to conduct and shcedule assessments assigned to their students',
        'Assessment session equipped with detection feature which allow teachers to monitor their students remotely in realtime with indicators that let the teachers know if the student switch tabs or windows',
        'Analytics of the results which forms the performance report which is also grouped to schools or geographical area to provide better insights'
      ],
      links:[
        {text:'SPMS',url:'http://www.amirulasraf.com/spms/'},
        {text:'SPMS-GitHub',url:'https://github.com/Amirul9135/SPMS_2.0'},
      ],
      skills:PROJECTSS.SPMS,
      id:PROJECTNAME.SPMS
    },
    {
      title: "HIS (Hospital Information System)",
      timerange: 'Jan 2023', date: new Date(2023, 0, 11), type: EventType.Project,
      content: 'The HIS was developed as our coursework project. The system consist of the following features:',
      points:[
        'Patient Management',
        'Queue Management utilizing WebSocket to ensure realtime update of the queue',
        'Consultation Recording which uses ICD10 (International Code of Disease Version 10) and MDC (Malaysia Drug Codes) to standardize the terms used during doctor-patient consultation session',
        "EMR (Electronic Medical Record) which provide complete history of patients' past disease as per recorded in the system"
      ],
      links:[
        {text:'HIS-GitHub',url:'https://github.com/Amirul9135/stse_his'},
        {text:'Demo Video',url:'https://youtu.be/7VlNGMhSL-8?t=157'}
      ],
      skills: PROJECTSS.HIS,
      id:PROJECTNAME.HIS
    },
    {
      title: "FUKURO (Fundamental Kernel Utilization Realtime Overseer)",
      timerange: 'Sept 2023', date: new Date(2023, 8, 1), type: EventType.Project,
      content: 'FUKURO was my biggest solo project which I completed for my PSM (Project Sarjana Muda) during my degree. The main idea is to provide solution to monitor & manage hosts/server remotely via mobile application. FUKURO consist of 3 main components which is:',
      points:[
        'Mobile Application as the main GUI which communicate with the server via REST API and partially WebSocket for realtime features',
        'Agent Application which is the embedded application designed to run on the background of the monitored hosts to continously extract resource usage and submit to the server via WebScoket connection. It also perform authorized command as the system proxy when demanded by user',
        'Server Application which is the centralized controls of the system. It facilitate the communication between users and agents via both HTTP and WebScoket. Integrated with MySql database for storage, it is the main brain of the system'
      ],
      links:[
        {text:'Manual',url:'http://amirulasraf.com/fukuro/'},
        {text:'Mobile-Repository',url:'https://github.com/Amirul9135/fukuro_mobile'},
        {text:'Agent-Repository',url:'https://github.com/Amirul9135/FUKURO_Agent'},
        {text:'Server-Repository',url:'https://github.com/Amirul9135/FUKURO_WSS'}
      ]
      ,
      images:[
        FUKURODemo,
        FUKUROENV,
        FUKUROAC
      ],
      skills: PROJECTSS.FUKURO,
      id:PROJECTNAME.FUKURO
    },
    {
      title: "SMKB",
      timerange: 'Feb 2024', date: new Date(2024, 1, 1), type: EventType.Project,
      content: 'Sistem Maklumat Kewangan Bersepadu is a web-based financial management system. As part-time programmer, I was tasked to develop the account payable module from back-end to front-end which involves:',
      points:[
        'Web interface design',
        'ASP Web Method & Web API',
        'Integration with Microsoft SQL Server'
      ],
      links:[ ],
      skills:PROJECTSS.SMKB,
      id:PROJECTNAME.SMKB
    },
    {
      title: "EAASE",
      timerange: 'Ongoing', date: new Date(), type: EventType.Project,
      content: "EAASE is an online CNC machine leasing platform I'm developing during my internship at Singularity Aerotech Asia. I was involved as full stack developer assigned to multiple modules including IOT dashboard which is integrated with another IOT based monitoring moddule developed by the team.",
      links:[{text:'EAASE',url:'https://singularityaerotech.asia/eaase/'}],
      points:[
        'Full stack web application development',
        'Payment gateway integration', 
      ],      
      images:[
        EAASE_IOT,
        EAASE_MTECH
      ],
      skills:PROJECTSS.EAASE,
      id:PROJECTNAME.EAASE
    }, 
    {
      title: "E-Portfolio",
      timerange: 'Ongoing', date: new Date(), type: EventType.Project,
      content: 'The e-portfolio project is this website which I developed in other to introduce myself and showcase my skills as part of my preparation before going into the industry',
      links:[{text:'E-Portfolio GitHub',url:'https://github.com/Amirul9135/e-portfolio'}],
      skills:PROJECTSS.eportfolio,
      id:PROJECTNAME.eportfolio
    },   
    // Add more timeline items as needed
  ]
  const [sortedTimelineItems, setSortedTimelineItems] = useState(timelineItems);
  const [ascending, setSorting] = useState(true) 
  const changeSorting = () => {
    setSorting(!ascending)
    sortItems()
  }
  const sortItems = () => {
    const sortedItems = [...sortedTimelineItems].sort((a, b) => {
      let comparison = a.date.getTime() - b.date.getTime();
      return !ascending ? comparison : -comparison; //use ! here because ascending is also state variable, it is not updated yet, but will be for display
    });
    setSortedTimelineItems(sortedItems);
  }; 

  
  let location = useLocation()
  useEffect(() => {
    changeSorting();
    
     const scrollto = () => {
      let ts = document.getElementById(location.hash.replace("#",''))
      console.log('key', location.hash, ts)
      if (ts) {
          let pos = ts.getBoundingClientRect().top;
         // ts.scrollIntoView({ behavior: 'smooth' })
         setTimeout(()=>{
          window.scrollTo({
            top:pos,
            behavior: 'smooth'
          })
         },1000)
       
          console.log('scrolling to',location.hash)
      } 
     }
     
     window.onload = scrollto
     return () =>{
      window.onload = null
     }
  }, []);


  console.log('now', timelineItems)
  return (
    <React.Fragment> 
      <div className='contents'>

        <div className='row'>
          
          
          <div className='sect-title'><h2>My Projects<div><i className="fa-solid fa-person-walking-dashed-line-arrow-right glowIcon"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></i></div></h2></div>
          
          <p className='text-justify'>The followings are software projects which I have completed/involved in including some of my hobby project</p>
          <div id='top-bar'>
            <SortBtn flag={ascending} handler={changeSorting}></SortBtn> &nbsp; 
          </div>

          
          <div>
            <ul className={`timeline`}>
              {sortedTimelineItems.map((item, index) => (
                <TimeLineItem
                  title={item.title}
                  key={index}
                  timerange={item.timerange}
                  type={item.type}
                  content={item.content}
                  images={item.images}
                  points={item.points}
                  links={item.links}
                  skills={item.skills}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ScrollToId></ScrollToId>
    </React.Fragment>
  );
}

export default ProjectsPage; 