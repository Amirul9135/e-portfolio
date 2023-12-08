
import React, { useEffect } from 'react'; 


const About: React.FC = () => { 
    return (
        <React.Fragment>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center" data-aos="fade-in" >
                <div className="hero-container" data-aos="fade-in">
                    <h1>Amirul Asraf</h1>
                    <div className="morphing">
                        I'm
                        <div className="word">Software Developer</div>
                        <div className="word">Bachelor Degree Student</div>
                    </div>
                </div>
            </section>
            <section id="about" className="about" data-aos="zoom-in">
      <div className="container">

        <div className="section-title">
          <h2><i className="bi bi-person-fill"></i>&nbsp;&nbsp;About</h2>
          <p>I'm Muhammad Amirul Asraf bin Mustafa a Bachelor of Computer Science (Software Development) student
            currently on my 3rd year of study. I aspire to be an excellent software devloper capable of developing
            innovative software solution</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img2.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Computer Science (Software Development) Student</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>18 December 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Language:</strong> <span>Malay, English</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>011-33037857</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span id="myAge">30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Nationality:</strong> <span>Malaysian</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span>amirul.asraf9135@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              My passion for software development, especially programming starts from my highschool days. I enjoy
              playing
              games alot which makes me curious on how does it work and how was it created. Sparked from my curiosity, I
              started to dip into the field by a little bit of editing game contents and programming game bots. On 2017
              after finishing my highschool, I decided to pursue my passion professionally and my first step was
              enrolling into information technology diploma course. Now, I am 3rd year bachelor degree student, very
              close
              to fulfilling my dream to be a software developer
            </p>
          </div>
        </div>

      </div>
    </section> 
        </React.Fragment>
    );
};
export default About

