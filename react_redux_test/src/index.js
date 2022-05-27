import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import store from './redux/store';

import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

//檢測redux中狀態的變化,只要變化就調用 render
store.subscribe(() => {
    root.render(
        <StrictMode>
          <App />
        </StrictMode>,
      );
})
