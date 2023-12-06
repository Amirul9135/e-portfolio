import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    
<div> 
<i className="bi bi-list mobile-nav-toggle d-xl-none"></i> 
<header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src="assets/img/profile-img.png" alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Amirul Asraf</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="tel:+601133037857" className="linkedin"><i className="bi bi-telephone-fill"></i></a>
            <a href="https://wa.me/+601133037857?text=Hello%20Amirul" className="linkedin"><i className="bi bi-whatsapp"></i></a>
            <a href="mailto:amirul.asraf9135@gmail.com" className="linkedin"><i className="bi bi-envelope-at-fill"></i></a>
            <a href="https://www.linkedin.com/in/amirul-asmf/" target="_blank" className="linkedin"><i
              className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Amirul9135" className="linkedin" target="_blank"><i className="bx bxl-github"></i></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-sliders"></i> <span>Skills</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-person-vcard"></i> <span>Background</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
 
<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" data-aos="fade-in">
    <h1>Amirul Asraf</h1>
    <p>I'm <span className="typed" data-typed-items="Student,Software Developer"></span></p>
  </div>
</section> 

<main id="main"> 
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
          <img src="assets/img/profile-img2.png" className="img-fluid" alt="" style={{ borderRadius: '10%' }}/>
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
 
  <section id="skills" className="skills section-bg" data-aos="zoom-in-down">
    <div className="container">

      <div className="section-title">
        <h2><i className="bi bi-sliders"></i>&nbsp;&nbsp;Skills</h2>
        <p>Throughout years of my studies, I have picked up variety of usefull skills from the lectures, coursework
          and projects. It is my goal to apply these knowledges and futher enhance it for my future endeavour</p>
      </div>

      <h3 className="myTitle"><i className="bi bi-code-slash"></i>&nbsp;&nbsp;Languages</h3>
      <div className="row skills-content" data-aos="fade-left">
        <div className="col-6">
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;JavaScript</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;Java</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;Phyton</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;Dart</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;PHP</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;SQL</p>
        </div>
        <div className="col-6">
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;C</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;C++</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;C#</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;Visual Basic</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;HTML</p>
          <p><i className="bi bi-x-diamond"></i>&nbsp;&nbsp;CSS</p>
        </div>

      </div>
      <br/>
      <h3 className="myTitle"><i className="bi bi-cpu">&nbsp;&nbsp;</i>Framework & Library</h3>
      <div className="row skills-content" data-aos="fade-right">
        <div className="col-6">
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;Flutter</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;NodeJS</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;ExpressJS</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;ARCore</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;Vuforia</p>
        </div>
        <div className="col-6">
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;JQuery</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;ASP.Net</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;Bootstrap</p>
          <p><i className="bi bi-hexagon"></i>&nbsp;&nbsp;Spring Boot</p>
        </div>
      </div>
      <br/> 

    </div>
  </section>  
  <section id="resume" className="resume" data-aos="zoom-in-down">
    <div className="container">

      <div className="section-title">
        <h2 style={{ width: '100%', position: 'relative' }}><i className="bi bi-person-vcard-fill"></i>&nbsp;&nbsp;Background
          <a href="download/resume/AmirulAsraf" target="_blank"> <i style={{float:'right',color:'whitesmoke'}} 
              className="bi bi-file-earmark-arrow-down-fill" title="Download A copy"></i></a>
        </h2>
        <p>I’m responsible and independent person who always eager to explore and seek new
          knowledges to improve my skills. I have good problem solving and logical
          thinking capability allowing me to work under minimal supervision</p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up"> 

          <h3 className="resume-title">Experience</h3>
          <div className="resume-item">
            <h4>Software Developer (Part time)</h4>
            <h5>06/2023 - Present</h5>
            <p><em>Pejabat Ketua Pegawai Teknologi Maklumat, UTEM</em></p>
            <ul>
              <li>Develop web application interface and functionalities</li>
              <li>Develop Back-end services development using ASP.NET web method and web API</li>
              <li>Develop Account Payable module for SMKB (Sistem Maklumat Kewangan Bersepadu)</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Software Developer (Intern)</h4>
            <h5>09/2019 - 01/2016</h5>
            <p><em>SS Hightech Sdn. Bhd.</em></p>
            <ul>
              <li>Develop and design web applications</li>
              <li>Re-program, update and perform maintenance for Arduino Boards</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor Of Computer Science (Software Development)</h4>
            <h5>2021 - Present</h5>
            <p><em>Universiti Teknikal Malaysia Melaka (UTEM)</em></p>
            <p>Current CGPA: 3.84</p>
            <p><u>Notable Achievements :</u></p>
            <ul>
      <li>
        <b>Dean's Award</b><br />
        <span>
          Session: 2021/2022, Semester: 1 & 2<br />
          Session: 2022/2023, Semester: 1 & 2
        </span>
      </li>
      <li>
        <b>Gold Medal</b><br />
        <span>
          Workshop II Innovation Showcase (18/1/2023)<br />
          Project: Student Performance Monitoring System<br />
          Role: Lead Developer
        </span>
      </li>
    </ul>
          </div>
          <div className="resume-item">
            <h4>Diploma in Information Technology</h4>
            <h5>2017 - 2020</h5>
            <p><em>Universiti Tun Hussein Onn Malaysia</em></p>
            <p>CGPA: 3.84 (First Class)</p>
            <p><u>Notable Achievements :</u></p>
            <ul>
      <li>
        <b>Anugerah Naib Chanselor</b><br />
        <span>Istiadat Konvokesyen UTHM 2020</span>
      </li>
      <li>
        <b>Gold Award (Best Project)</b><br />
        <span>
          Karnival Inovasi Jabatan Teknologi Maklumat 2019<br />
          Project: Home Decor (AR Interior Design Mobile App)
        </span>
      </li>
      <li>
        <b>Dean's Award</b><br />
        <span>
          Session: 2017/2017, Semester: 1 & 2 & 3<br />
          Session: 2018/2019, Semester: 1 & 2 & 3
        </span>
      </li>
    </ul>
          </div>
        </div>
      </div>

    </div>
  </section>  

</main> 
 

<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
    className="bi bi-arrow-up-short"></i></a>
 

 
<script src="assets/js/main.js"></script>
 </div>
  );
}

export default App;
