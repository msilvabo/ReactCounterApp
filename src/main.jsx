import React from 'react';
import ReactDOM from "react-dom/client";
import HelloApp from './HelloApp';
import { FirstApp } from './FisrtApp';

import './style.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {2}/>
        
    </React.StrictMode>
);