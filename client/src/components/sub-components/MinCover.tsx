

import React, { ReactNode, useEffect, useState, } from 'react'; 

interface IProps {
    title:string;
    coverImg:String; 
    extraTitle?:ReactNode;
    forceMin?:boolean
}

const MinCover: React.FC<IProps> = ({title,coverImg,extraTitle,forceMin}) => {
  const [headerFull, setHeaderFull] = useState<boolean>(true); 
  useEffect(() => { 
    const handleScroll = () => {
      if(forceMin){
        return
      }

      let scrollPosition = document.documentElement.scrollTop || window.scrollY; 
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
    window.addEventListener('scrollend', handleScroll); 
    // Cleanup function
    return () => {
      // Remove the scroll event listener when the component unmounts 
      window.removeEventListener('scrollend', handleScroll);
    };
  }, [headerFull]);
  return (
    
    <React.Fragment>
      
      <section id="hero" style={{backgroundImage:`url(${coverImg})`}} className={`conic-anim-border d-flex flex-column justify-content-end align-items-center ${forceMin ? 'header-min' : headerFull ? 'header-full' : 'header-min'}`}>
        <div className="hero-container" data-aos="fade-in"  >
          <h1>{title}</h1> 
          {extraTitle}
        </div> 
      </section> 
    </React.Fragment>
  );
};
export default MinCover;

