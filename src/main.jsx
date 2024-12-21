import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);