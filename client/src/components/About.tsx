

import React, { useEffect, useState, } from 'react';
import profImg2 from '../images/profile-img2.png'
import cover from '../images/hero-bg.png'
import { LinkBtn, LinkBtn2 } from './LinkBtn';
import MinCover from './MinCover';

const About: React.FC = () => { 
  let age = (new Date()).getFullYear() - 1999 
  return (
    <React.Fragment>

      <MinCover title='Amirul Asraf' coverImg={cover} extraTitle={<div className="morphing">
        <div className="word">Software Developer</div>
        <div className="word">Bachelor Degree Student</div>
      </div>}></MinCover>
      <div className='contents'>

      <div id='whoami' className='row'>
          <div className='sect-title'><h2><p>Who Am I</p><div><i className="fa-regular fa-circle-user glowIcon"><i className="fa-regular fa-circle-user"></i></i></div></h2></div>
          <div>
            <img id='profile2' src={profImg2} />

            <p className='justify'>Hello, I’m Muhammad Amirul Asraf bin Mustafa currently a bachelor’s degree student currently going through my final year in my computer science degree specializing in software development. Programming and development is my passion. Towards the end of my degree, I am now looking forward to experiencing my internship and then starting my career in the industry.
              This page is a little self-indulgent, it’s all about me. Hopefully you’ll find it interesting though.
            </p>

          </div>
        </div>
        <div id='facts' className='row' >

          <div className='sect-title'><h2><p>Quick Facts About Me</p><div><i className="fa-regular fa-circle-question glowIcon"><i className="fa-regular fa-circle-question"></i></i></div></h2></div>
          <p><i className="fa-solid fa-angles-right glowIcon"><i className="fa-solid fa-angles-right"></i></i>&nbsp;&nbsp;Born in 18 December 1999, I am now {age} years old.</p>
          <p><i className="fa-solid fa-angles-right glowIcon"><i className="fa-solid fa-angles-right"></i></i>&nbsp;&nbsp;I got diploma in information technology from UTHM, Johor in 2020.</p>
          <p><i className="fa-solid fa-angles-right glowIcon"><i className="fa-solid fa-angles-right"></i></i>&nbsp;&nbsp;I'm in my final year of degree in Computer Science(Software Development) at UTEM, Melaka.</p>
          <p><i className="fa-solid fa-angles-right glowIcon"><i className="fa-solid fa-angles-right"></i></i>&nbsp;&nbsp;I'm also working as part time programmer in Pusat Perkhidmatan Pengetahuan Dan Komunikasi, UTEM.</p>
          <p><i className="fa-solid fa-angles-right glowIcon"><i className="fa-solid fa-angles-right"></i></i>&nbsp;&nbsp;Currently seeking oppoturnity for my upcoming internship placement in March 2024.</p>
        </div>
        <div id='journey' className='row' >
          <div className='sect-title'><h2><p>My Journey</p><div><i className="fa-solid fa-person-running glowIcon"><i className="fa-solid fa-person-running"></i></i></div></h2></div>

          <p className='justify'>Just a casual sharing of my journey in live until today. Hop over to <LinkBtn text='my background' redirectTo='/Backgrounds' ></LinkBtn> if you want to know more about my educational and professional background</p>

          <ul className="timeline">
            <li>
              <div className='timerange'><i className="fa-solid fa-circle-notch glowIcon rotateCircle"><i className="fa-solid fa-circle-notch"></i></i><p>1999 - 2011</p></div>
              <p className='desc'>Born in December 1999 I was raised in my hometown Kampung Bukit Kuching, Selangor. I don’t really have particular goal back then, going to my primary school only because it is normal thing to do and encouraged by my family like most kids do. But after my UPSR which was my first big examination, I managed to pass with flying colors and got straight A, it was life changing experience seeing how happy my family especially my mom was. It motivates me even more to study harder.</p>
            </li>
            <li>
              <div className='timerange'><i className="fa-solid fa-circle-notch glowIcon rotateCircle"><i className="fa-solid fa-circle-notch"></i></i><p>2012 - 2016</p></div>
              <p className='desc'>Throughout my highschool days I started to grow closer toward computers. Starting from simply gaming (quite a lot) on my brothers' laptop, around 15 years old I have access to my own laptop which allows me to explore more. I also participated in the Iltizam team which responsible in designing my school yearbooks. The first thing closest to programming that I tried was creating custom maps for a game called Warcraft 3 for fun. As I play more game, my curiosity also grew at some point I started to create bots to automate gameplay using actual programming language</p>
            </li>
            <li>
              <div className='timerange'><i className="fa-solid fa-circle-notch glowIcon rotateCircle"><i className="fa-solid fa-circle-notch"></i></i><p>2017 - 2020</p></div>
              <p className='desc'>Since I spent a lot of time with computer and also likes logical things such as programming, math etc. I decided to pursue my passion in IT by enrolling to UTHM in Johor for my diploma at 2017. It was a very new experience to me as it was my first time living away from my family but it was very statisfying and throughout my studies I was really glad for choosing to further my study in this IT field which have limitless potential.</p>
            </li>
            <li>

              <div className='timerange'><i className="fa-solid fa-circle-notch glowIcon rotateCircle"><i className="fa-solid fa-circle-notch"></i></i><p>2021 - Now</p></div>
              <p className='desc'>My original plan was to continue my study in 2020 right after graduating from diploma which was delayed due to the global pandemic. At september 2021 I enrolled to UTEM at Melaka to further my study in Computer Science specializing in Software Development until today. I met lot of friends and great lecturer at UTEM. During my third year of study, I was blessed with the oppoturnity to work as a part time programmer at the UTEM information office.</p>
            </li>
          </ul>

        </div>
      </div> 
    </React.Fragment>
  );
};
export default About

