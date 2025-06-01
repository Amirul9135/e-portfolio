
import React, { useEffect, useState, } from 'react';


const ImgModal: React.FC = () => {
    /* const showImg = (e: HTMLImageElement) => { 
         let imgmodal = document.getElementById('img-modal');
         if (imgmodal) {
             imgmodal.style.display = 'block'
 
             imgmodal.getElementsByTagName('img')[0].src = e.src
         }
     }
     
     useEffect(() => {
         const zoomableElements = document.querySelectorAll('.zoomable');
     
         const handleClick = (evt:EventTarget) => {
             console.log('img click')
           if (evt instanceof HTMLImageElement) {
             showImg(evt);
           }
         };
     
         zoomableElements.forEach((element) => {
           element.addEventListener('click', (e)=>{
             if(e.target){
                 handleClick(e.target)
             }
           });
         });
     
         // Cleanup: Remove event listeners when the component unmounts
         return () => {
           zoomableElements.forEach((element) => {
             element.removeEventListener('click', ()=>{});
           });
         };
       }, []); 
 */
    return (
        <React.Fragment>

            <div id='img-modal' className="img-modal" onClick={(event) => {
                if ((event.target as HTMLElement).tagName != 'IMG') {
                    let img = document.getElementById('img-modal')
                    if (img) {
                        img.style.display = 'none'
                    }
                }
            }}>
                <img className="modal-content" id="img01" />
                <span className="close" onClick={(event) => { if (event.currentTarget.parentElement) event.currentTarget.parentElement.style.display = 'none' }}>&times;</span>
            </div>
        </React.Fragment>
    )
}

export default ImgModal