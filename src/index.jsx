import React from 'react';
import ReactDom from 'react-dom/client';

import CounterApp from './Counter/App'
 
ReactDom.createRoot(document.getElementById('app')).render(<CounterApp />);
