import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Sandpack from './Sandpack.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sandpack />
  </StrictMode>
);

