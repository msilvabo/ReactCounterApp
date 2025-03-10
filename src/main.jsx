import React from 'react';
import ReactDOM from "react-dom/client";
import HelloApp from './HelloApp';
import { FisrtApp } from './FisrtApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloApp/> 
        <FisrtApp subtitle='sub titulo props'/>
    </React.StrictMode>
);