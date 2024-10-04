import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterComponent } from './App';

const domNode: any = document.getElementById('root');
const root = createRoot(domNode);

root.render(<RouterComponent />)