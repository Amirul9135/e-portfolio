
import React, { useEffect, useState, } from 'react';
import MinCover from './MinCover';
import cover from '../images/backgroundbg.png' 
import GLOBAL from '../GLOBAL';
import SortBtn from './SortBtn';
import ToggleBtn from './ToggleBtn';
import TimeLineItem from './TimeLineItem';


const BackgroundPage: React.FC = () => {
  const timelineItems = [
    { title: "Part-Time Programmer, CIO UTEM", timerange: 'June 2023 - Present', date: new Date(), type: GLOBAL.EventType.Work, content: '' },
    { title: "Bachelor in Computer Science (Software Development)", timerange: 'Sept 2021 - Present', date: new Date(), type: GLOBAL.EventType.Education, content: 'degree utem' },
    { title: "Intern Software Developer, SSHightech Sdn. Bhd.", timerange: 'Sept 2019 - Jan 2020', date: new Date(2019, 8, 1), type: GLOBAL.EventType.Work, content: 'Intern' },
    { title: "Diploma in Information Technology, UTHM", timerange: 'June 2017 - Jan 2020', date: new Date(2017, 5, 1), type: GLOBAL.EventType.Education, content: 'Dip uthm' },
    { title: "SPM (Pure Science), SMK Jeram", timerange: '2012 - 2016', date: new Date(2016, 0, 1), type: GLOBAL.EventType.Education, content: 'high school' },
    { title: "SPRP (Sistem Penempahan Ruang Pembelajaran)", timerange: 'Nov 2018', date: new Date(2018, 10, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "Homes Décor", timerange: 'May 2019', date: new Date(2019, 4, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "Formaid", timerange: 'Sept 2019', date: new Date(2019, 8, 10), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "SS Board", timerange: 'Sept 2019', date: new Date(2019, 8, 30), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "LifeBuddy", timerange: 'Oct 2019', date: new Date(2019, 9, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "E-Namecard", timerange: 'Dec 2019', date: new Date(2019, 11, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "BDO CMQ", timerange: 'Jan 2022', date: new Date(2022, 0, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "SPMS (Student Performance Monitoring System)", timerange: 'Jan 2023', date: new Date(2023, 0, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "HIS (Hospital Information System)", timerange: 'Jan 2023', date: new Date(2023, 0, 11), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "FUKURO (Fundamental Kernel Utilization Realtime Overseer)", timerange: 'Sept 2023', date: new Date(2023, 8, 1), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "SMKB", timerange: 'Ongoing', date: new Date(), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "E-Portfolio", timerange: 'Ongoing', date: new Date(), type: GLOBAL.EventType.Project, content: ' ' },
    { title: "Best Project, Karnival Inovasi Jabatan Teknologi Maklumat", timerange: 'May 2019', date: new Date(2019, 4, 1), type: GLOBAL.EventType.Achievement, content: ' ' },
    { title: "Vice-Chancellor Award , Istiadat Konvokesyen UTHM 2020", timerange: 'Nov 2020', date: new Date(2020, 10, 8), type: GLOBAL.EventType.Achievement, content: ' ' },
    { title: "Champion, C0D3 Contest", timerange: 'Dec 2022', date: new Date(2022, 11, 17), type: GLOBAL.EventType.Achievement, content: ' ' },
    { title: "Gold Medal, Workshop II Innovation Showcase", timerange: 'Jan 2023', date: new Date(2023, 0, 18), type: GLOBAL.EventType.Achievement, content: ' ' },
    { title: "Excellent Student Award SPM 2016", timerange: '2017', date: new Date(2017, 0, 1), type: GLOBAL.EventType.Achievement, content: ' etc' },
    { title: "Merit Award, PTL (Play to Learn) by ASEF (Asia-Europe Foundation)", timerange: '2014', date: new Date(2014, 10, 1), type: GLOBAL.EventType.Achievement, content: ' ' },
    { title: "Facilitator, Program Mengenali Dunia Multimedia", timerange: 'Nov 2017', date: new Date(2017, 10, 11), type: GLOBAL.EventType.Event, content: ' ' },
    { title: "Facilitator, Workshop I Helping Class", timerange: 'Oct 2023', date: new Date(2023, 9, 28), type: GLOBAL.EventType.Event, content: ' ' },
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