
import React from 'react';
import profileSM from './images/profile-img.png'


const Mainpage: React.FC = () => { 
    console.log('img')
    console.log(profileSM)
    return (

        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={profileSM} alt="" className="img-fluid rounded-circle"  />
                    <h1 className="text-light"><a href="index.html">Amirul Asraf</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="tel:+601133037857" className="linkedin"><i className="bi bi-telephone-fill"></i></a>
                        <a href="https://wa.me/+601133037857?text=Hello%20Amirul" className="linkedin"><i className="bi bi-whatsapp"></i></a>
                        <a href="mailto:amirul.asraf9135@gmail.com" className="linkedin"><i className="bi bi-envelope-at-fill"></i></a>
                        <a href="https://www.linkedin.com/in/amirul-asmf/" target="_blank" rel="noopener noreferrer" className="linkedin"><i
                            className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/Amirul9135" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                    </div>
                    <div className="social-links mt-3 text-center">
                        <a href="tel:+601133037857" className="linkedin"><i className="bi bi-telephone-fill"></i></a>
                        <a href="https://wa.me/+601133037857?text=Hello%20Amirul" className="linkedin"><i className="bi bi-whatsapp"></i></a>
                        <a href="mailto:amirul.asraf9135@gmail.com" className="linkedin"><i className="bi bi-envelope-at-fill"></i></a>
                        <a href="https://www.linkedin.com/in/amirul-asmf/" target="_blank" rel="noopener noreferrer" className="linkedin"><i
                            className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/Amirul9135" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>

                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-sliders"></i> <span>Skills</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-person-vcard"></i> <span>Background</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Mainpage

