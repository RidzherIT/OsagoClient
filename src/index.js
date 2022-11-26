import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <Context.Provider value={{
    store: new Store(),
  }}>
    <App />
  </Context.Provider>
);