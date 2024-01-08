

import React, { useEffect, useState, } from 'react'; 
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";   
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'; 
import type { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import resumepdf from "../images/Resume.pdf"

const Resume: React.FC = () => {  
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot, 
    DownloadMenuItem: () => <></>, 
    SwitchTheme: () => <></>,
    SwitchThemeMenuItem: () => <></>,
    OpenMenuItem: () => <></>,
    Open: () => <></>,
    GoToNextPageMenuItem: () => <></>,
    GoToNextPage: () => <></>, 
});
  return ( 
    <React.Fragment> 
        
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js'> 
    
    <div
        className="rpv-core__viewer"
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#112e55',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '0.25rem',
                color: '#fff !important',
            }}
        >
            <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        </div>
        <div
            style={{
                flex: 1,
                overflow: 'hidden',
            }}
        >
            <Viewer fileUrl={resumepdf} plugins={[toolbarPluginInstance]} />
        </div>
    </div>
    </Worker>
    </React.Fragment>
  );
};
export default Resume

