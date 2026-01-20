import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import App from './app/App';
import './index.scss';

WebFont.load({
  google: {
    families: ['Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'],
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
// root.render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );

root.render(
  <BrowserRouter>
    <StoreProvider initialState={{}}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
