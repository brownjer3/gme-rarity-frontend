import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();

// example code from NFT Drop Calendar


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import eventReducer from './Reducers/eventReducer';

// const store = createStore(eventReducer, applyMiddleware(thunk))

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );