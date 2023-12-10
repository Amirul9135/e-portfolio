

import React, { useEffect, useState, } from 'react';
import profImg2 from '../images/profile-img2.png'

const About: React.FC = () => {
  const [headerFull, setHeaderFull] = useState<boolean>(true);
  let age = (new Date()).getFullYear() - 1999


  useEffect(() => {
    const handleScroll = () => {

      let scrollPosition = document.documentElement.scrollTop || window.scrollY;
      console.log(scrollPosition)
      console.log(headerFull)
      if (scrollPosition > 0 && headerFull) {
        //min-height:  min(200px,20vh);  
        let changedh = window.innerHeight - Math.min(window.innerHeight * 0.2, 200);
        console.log('cg', changedh)
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = ((scrollPosition - changedh) < 1) ? 1 : scrollPosition - changedh
        }
        else if (window.scrollY) {
          window.scrollY = ((scrollPosition - changedh) < 1) ? 1 : scrollPosition - changedh
        }
        //+1 prevent hitting 0
        setHeaderFull(false)
      } else if (scrollPosition === 0 && !headerFull) {
        setHeaderFull(true)
      }
    }
    const scrollStart = () => {

    }


    window.addEventListener('scrollend', handleScroll);

    // Cleanup function
    return () => {
      // Remove the scroll event listener when the component unmounts 
      window.removeEventListener('scrollend', handleScroll);
    };
  }, [headerFull]);
  return (
    <React.Fragment>
      <section id="hero" className={`conic-anim-border d-flex flex-column justify-content-end align-items-center ${headerFull ? 'header-full' : 'header-min'}`}>
        <div className="hero-container" data-aos="fade-in"  >
          <h1>Amirul Asraf</h1>
          <div className="morphing">
            <div className="word">Software Developer</div>
            <div className="word">Bachelor Degree Student</div>
          </div>
        </div>
      </section>
      <section id="about" className="about" data-aos="zoom-in">
        <div id='whoami' className='row'>
          <div className='sect-title'><h2>Who Am I<div><i className="fa fa-user-circle-o glowIcon" aria-hidden="true"><i className="fa fa-user-circle-o" aria-hidden="true"></i></i></div></h2></div>
          <div> 
            <img id='profile2' src={profImg2} />   

            <p className='justify'>Hello, I’m Muhammad Amirul Asraf bin Mustafa currently a bachelor’s degree student currently going through my final year in my computer science degree specializing in software development. Programming and development is my passion. Towards the end of my degree, I am now looking forward to experiencing my internship and then starting my career in the industry.
              This page is a little self-indulgent, it’s all about me. Hopefully you’ll find it interesting though.
            </p>  

          </div>
        </div>
        <div id='facts' className='row'>
          
        <div className='sect-title'><h2>Quick Facts About Me<div><i className="fa fa-question-circle glowIcon" aria-hidden="true"><i className="fa fa-question-circle" aria-hidden="true"></i></i></div></h2></div>
        <p><i className="fa fa-circle-o glowIcon" aria-hidden="true"><i className="fa fa-circle-o" aria-hidden="true"></i></i>&nbsp;&nbsp;Born in 18 December 1999, I am now {age} years old.</p>
        <p><i className="fa fa-circle-o glowIcon" aria-hidden="true"><i className="fa fa-circle-o" aria-hidden="true"></i></i>&nbsp;&nbsp;I got diploma in information technology from UTHM, Johor in 2020.</p>
        <p><i className="fa fa-circle-o glowIcon" aria-hidden="true"><i className="fa fa-circle-o" aria-hidden="true"></i></i>&nbsp;&nbsp;I'm in my final year of degree in Computer Science(Software Development) at UTEM, Melaka.</p>
        <p><i className="fa fa-circle-o glowIcon" aria-hidden="true"><i className="fa fa-circle-o" aria-hidden="true"></i></i>&nbsp;&nbsp;I'm also working as part time programmer in Pusat Perkhidmatan Pengetahuan Dan Komunikasi, UTEM.</p>
        <p><i className="fa fa-circle-o glowIcon" aria-hidden="true"><i className="fa fa-circle-o" aria-hidden="true"></i></i>&nbsp;&nbsp;Currently seeking oppoturnity for my upcoming internship placement in March 2024.</p>
        </div>
        <div id='journey' className='row'>

          <div className='sect-title'><h2>My Journey<div><i className="fa fa-share-alt-square glowIcon" aria-hidden="true"><i className="fa fa-share-alt-square" aria-hidden="true"></i></i></div></h2></div>
          <ul className="timeline">
            <li>
              <div className='timerange'><i className="fa fa-circle-o-notch glowIcon" aria-hidden="true"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></i><p>1999 - 2011</p></div>
              <p className='desc'>Born in December 1999 I was raised in my hometown Kampung Bukit Kuching, Selangor. I don’t really have particular goal back then, going to my primary school only because it is normal thing to do and encouraged by my family like most kids do. But after my UPSR which was my first big examination, I managed to pass with flying colors and got straight A, it was life changing experience seeing how happy my family especially my mom was. It motivates me even more to study harder.</p>
            </li>
            <li>
              <div className='timerange'><i className="fa fa-circle-o-notch glowIcon" aria-hidden="true"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></i><p>2012 - 2016</p></div>
               <p className='desc'>Throughout my highschool days I started to grow closer toward computers. Starting from simply gaming (quite a lot) onmy brothers' laptop, around 15 years old I have access to my own laptop which allows me to explore more. I also participated in the Iltizam team which responsible in designing my school yearbooks. The first thing closest to programming that I tried was creating custom maps for Warcraft 3 for fun. As I play more game, my curiosity also grew at some point I started to create bots to automate gameplay using actual programming language</p>
            </li>
            <li>
             
            <div className='timerange'><i className="fa fa-circle-o-notch glowIcon" aria-hidden="true"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></i><p>2017 - 2020</p></div>
              <p className='desc'>Since I spent a lot of time with computer and also likes logical things such as programming, math etc. I decided to pursue my passion in IT by enrolling to UTHM in Johor for my diploma at 2017. It was a very new experience to me as it was my first time living away from my family but it was very statisfying and throughout my studies I was really glad for choosing to further my study in this IT field which have limitless potential.</p>
            </li>
            <li>
             
            <div className='timerange'><i className="fa fa-circle-o-notch glowIcon" aria-hidden="true"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></i><p>2021 - Now</p></div>
              <p className='desc'>My original plan was to continue my study in 2020 right after graduating from diploma which was delayed due to the global pandemic. At september 2021 I enrolled to UTEM at Melaka to further my study in Computer Science specializing in Software Development until today. I met lot of friends and great lecturer at UTEM. During my third year of study, I was blessed with the oppoturnity to work as a part time programmer at the UTEM information office.</p>
            </li>
          </ul>

        </div>

      </section>

    </React.Fragment>
  );
};
export default About

