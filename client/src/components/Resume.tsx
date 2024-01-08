

import React, { useEffect, useState, } from 'react'; 
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";    
import resumepdf from "../images/Resume.pdf"

const Resume: React.FC = () => {  
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return ( 
    <React.Fragment> 
        
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js'>
      <div
        style={{
          height: "100%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Viewer
          fileUrl={`${resumepdf}`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
    </React.Fragment>
  );
};
export default Resume

