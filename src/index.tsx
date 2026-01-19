import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'],
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
