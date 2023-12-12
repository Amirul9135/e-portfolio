
import React, { useEffect, useState, } from 'react';
import MinCover from './MinCover';
import GLOBAL from '../GLOBAL';
import SortBtn from './SortBtn';
import ToggleBtn from './ToggleBtn';
import TimeLineItem from './TimeLineItem';



import cover from '../images/backgroundbg.png'
import WSHC from '../images/WSHC.png'
import MIPBanner from '../images/MIPBanner.png'
import CodeContest from '../images/CodeContest.jpeg'

const BackgroundPage: React.FC = () => {
  const timelineItems = [
    {
      title: "Part-Time Programmer, CIO UTEM",
      timerange: 'June 2023 - Present', date: new Date(), type: GLOBAL.EventType.Work,
      images: [],
      content: 'As a part time programmer I was given the oppoturnity to join the development team to develop SMKB which is a financial system to be used by UTEM',
      points: [
        'Develop Account Payable module for SMKB (Sistem Maklumat Kewangan Bersepadu,UTEM)',
        'Develop web application interface and functionalities',
        'Develop Back-end services development using ASP.NET web method and web API'],
        links:[]
    },
    {
      title: "Bachelor in Computer Science (Software Development)",
      timerange: 'Sept 2021 - Present', date: new Date(), type: GLOBAL.EventType.Education,
      content: 'Current CGPA: 3.84',
      points:[
        "Dean's Award: 2021/2022, Semester: 1 & 2",
        "Dean's Award: 2021/2022, Semester: 1 & 2"
      ]
    },
    {
      title: "Intern Software Developer, SSHightech Sdn. Bhd.",
      timerange: 'Sept 2019 - Jan 2020', date: new Date(2019, 8, 1), type: GLOBAL.EventType.Work,
      content: 'I undergo my internship for my diploma studies in SS Hightech Sdn. Bhd. a software house located at Kota Kemuning, Shah Alam',
      points: [
        'Develop and design web applications',
        'Re-program, update and perform maintenance for Arduino Boards'
      ]
    },
    {
      title: "Diploma in Information Technology, UTHM",
      timerange: 'June 2017 - Jan 2020', date: new Date(2017, 5, 1), type: GLOBAL.EventType.Education,
      content: 'CGPA: 3.84 (First Class)',
      points: [
        "Dean's Award: 2017/2017, Semester: 1 & 2",
        "Dean's Award: 2018/2019, Semester: 1 & 2"
      ]
    },
    {
      title: "SPM (Pure Science), SMK Jeram",
      timerange: '2012 - 2016', date: new Date(2016, 0, 1), type: GLOBAL.EventType.Education,
      content: 'SPM (Sijil Pelajaran Malaysia) result: 1A+, 2A, 6A-',
      points: [
        "A+ : Mathematics",
        "A  : Additional Mathematics, Physic",
        "A- : Bahasa Melayu, Bahasa Inggeris, Pendidikan Islam, Sejarah, Chemistry, Biology"
      ]
    },
    {
      title: "SPRP (Sistem Penempahan Ruang Pembelajaran)",
      timerange: 'Nov 2018', date: new Date(2018, 10, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "Homes Décor",
      timerange: 'May 2019', date: new Date(2019, 4, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "Formaid",
      timerange: 'Sept 2019', date: new Date(2019, 8, 10), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "SS Board",
      timerange: 'Sept 2019', date: new Date(2019, 8, 30), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "LifeBuddy",
      timerange: 'Oct 2019', date: new Date(2019, 9, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "E-Namecard",
      timerange: 'Dec 2019', date: new Date(2019, 11, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "BDO CMQ",
      timerange: 'Jan 2022', date: new Date(2022, 0, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "SPMS (Student Performance Monitoring System)",
      timerange: 'Jan 2023', date: new Date(2023, 0, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "HIS (Hospital Information System)",
      timerange: 'Jan 2023', date: new Date(2023, 0, 11), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "FUKURO (Fundamental Kernel Utilization Realtime Overseer)",
      timerange: 'Sept 2023', date: new Date(2023, 8, 1), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "SMKB",
      timerange: 'Ongoing', date: new Date(), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "E-Portfolio",
      timerange: 'Ongoing', date: new Date(), type: GLOBAL.EventType.Project,
      content: ' '
    },
    {
      title: "Best Project, Karnival Inovasi Jabatan Teknologi Maklumat",
      timerange: 'May 2019', date: new Date(2019, 4, 1), type: GLOBAL.EventType.Achievement,
      content: 'The event was held as a platform for final year students including myself back then to present our final year project. Our project Homes Décor was awared as the best project'
    },
    {
      title: "Vice-Chancellor Award , Istiadat Konvokesyen UTHM 2020",
      timerange: 'Nov 2020', date: new Date(2020, 10, 8), type: GLOBAL.EventType.Achievement,
      content: ' '
    },
    {
      title: "Champion, C0D3 Contest",
      timerange: 'Dec 2022', date: new Date(2022, 11, 17), type: GLOBAL.EventType.Achievement,
      content: 'Our team "NULL" managed to win the first place in C0D3 contest held by FTMK, UTEM. The competition involve ',
      images:[
        CodeContest 
      ]
    },
    {
      title: "Gold Medal, Workshop II Innovation Showcase",
      timerange: 'Jan 2023', date: new Date(2023, 0, 18), type: GLOBAL.EventType.Achievement,
      content: 'Our team was awarded with the Gold Medal for the project SPMS (Student Performance Monitoring System) among the 22 project presented during the showcase.'
    },
    {
      title: "Excellent Student Award SPM 2016",
      timerange: '2017', date: new Date(2017, 0, 1), type: GLOBAL.EventType.Achievement,
      content: 'Aside from the excellent student award I was also received the following awards during the award ceremony',
      points:[
        'Anugerah Terbaik Matapelajaran (Matematik)',
        'Anugerah Terbaik Matapelajaran (Matematik Tambahan)',
        'Anugerah Terbaik Matapelajaran (Biologi)',
        'Anugerah Terbaik Matapelajaran (Fizik)',
      ]
    },
    {
      title: "Merit Award, PTL (Play to Learn) by ASEF (Asia-Europe Foundation)",
      timerange: '2014', date: new Date(2014, 10, 1), type: GLOBAL.EventType.Achievement,
      content: 'Participated in the Project Dream School under to Play to Learn programme organized by ASEF. Our team deisgned and built model of dream school in a minecraft world which won the merit award'
    },
    {
      title: "Facilitator, Program Mengenali Dunia Multimedia",
      timerange: 'Nov 2017', date: new Date(2017, 10, 11), type: GLOBAL.EventType.Event,
      content: 'This program was ornagized by my classmates and I as part of our extra co-curricular activity for MULTIMEDIA INTELIGENT PRESENTATION club. The project was held to expose primary school students at SK Penchu to presentation using Microsoft Powerpoint. Aside from being facilitator, I was also responsible in designing the banner for the program.',
      images:[MIPBanner]
    },
    {
      title: "Facilitator, Workshop I Helping Class",
      timerange: 'Oct 2023', date: new Date(2023, 9, 28), type: GLOBAL.EventType.Event,
      content: 'Workshop I was a mandatory subject for all 2nd year degree student in FTMK, UTEM. The helping class was organized to assist students in developing an information system using C++ which is also their first time experience in developing an information system for most participants',
      points:[
        'Responsible for preparing the example project and materials for the class which is still available at my GitHub',
        "Also prepared a recorded explaination for students who did not get a slot to participate"
      ],
      links:[
        { text: 'Example project', url: 'https://github.com/Amirul9135/Workshop1_CPP' },
        { text: 'Recorded Explaination', url: 'https://github.com/Amirul9135/Workshop1_CPP' }
      ],
      images:[
        WSHC
      ]
    },
    // Add more timeline items as needed
  ]
  const [sortedTimelineItems, setSortedTimelineItems] = useState(timelineItems);
  const [ascending, setSorting] = useState(true)
  const [evtWork, setEvtWork] = useState(true)
  const [evtEducation, setEvtEducation] = useState(true)
  const [evtAchievement, setEvtAchievement] = useState(true)
  const [evtProject, setEvtProject] = useState(false)
  const [evtEvent, setEvtEvent] = useState(false)
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
  const toggleEvt = (type: GLOBAL.EventType) => {
    switch (type) {
      case GLOBAL.EventType.Work:
        setEvtWork(!evtWork);
        break;
      case GLOBAL.EventType.Education:
        setEvtEducation(!evtEducation);
        break;
      case GLOBAL.EventType.Achievement:
        setEvtAchievement(!evtAchievement);
        break;
      case GLOBAL.EventType.Project:
        setEvtProject(!evtProject);
        break;
      case GLOBAL.EventType.Event:
        setEvtEvent(!evtEvent);
        break;
    }
  }
  useEffect(() => {
    changeSorting();
  }, []);


  console.log('now', ascending)
  return (
    <React.Fragment>
      <MinCover title='My Background' coverImg={cover} ></MinCover>
      <div className='contents'>

        <div className='row'>

          <div id='top-bar'>

            <SortBtn flag={ascending} handler={changeSorting}></SortBtn> &nbsp;

            <ToggleBtn text='Education' flag={evtEducation} handler={() => toggleEvt(GLOBAL.EventType.Education)} ></ToggleBtn>
            <ToggleBtn text='Work' flag={evtWork} handler={() => toggleEvt(GLOBAL.EventType.Work)} ></ToggleBtn>
            <ToggleBtn text='Achievement' flag={evtAchievement} handler={() => toggleEvt(GLOBAL.EventType.Achievement)} ></ToggleBtn>
            <ToggleBtn text='Project' flag={evtProject} handler={() => toggleEvt(GLOBAL.EventType.Project)} ></ToggleBtn>
            <ToggleBtn text='Events' flag={evtEvent} handler={() => toggleEvt(GLOBAL.EventType.Event)} ></ToggleBtn>
          </div>
          <div className='sect-title'><h2><div><i className="fa-solid fa-person-walking-dashed-line-arrow-right glowIcon"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></i></div></h2></div>
          <div>
            <ul className={`timeline ${evtProject ? '' : 'hide-project'} ${evtWork ? '' : 'hide-work'} ${evtEducation ? '' : 'hide-education'} 
                ${evtAchievement ? '' : 'hide-achievement'} ${evtEvent ? '' : 'hide-event'}`}>
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
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BackgroundPage;